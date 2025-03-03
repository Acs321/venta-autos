const express = require('express');
const Auto = require('../models/Auto');

const router = express.Router();

router.get('/', async (req, res) => {
    const autos = await Auto.find();
    res.json(autos);
});

router.post('/', async (req, res) => {
    const nuevoAuto = new Auto(req.body);
    await nuevoAuto.save();
    res.json(nuevoAuto);
});

module.exports = router;
