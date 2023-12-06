// we have 2 crystal balls that will break if dropped from high enough distance
// determine the exact spot where it will break

function dropped_my_balls(will_break_array: boolean[]): number {
  const jump_amount = Math.floor(Math.sqrt(will_break_array.length));
  for (let i = 0; i < will_break_array.length; i + jump_amount) {
    if (will_break_array[i]) {
      for (let j = i - jump_amount + 1; j < i; ++j) {
        if (will_break_array[i]) {
          return j;
        }
      }
    }
  }
  return will_break_array.length;
}
