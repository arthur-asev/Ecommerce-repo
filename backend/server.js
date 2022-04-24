import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedsRouter.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import orderRouter from './routes/orderRouter.js';




dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('conectado ao banco de dados');
    })
    .catch((err) => {
        console.log(err.message);
    });


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});



app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server em : http://localhost:${port}`);
});