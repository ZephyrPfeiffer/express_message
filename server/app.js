const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Sever started'));

app.use(express.static('build'));

const items = [

  {
    name: 'Baba Ultra Laptop',
    model: 'baba240X',
  },

  {
    name: 'Keke Round Kick Laptop',
    model: 'kekekick540',
  }

]

app.get('/api/items', (req, res) => {

  res.send(items)

})