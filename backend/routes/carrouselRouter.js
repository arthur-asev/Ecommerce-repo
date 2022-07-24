import express from 'express';
import Carrousel from '../models/carrouselModel.js';

const carrouselRouter = express.Router();

carrouselRouter.get('/', async (req, res) => {
    const carrousels = await Carrousel.find();
    res.send(carrousels);
});

export default carrouselRouter;