const arr = [1, 2, 3, 4];

const sum = arr.reduce((prev, curr, i) => (arr[i] = prev + curr), 0);

console.log(arr);
