const express = require('express');
const path = require('path');
const cors = require('cors');

const notifyRouter = require('./notify')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use(express.static(path.join('../')));

app.use('/api', notifyRouter);


app.get('/*', (req, res) => {
  res.sendFile(path.resolve('../', 'index.html'));
});

const port = 7000;

const server = app.listen(port, () => console.log(`listening to port ${port}....`));

module.exports = server;
