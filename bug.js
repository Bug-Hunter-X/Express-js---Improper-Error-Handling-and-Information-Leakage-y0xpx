const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct way to handle 404
  }
  res.send(userData);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!'); // Avoid revealing sensitive details
});
app.listen(3000, () => console.log('Server is listening on port 3000'));