const express = require('express');
const router = express.Router();

router.post('/change-message', (req, res) => {
  const clientMessage = req.body.message;
  const changedMessage = `Server says: ${clientMessage}`;
  res.json({ message: changedMessage });
});

module.exports = router; // Export the router

