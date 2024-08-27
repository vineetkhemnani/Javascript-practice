const express = require('express')
const EventEmitter = require('events') // EventEmitter class
const app = express()

const event = new EventEmitter() // event object

let count = 0

event.on('countAPI', () => {
  count++
  console.log('event called ',count)
}) // .on has two params - 1. event name 2. callback function

app.get('/', (req, res) => {
  res.send('api called')
  event.emit('countAPI') // event called
})
app.get('/search', (req, res) => {
  res.send('search api called')
})
app.get('/update', (req, res) => {
  res.send('update api called')
})

app.listen(3000, () => {
  console.log('server started on port 3000')
})
