const range = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

const sum = (arr) => {
  let sum = 0;
  const xx = arr.map((val) => (sum = val + sum)); //review not optimal
  console.log('xx =>', xx);
  return sum;
};

console.log('range', range(1, 5));
console.log('sum', sum(range(1, 5)));
