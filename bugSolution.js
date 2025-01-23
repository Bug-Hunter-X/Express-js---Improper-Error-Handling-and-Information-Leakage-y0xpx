const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(userData);
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ message: 'Something went wrong' });
});
app.listen(3000, () => console.log('Server is listening on port 3000'));