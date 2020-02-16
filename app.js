const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
//db config file

require('./config/db');
const app = express();
const poll = require('./routes/poll');
// set public folder

app.use(express.static(path.join(__dirname, 'public')));

//midlle ware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//enable cors

app.use(cors());
app.use('/poll',poll)

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
