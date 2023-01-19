const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  try {
    res.send([1, 2, 3]);
  } catch (error) {
    res.status(400).send('Error while getting list of repositories');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});