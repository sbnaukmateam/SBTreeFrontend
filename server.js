/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();

const port = parseInt(process.env.PORT, 10) || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Running at http://0.0.0.0:${port}`);
});
