import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const Carrousel = mongoose.model('Carrousel', productSchema);
export default Carrousel;