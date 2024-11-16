const express = require('express');
const { port } = require('./liara.json')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send(`hello  this is test`)
})

app.listen(port, () => {
    console.log('server is running');
})
