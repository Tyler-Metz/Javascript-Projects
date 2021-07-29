const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    let fileName = path.resolve(__dirname, 'index.html');
    res.sendFile(fileName);
})

app.use('/test', express.static(path.resolve(__dirname)));

// Runs when going to localhost:2999/test, and serves ./server.js as text
// app.use('/test', express.static(path.resolve(__dirname, 'server.js')))
app.listen(2999);