require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');
const autoRoutes = require('./routes/autos');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/autos', autoRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
