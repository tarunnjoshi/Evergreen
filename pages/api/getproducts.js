import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    try {
        // Fetch all products from the database
        let products = await Product.find();
        console.log("Tarun", products); // Log products for debugging
        res.status(200).json(products); // Return products as a JSON response
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ error: 'Failed to fetch products' }); // Return error if the query fails
    }
};

export default connectDb(handler);
