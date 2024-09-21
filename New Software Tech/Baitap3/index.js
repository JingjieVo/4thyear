const connectDB = require('./connector');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const customerController = require('./controllers/customerController/customerController')

app.use(express.json());

connectDB();

app.use('/api/v1', customerController)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
