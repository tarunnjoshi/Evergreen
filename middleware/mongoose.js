import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        console.log("✅ Already connected to MongoDB");
        return handler(req, res);
    }

    try {
        console.log("🔄 Connecting to MongoDB...", process.env.MONGODB_URI);
        
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ Successfully connected to MongoDB");
        return handler(req, res);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        return res.status(500).json({ error: 'Database connection failed', details: error.message });
    }
};

export default connectDb;
