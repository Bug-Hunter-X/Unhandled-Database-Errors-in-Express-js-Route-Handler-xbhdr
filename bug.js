const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUserById(userId, (err, user) => {
    if (err) {
      // The error is not handled properly
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});