const numbers = [34, 15, -145, 2];

function smallestIntegerFinder(args) {
  return Math.min(...args);
}
console.log(smallestIntegerFinder(numbers));