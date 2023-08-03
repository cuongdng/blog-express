const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Logger
app.use(morgan('combined'));

route(app);
// Template engine

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
