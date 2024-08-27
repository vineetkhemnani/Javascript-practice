console.log(typeof undefined) // "undefined"

// 1. Primitive Types
// Undefined

console.log(typeof undefined); // "undefined"


// Boolean
console.log(typeof true);  // "boolean"
console.log(typeof false); // "boolean"


// Number
console.log(typeof 42);         // "number"
console.log(typeof 3.14);       // "number"
console.log(typeof NaN);        // "number"
console.log(typeof Infinity);   // "number"
BigInt

// javascript
console.log(typeof 9007199254740991n); // "bigint"

// String
console.log(typeof "Hello");      // "string"
console.log(typeof 'World');      // "string"
console.log(typeof `Template`);   // "string"

// Symbol
console.log(typeof Symbol("id")); // "symbol"

// Null
console.log(typeof null); // "object"

// 2. Objects and Functions
// Object
console.log(typeof {a: 1, b: 2});       // "object"
console.log(typeof [1, 2, 3]);          // "object" (arrays are also objects)
console.log(typeof new Date());         // "object"
console.log(typeof /regex/);            // "object" (regular expressions are also objects)
console.log(typeof new Map());          // "object"
console.log(typeof new Set());          // "object"

// Function

function exampleFunc() {}
console.log(typeof exampleFunc); // "function"
console.log(typeof function(){}); // "function"

// 3. Special Cases

// Array
console.log(typeof [1, 2, 3]); // "object"
// Note: Arrays are considered objects in JavaScript, so typeof returns "object". To specifically check if something is an array, you can use Array.isArray().


// Function
console.log(typeof function(){}); // "function"
// Functions are considered their own type and return "function".


// Class
class MyClass {}
console.log(typeof MyClass); // "function"
// Even though classes in JavaScript are a special kind of function, typeof returns "function".


// Undefined Variable
let x;
console.log(typeof x); // "undefined"

// Declared but Uninitialized Variable
let y;
console.log(typeof y); // "undefined"


// Reference to a Non-Existent Property
let obj = {};
console.log(typeof obj.nonExistentProperty); // "undefined"


// 4. Edge Cases
// NaN (Not-a-Number)
console.log(typeof NaN); // "number"


// Function Expression
let func = function() {};
console.log(typeof func); // "function"