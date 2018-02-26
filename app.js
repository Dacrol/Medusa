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
  mode: 'binary',
  pythonOptions: ['-u']
})

// Express middleware
app.use(compression())
// app.use(express.static('public'));

// Start server
app.listen(3400, () => console.log('Webserver listening on port 3400'))

// Receive events
pyScript.on('message', function (message) {
  console.log('Received \x1b[31m%s\x1b[0m Python: ' + message, 'FROM')
})
pyImage.stdout.on('data', function (data) {
  console.log(Buffer.from(data).toString('binary'))
})

// Send to stdin
console.log('Sending \x1b[34m%s\x1b[0m Python: I am looking for snakes', 'TO')
pyScript.send('I am looking for snakes')

// let img = fs.readFileSync('medusa.jpg', 'base64')
// console.log('base64 length: ' + img.length)

fs.readFile('medusa.jpg', 'base64', function (err, data) {
  if (err) {
    console.warn(err)
  }
  // let base64Image = Buffer.from(data, 'binary').toString('base64')
  console.log('Sending...')
  // pyImage.send(data)
  pyImage.stdin.write(data)
  // pyImage.end()
  pyImage.end(function (err, code, signal) {
    if (err) {
      console.warn(err)
    }
    console.log('The exit code was: ' + code)
    console.log('The exit signal was: ' + signal)
    console.log('finished')
  })
})

// End of input streams
pyScript.end(function (err, code, signal) {
  if (err) {
    console.warn(err)
  }
  console.log('The exit code was: ' + code)
  console.log('The exit signal was: ' + signal)
  console.log('finished')
})
