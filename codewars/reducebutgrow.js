const numbers = [1, 2, 15, 4];

function grow(x) {
  return x.reduce((a, b) => a * b, 1);
}

console.log(grow(numbers));