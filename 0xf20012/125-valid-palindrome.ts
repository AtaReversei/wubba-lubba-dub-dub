function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  const str = s.toLowerCase()

  while (left < right) {
    if (!isAlphaNumeric(str.charAt(left))) ++left
    else if (!isAlphaNumeric(str.charAt(right))) --right
    else if (str.charAt(left) === str.charAt(right)) {
      ++left
      --right
    } else return false
  }
  return true
}

function isAlphaNumeric(s: string): boolean {
  if ((s >= "a" && s <= "z") || (s >= "0" && s <= "9")) return true
  return false
}
