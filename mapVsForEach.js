// map():
const numbers = [1, 2, 3]
const doubled = numbers.map((num) => num * 2)
console.log(doubled) // [2, 4, 6]
console.log(numbers) // [1, 2, 3] (original array is unchanged)


// forEach():
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6 (logs each doubled value to the console)
console.log(numbers); // [1, 2, 3] (original array is unchanged)

