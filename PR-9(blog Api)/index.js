const express = require("express");

let port = 9000;

let app = express();

const db = require('./config/db');

const routes = require('./routes/indexRoute');

const cors = require('cors')

app.use(cors());

app.use(express.urlencoded());

app.use('/',require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(` Server Running on : ${port} `);
});