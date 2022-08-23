export interface Bracket {
  start: number;
  end?: number;
  children: Array<Bracket>;
  parent?: Bracket;
}

export interface Brackets<B extends Bracket> {
  brackets: Array<B>;
  bracketsNested: Array<B>;
  findBracket: (index: number) => B | undefined;
}

export interface BracketWithOriginal extends Bracket {
  end: number;
  originalStart: TextPosition;
  originalEnd: TextPosition;
}

export const getBrackets = (
  text: string,
  options?: {
    delimiters?: { start: string; end: string };
  }
): Brackets<Bracket> => {
  const delimiters = options?.delimiters ?? { start: "{", end: "}" };
  let currentBracket: Bracket | undefined;
  const brackets: Array<Bracket> = [];
  const bracketsNested: Array<Bracket> = [];
  for (const b of text.matchAll(
    RegExp(`(${delimiters.start}|${delimiters.end})`, "g")
  )) {
    if (b[1] === delimiters.start) {
      currentBracket = {
        start: b.index!,
        end: undefined,
        parent: currentBracket,
        children: [],
      };
      brackets.push(currentBracket);
      if (currentBracket.parent) {
        currentBracket.parent.children.push(currentBracket);
      } else {
        bracketsNested.push(currentBracket);
      }
    } else if (currentBracket) {
      currentBracket.end = b.index;
      currentBracket = currentBracket.parent;
    }
  }

  const findBracket = (index: number): Bracket | undefined => {
    if (index < 0 || !brackets.length) {
      return undefined;
    }
    // if (index > brackets[brackets.length - 1].start) {
    //   return brackets[brackets.length - 1].end
    // }

    const bracket = binarySearch(brackets, (b) =>
      b.start === index || b.end === index ? 0 : index - b.start
    );
    if (bracket.item) {
      return bracket.item;
    }
    let max = bracket.index + 1;
    while (max >= 0) {
      const bracket = brackets[max];
      if (bracket && bracket.start <= index && bracket.end! >= index) {
        return bracket;
      }
      max -= 1;
    }
    return undefined;
  };

  return {
    findBracket,
    bracketsNested,
    brackets,
  };
};

export const binarySearch = <T>(
  array: Array<T>,
  compare: (a: T) => number
): { index: number; item: T | undefined } => {
  let min = 0;
  let max = array.length;
  let compareValue: number | undefined;
  while (max > min) {
    const mid = Math.floor((min + max) / 2);
    const item = array[mid];
    compareValue = compare(item);
    if (compareValue === 0) {
      return { item, index: mid };
    } else if (compareValue < 0) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  min = Math.min(array.length - 1, Math.max(min, max));
  const index =
    min <= 0 ? 0 : array[min] && compare(array[min]) < 0 ? min - 1 : min;
  return {
    item: undefined,
    index,
  };
};

export interface MatchPosition {
  length: number;
  index: number;
  line: number;
  column: number;
  cumulative: number;
  position: number;
  text: string;
}

export interface TextPosition {
  index: number;
  line: number;
  column: number;
}

export interface CleanedText {
  brackets: Brackets<BracketWithOriginal>;
  newLines: Array<number>;
  patternMatches: Array<MatchPosition>;
  patternMatchesByPosition: Map<number, MatchPosition>;
  cleanText: string;
  mapIndex: (index: number) => TextPosition;
}

export const cleanRawText = (
  text: string,
  regExps: Array<{ pattern: RegExp; replace: string }>
): CleanedText => {
  const newLines = [
    // TODO: maybe find a better way to find the first line "0, 0"
    { index: 0 },
    ...text.matchAll(/\n/g),
  ].map((b) => b.index!);

  const combined = RegExp(
    regExps.map((r, i) => `(?<p${i}>${r.pattern.source})`).join("|"),
    "g"
  );
  const cleaned: Array<string> = [];
  let textIndex = 0;
  let cumulative = 0;
  const patternMatches: Array<MatchPosition> = [...text.matchAll(combined)].map(
    (v) => {
      const mIndex = v.index!;

      cleaned.push(text.substring(textIndex, mIndex));
      textIndex = mIndex + v[0].length;
      const toReplace = regExps.find((_, i) => v.groups![`p${i}`])!.replace;
      cleaned.push(toReplace);

      const line = binarySearch(newLines, (index) => mIndex - index).index;
      const currentCumulative = cumulative;
      cumulative += v[0].length - toReplace.length;

      return {
        length: v[0].length,
        index: mIndex,
        line,
        column: mIndex - newLines[line],
        cumulative,
        position: mIndex - currentCumulative,
        text: v[0],
      };
    }
  );
  cleaned.push(text.substring(textIndex));

  const mapIndex = (index: number): TextPosition => {
    let delta = 0;
    if (patternMatches.length) {
      const match = binarySearch(patternMatches, (m) => index - m.position);
      const pattern = patternMatches[match.index];
      delta = pattern.position > index ? 0 : pattern.cumulative;
    }
    const mappedIndex = delta + index;
    const line = binarySearch(newLines, (index) => mappedIndex - index).index;
    const column = mappedIndex - newLines[line] - 1;
    // TODO: maybe find a better way to find the first line "0, 0"
    // if (mappedIndex > newLines[0]) {
    //   line += 1;
    // }
    return {
      column,
      index: mappedIndex,
      line,
    };
  };

  const cleanText = cleaned.join("");
  const brackets = getBrackets(cleanText);

  brackets.brackets.forEach((b) => {
    (b as BracketWithOriginal).originalStart = mapIndex(b.start);
    (b as BracketWithOriginal).originalEnd = mapIndex(b.end!);
  });

  return {
    brackets: brackets as Brackets<BracketWithOriginal>,
    newLines,
    patternMatches,
    cleanText,
    mapIndex,
    patternMatchesByPosition: new Map(
      patternMatches.map((p) => [p.position, p])
    ),
  };
};
