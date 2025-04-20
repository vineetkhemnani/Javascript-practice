/**
 * 🔁 What is Throttling in JavaScript?
Throttling limits how often a function is executed over time — it ensures that a function runs at most once every X milliseconds, even if it’s triggered continuously.

💡 When to use Throttling?
    -Scroll event (e.g., lazy loading images)
    -Resize window
    -Mouse move tracking
    -Continuous button hold
 */

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
function logScroll() {
  console.log('Scrolling at', new Date().toLocaleTimeString())
}

const throttledScroll = throttle(logScroll, 1000) // run at most once every 1 sec

window.addEventListener('scroll', throttledScroll)
// This will log the scroll event at most once every second, even if the user scrolls continuously.