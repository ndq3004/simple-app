'use strict';
 
const express = require('express');
 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World everyone Techmaster, last build 123');
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running 2 on http://${HOST}:${PORT}`);
});
