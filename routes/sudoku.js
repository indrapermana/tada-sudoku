const express = require('express');
const router = express.Router();
const validation = require('../bussiness/validation');

router.post('/validate', async (req, res) => {
  let data = req.body.data;
  if (validation.validateSudoku(data)) {
    let result = {
      'status': true,
      'message': 'The sudoku is valid'
    };
    return res.status(200).send(result);
  } else {
    let result = {
      'status': false,
      'message': 'The sudoku is not valid'
    };
    return res.status(200).send(result);
  }
});

module.exports = router;