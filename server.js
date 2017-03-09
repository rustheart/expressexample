const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const _ = require('underscore');
let list = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' }
];
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send({ message: "Hello World" });
});
app.get('/item/:name', (req, res) => {
    let name = _.findWhere(list, { name: req.params.name });
    res.send({data: name});
});

app.get('/list', (req, res) => {
    res.send(list);
});
app.post('/saveitem', (req, res) => {
    let item = {
        id: req.body.id,
        name: req.body.name
    };

    list.push(item);
    res.send(list);
});



app.listen(3000);



