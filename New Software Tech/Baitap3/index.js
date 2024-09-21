import express from 'express'
import connectDB from './connector.js'
const app = express();
const PORT = 8000;
import customerRouter from './route/customer/index.js'  

app.use(express.json());

connectDB();

// const customerRouter = require('./route/customer/index.js')

app.use('/api/v1', customerRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
