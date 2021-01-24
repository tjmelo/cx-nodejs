const express = require('express'),
      port = 3000;

express()
    .get('/', (req, res) => {
        res.send(`Hello Word!`)
    })
    .listen(port, e => console.log(`Running server at ${port}`));