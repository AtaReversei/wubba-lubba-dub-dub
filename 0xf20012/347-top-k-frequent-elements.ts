function topKFrequent(nums: number[], k: number): number[] {
  const frequency = new Map<number, number>()
  for (let i = 0; i < nums.length; ++i) {
    const found = frequency.get(nums[i])
    if (found) {
      frequency.set(nums[i], found + 1)
    } else {
      frequency.set(nums[i], 1)
    }
  }

  return Object.entries(frequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, k)
    .map(([num]) => +num)
}
