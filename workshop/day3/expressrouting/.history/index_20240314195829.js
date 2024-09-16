const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  res.send({"name":"Arun","Age":})
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

