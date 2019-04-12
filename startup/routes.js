const express = require('express');
const sudoku = require('../routes/sudoku');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api', sudoku);
  app.use(error);
}