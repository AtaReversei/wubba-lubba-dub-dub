function productExceptSelf(nums: number[]): number[] {
  let product = 0
  let zeroFlag = false
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      zeroFlag = true
      continue
    }
    if (product === 0 && nums[i] !== 0) {
      product = 1
    }
    product *= nums[i]
  }

  let answer = new Array(nums.length).fill(product)

  for (let i = 0; i < answer.length; ++i) {
    if (nums[i] === 0) {
      continue
    } else if (zeroFlag) {
      answer[i] = 0
    } else {
      divide(i)
    }
  }

  function divide(i: number) {
    let dividend = product
    let divisor = nums[i]
    let quotient = 0

    if (dividend > 0) {
      while (dividend > 0) {
        dividend -= divisor
        quotient += 1
      }

      answer[i] = quotient
    } else {
      dividend *= -1
      while (dividend > 0) {
        dividend -= divisor
        quotient += 1
      }

      answer[i] = quotient
    }

    return answer
  }
}
