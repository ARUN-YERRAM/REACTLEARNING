const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  // res.send({"name":"Arun","Age":"21"})
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

