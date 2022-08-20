export interface Bracket {
  start: number;
  end?: number;
  // children: Array<Bracket>;
  parent?: Bracket;
}

export interface Brackets {
  brackets: Array<Bracket>;
  findBracket: (index: number) => Bracket | undefined;
}

export const getBrackets = (text: string): Brackets => {
  let currentBracket: Bracket | undefined;
  const brackets: Array<Bracket> = [];
  for (const b of text.matchAll(RegExp("({|})", "g"))) {
    if (b[1] === "{") {
      currentBracket = {
        start: b.index!,
        parent: currentBracket,
      };
      brackets.push(currentBracket);
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

    let min = 0;
    let max = brackets.length - 1;
    while (max - min > 1) {
      const mid = Math.floor((min + max) / 2);
      const b = brackets[mid];
      if (b.start === index || b.end === index) {
        return b;
      } else if (b.start > index) {
        max = mid;
      } else {
        min = mid;
      }
    }
    while (max >= 0) {
      const bracket = brackets[max];
      if (bracket.start <= index && bracket.end! >= index) {
        return bracket;
      }
      max -= 1;
    }
    return undefined;
  };

  return {
    findBracket,
    brackets,
  };
};
