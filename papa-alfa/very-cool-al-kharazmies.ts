function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) return true;
  }
  return false;
}

function binary_search_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    const middle = Math.floor(high + (high - low) / 2);
    const value = haystack[middle];

    if (needle > value) {
      low = middle + 1;
    } else if (needle < value) {
      high = middle;
    } else {
      return true;
    }
  }
  return false;
}
