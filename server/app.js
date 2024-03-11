const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Sever started'));

app.use(express.static('build'));