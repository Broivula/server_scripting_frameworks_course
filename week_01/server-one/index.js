const express = require('express');
const app = express();
const port = 3006;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  };
  res.json(cat);
});

app.listen(port, () => {
  console.log(`listening to port ${port} `);
});
