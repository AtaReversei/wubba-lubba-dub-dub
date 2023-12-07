// ترتیب

function bubble_sort(arr: number[]): void {
  for (let i = arr.length - 1; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

let arr = [5, 10, 3, 0, 2, 12, 43, 1, 1, 2]
bubble_sort(arr)
console.log(arr)