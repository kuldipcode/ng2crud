'use strict';

const express = require('express');
const util = require('./util/logger');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//console.log(logger);
  util.logger.info('Hi Kuldip');


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world Kuldip\n');

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
