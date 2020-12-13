const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send("Hola Diego");
});

routes.get('/diego', (req, res) => {
    return res.send("Diego");
})

module.exports = routes;