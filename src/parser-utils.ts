export interface Bracket {
  start: number;
  end?: number;
  children: Array<Bracket>;
  parent?: Bracket;
}

export interface Brackets {
  brackets: Array<Bracket>;
  bracketsNested: Array<Bracket>;
  findBracket: (index: number) => Bracket | undefined;
}

export const getBrackets = (
  text: string,
  delimiters: { start: string; end: string } = { start: "{", end: "}" }
): Brackets => {
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
  min = Math.max(min, max);
  return {
    item: undefined,
    index: min <= 0 ? 0 : min - 1,
  };
};
