const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {tyoe: String, required: true},
    products: [
        {
            productId: {type: String},
            quantity: {type: Number, default: 1},
        }
    ],
    address: {type: String, required: true},
    amount: {type: Number, required: true},
    status: {type: String, default: "pending", required: true},
}, {timestamps: true});

mongoose.models = {}; 
export default mongoose.model('Order', OrderSchema);