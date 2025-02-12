import mongoose from 'mongoose';

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // If already connected, proceed to handler
        return handler(req, res);
    }
    try {
        // Establish connection to the database
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        return handler(req, res); // Proceed to the handler once the connection is established
    } catch (error) {
        return res.status(500).json({ error: 'Database connection failed' });
    }
};

export default connectDb;
