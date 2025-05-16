const express = require('express');
const app = express();
const port = 3000;

const lista = require[{id: 1, name: 'John Done'},
    {id: 2, name: 'Jane Done'}
];
const cors = require('cors');
app.use (cors());
app.use(express.json());
app.get('/', (req, res)=> {
    res.send(lista)
});
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
});