function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()
  for (let str of strs) {
    const val = str.split('').sort().join('')
    const found = map.get(val)
    if (found) {
      found.push(str)
      continue
    }
    map.set(val, [str])
  }
  return Array.from(map.values())
};