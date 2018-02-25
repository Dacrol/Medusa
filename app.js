const express = require('express')
const compression = require('compression')
const PythonShell = require('python-shell')
const fs = require('fs')

// Create express server
const app = express()

// @ts-ignore
const pyScript = new PythonShell('./python/run.py')
// @ts-ignore
const pyImage = new PythonShell('./python/image-mediator.py', {
  pythonOptions: ['-u'],
  mode: 'binary'
})

// Express middleware
app.use(compression())
// app.use(express.static('public'));

// Start server
app.listen(3400, () => console.log('Webserver listening on port 3400'))

// Send to stdin
console.log('Sending \x1b[34m%s\x1b[0m Python: I am looking for snakes', 'TO')
pyScript.send('I am looking for snakes')

pyScript.on('message', function (message) {
  console.log('Received \x1b[31m%s\x1b[0m Python: ' + message, 'FROM')
})


pyImage.on('message' function(message) {
  console.log('Received \x1b[31m%s\x1b[0m Python: ' + message, 'FROM')
})


fs.readFile('medusa.jpg', function(err, data) {
  pyImage.send(data)
})

// Handle end of input streams
pyScript.end(function (err, code, signal) {
  if (err) throw err
  console.log('The exit code was: ' + code)
  console.log('The exit signal was: ' + signal)
  console.log('finished')
})

pyScript.end(function (err, code, signal) {
  if (err) throw err
  console.log('The exit code was: ' + code)
  console.log('The exit signal was: ' + signal)
  console.log('finished')
})