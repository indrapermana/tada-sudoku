const express = require('express');
const sudoku = require('../routes/sudoku');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api', sudoku);
}