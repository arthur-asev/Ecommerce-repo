import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
import Carrousel from '../models/carrouselModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {

    await Carrousel.deleteMany({});
    const createdCarrousels = await Carrousel.insertMany(data.carrousels);

    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);

    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers,createdCarrousels });
});
export default seedRouter;