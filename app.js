// Require
const express = require('express');
const compression = require('compression');

// Create express server
const app = express();


// Express middleware
app.use(compression());
// app.use(express.static('public'));

// Start server
app.listen(3400, () =>
  console.log('Webserver listening on port 3400')
);

