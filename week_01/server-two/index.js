const express = require('express');
const app = express();
const port = 3006;

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');

const page_info = {
  'title': 'Title',
  'name': 'Frank',
  'age': 6,
  'weight': 5,
}

app.get('/', (req, res) => {
  res.render('index', page_info)
});

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
