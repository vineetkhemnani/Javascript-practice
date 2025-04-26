# JavaScript Interview Notes 🧠✨

---

## 1. Code Output

```js
var x = 2
console.log(x++) // 2

let y = 2
console.log(y++) // 2

const z = 2
console.log(z++) // ❌ TypeError: Assignment to constant variable.
```

---

## 2. What are IIFEs?

- **IIFE**: Immediately Invoked Function Expression
- **Purpose**: Execute a function immediately after its declaration

```js
;((a, b) => {
  console.log(a + b) // Output: 30
})(10, 20)
```

---

## 3. What is the `this` keyword?

- Refers to the **object** from which the function is called
- Used for **implicit binding**

---

## 4. Output of the following code:

```js
const user = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Amit!'
    return this.firstName
  },
}

console.log(user.getName()) // Output: Piyush!
```

---

## 5. What is the result of accessing a function's `ref`?

> ℹ️ Needs clarification — possibly referring to React `ref` or object references.

---

## 6. `var` vs `let` Scoping

```js
function varScoping() {
  var x = 1

  if (true) {
    var x = 2
    console.log(x) // 2
  }

  console.log(x) // 2
}

function letScoping() {
  let x = 1

  if (true) {
    let x = 2
    console.log(x) // 2
  }

  console.log(x) // 1
}
```

- `var` is **function scoped**
- `let` is **block scoped**

---

## 7. What is `reduce()` in JavaScript?

- Reduces an array to a **single value**
- Takes a **callback** with `accumulator` and `current` value

```js
const arr = [1, 2, 3, 4]
const sum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(sum) // 10
```

---

## 8. JavaScript Variable Types

| Value                     | typeof result  |
| ------------------------- | -------------- |
| `undefined`               | `"undefined"`  |
| `true`                    | `"boolean"`    |
| `42`                      | `"number"`     |
| `NaN`                     | `"number"` ✅  |
| `"abc"`                   | `"string"`     |
| `9007199254740991n`       | `"bigint"`     |
| `null`                    | `"object"` ❗️ |
| `Symbol("id")`            | `"symbol"`     |
| `{a: 1}`                  | `"object"`     |
| `[1, 2, 3]`               | `"object"`     |
| `new Date()`              | `"object"`     |
| `/regex/`                 | `"object"`     |
| `new Map()`               | `"object"`     |
| `new Set()`               | `"object"`     |
| `function() {}`           | `"function"`   |
| `class MyClass {}`        | `"function"`   |
| `typeof undefinedVar`     | `"undefined"`  |
| `obj.nonExistentProperty` | `"undefined"`  |

---

## 9. `map()` vs `forEach()`

| Feature      | `map()`                              | `forEach()`                               |
| ------------ | ------------------------------------ | ----------------------------------------- |
| Purpose      | Transform array and return a new one | Perform an operation on each item         |
| Return Value | New array                            | `undefined`                               |
| Use Case     | Data transformation                  | Side effects (logging, DOM updates, etc.) |
| Chaining     | ✅ Yes                               | ❌ No                                     |

---

## 10. Object & Array Destructuring

### Object

```js
const { a, b, c, ...h } = countChar('aabbcdEe')
// Output: a = 2, b = 2, c = 1, h = { d: 1, e: 2 }
```

### Array

```js
const arr = [1, 2, 3]
const [a, ...b] = arr
console.log(a, b) // 1 [2, 3]
```

---

## 11. What is **Debouncing** in JavaScript?

- Debouncing ensures that a function is only executed **after a delay** from the **last event trigger**.
- Common use cases: **search input**, **window resize**

```js
function debounce(func, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
```

---

## 12. What is **Throttling** in JavaScript?

- Throttling ensures a function is only executed **once every X milliseconds**.
- Common use cases: **scroll events**, **mouse move**, **button spamming**

```js
function throttle(func, limit) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= limit) {
      lastCall = now
      func.apply(this, args)
    }
  }
}
```

---

## 13. Debouncing vs Throttling

| Feature  | Debounce                         | Throttle                          |
| -------- | -------------------------------- | --------------------------------- |
| Trigger  | After a pause                    | At regular intervals              |
| Use Case | Search inputs, resize window end | Scroll tracking, button mashing   |
| Behavior | Fires once after delay           | Fires every X ms during the event |

---

## 14. `null` vs `undefined` ❓

| Feature  | `null`                             | `undefined`                        |
| -------- | ---------------------------------- | ---------------------------------- |
| Meaning  | Explicit absence of value          | Variable declared but not assigned |
| Type     | `"object"` (weird JS behavior❗️) | `"undefined"`                      |
| Use Case | Intentional empty value            | Missing/forgotten value            |

```javascript
let a = null
let b

console.log(typeof a) // "object"
console.log(typeof b) // "undefined"
```
