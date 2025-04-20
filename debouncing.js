/**
 Debouncing in JavaScript is a technique to limit how often a function is executed, especially when that function is triggered repeatedly, like on:

scroll

resize

keypress / input

mousemove

💡 Why use Debouncing?
To improve performance and avoid excessive function calls that could slow down your app.

📌 Example Use Case:
You want to run a search API only after the user stops typing for 300ms, not on every key press.
 */

function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId) // cancel previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args) // run after delay
    }, delay)
  }
}

function searchQuery(query) {
  console.log('Searching for:', query)
}

const debouncedSearch = debounce(searchQuery, 300)

document.getElementById('searchInput').addEventListener('input', (e) => {
  debouncedSearch(e.target.value)
})
