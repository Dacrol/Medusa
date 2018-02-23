// Require
const express = require('express');
const compression = require('compression');
const PythonShell = require('python-shell');

// Create express server
const app = express();

const pyScript = new PythonShell('./python/run.py');

// Express middleware
app.use(compression());
// app.use(express.static('public'));

// Start server
app.listen(3400, () =>
  console.log('Webserver listening on port 3400')
);

// sends a message to the Python script via stdin
pyScript.send('hello');
 
pyScript.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyScript.end(function (err,code,signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
  console.log('finished');
});
