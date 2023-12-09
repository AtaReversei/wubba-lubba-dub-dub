function contains_duplicate(nums: number[]): boolean {
  const map = new Map<number, boolean>()
  for (let i = 0; i < nums.length; ++i) {
    if (map.get(nums[i])) return true
    map.set(nums[i], true)
  }
  return false
}