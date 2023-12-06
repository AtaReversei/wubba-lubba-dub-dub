// we have 2 crystal balls that will break if dropped from high enough distance
// determine the exact spot where it will break

function dropped_my_balls(breaks: boolean[]): number {
  const jump_amount = Math.floor(Math.sqrt(breaks.length));
  for (let i = jump_amount; i < breaks.length; i + jump_amount) {
    if (breaks[i]) {
      for (let j = i - jump_amount + 1; j < i; ++j) {
        if (breaks[i]) {
          return j;
        }
      }
    }
  }
  return breaks.length;
}
