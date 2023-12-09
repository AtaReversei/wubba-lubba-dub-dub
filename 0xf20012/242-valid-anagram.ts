function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>()
  for (let i = 0; i < s.length; ++i) {
    const char = s[i]
    let val = map.get(char)
    if (val) map.set(char, ++val)
    if(!val) map.set(char, 1)
  }

  for (let i = 0; i < t.length; ++i) {
    const char = t[i]
    let val = map.get(char)
    if(val === 0) return false;
    if (!val) return false
    if (val) map.set(char, --val)
  }

  let val = 0
  for (let value of map.values()) {
    val += value
  }

  if (val !== 0) return false

  return true
};
