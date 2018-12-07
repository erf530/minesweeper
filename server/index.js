const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;


const app = express();
const bodyParser = require('body-parser');

module.exports = app;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

const index = path.join(__dirname, '../index.html');
app.get('/', (req, res) => res.sendFile(index));

app.listen(port, () => console.log(`listening on port ${port}`));
