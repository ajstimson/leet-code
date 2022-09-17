const arr = [1, 7, 3, 6, 5, 6];

const pivot = (arr) => {
  //start from each left of the array and sum the values
  const left = arr.reduce((prev, curr, i) => prev + curr, 0);

  const right = arr.reduceRight((prev, curr, j) => prev + curr, 0);

  console.log(left);
};

const getMax = (a, b) => Math.max(a, b);

pivot(arr);
