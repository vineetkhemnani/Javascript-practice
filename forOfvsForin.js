// for...of allows you to go through the elements of an iterable one at a time. It gives you the actual values directly, without concerning yourself with properties or keys.
const arr = [1, 2, 3]

for (const value of arr) {
  console.log(value) // Prints 1, 2, 3
}

// Iterables can be arrays,strings,sets,maps



// for...in is used to examine the properties of an object, including those inherited from its parent object. It provides the property keys, allowing you to access the corresponding values if necessary. However, the order of iteration may not match the order in which the properties were defined in the object.
const obj = { a: 1, b: 2, c: 3 }

for (const key in obj) {
  console.log(key) // Prints 'a', 'b', 'c'
  console.log(obj[key]) // Access the corresponding value: 1, 2, 3
}
