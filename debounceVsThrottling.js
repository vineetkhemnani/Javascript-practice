// throttling vs debouncing differences
// Throttling: Ensures a function is called at most once in a specified time interval.
// Debouncing: Ensures a function is called only after a specified time interval has passed since the last invocation.
//
// Use Cases:
// - Throttling: API calls, scroll events, resize events.
// - Debouncing: Search input, window resize, form validation.
//
// Performance: Throttling can improve performance by reducing the number of function calls, while debouncing can improve performance by limiting the execution of a function until necessary.
//
// Implementation: Throttling typically uses a timer to control the execution frequency, while debouncing uses a timer to delay execution until after the last event.
//
// Example:
// - Throttling: A function that logs the current time every second.
// - Debouncing: A function that logs the current time only after the user stops typing for 300ms.
//
// In summary, both throttling and debouncing are techniques to control the execution of functions in JavaScript, but they serve different purposes and are used in different scenarios. Throttling is about limiting the frequency of function calls, while debouncing is about delaying function execution until a certain condition is met.
//
// Example of Throttling
// function throttle(func, limit) {
//   let lastCall = 0
//   return function (...args) {
//     const now = Date.now()
//     if (now - lastCall >= limit) {
//       lastCall = now
//       func.apply(this, args)
//     }
//   }
// }
//
// Example of Debouncing
// function debounce(func, delay) {
//   let timeoutId
//   return function (...args) {
//     clearTimeout(timeoutId) // cancel previous timer
//     timeoutId = setTimeout(() => {
//       func.apply(this, args) // run after delay
//     }, delay)
//   }
// }
// }