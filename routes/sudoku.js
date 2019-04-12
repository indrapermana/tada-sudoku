const express = require('express');
const router = express.Router();

router.post('/validate', async (req, res) => {
  let input = req.body.number;

  // validation
  if (!input) {
    return res.status(400).send('No input. Please provide the input.');
  } else if (input.length !== 81) {
    return res.status(400).send('Input number must be 81 numbers long.');
  }

  return res.status(200).send('Hail SUDOKU');
});

module.exports = router;