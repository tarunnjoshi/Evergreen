import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

//This is not public; not anyone can access this API
const handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            for (let i = 0; i < req.body.length; i++) {
                // Convert slug to lowercase and replace spaces with hyphens
                req.body[i].slug = req.body[i].slug.toLowerCase().replace(/\s+/g, '-');

                // Update the product in the database
                await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
            }
            return res.status(200).json({ message: 'Products updated successfully' });
        }
        else {
            return res.status(400).json({ error: 'This method is not allowed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update products' });
    }
};

export default connectDb(handler);
