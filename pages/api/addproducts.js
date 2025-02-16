import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

//This is not public not anyone can access this API
const handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            for (let i = 0; i < req.body.length; i++) {
                let p = new Product({
                    title: req.body[i].title,
                    slug: req.body[i].slug,
                    desc: req.body[i].desc,
                    img: req.body[i].img,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    price: req.body[i].price,
                    availableQty: req.body[i].availableQty
                })
                await p.save();
            }
            return res.status(200).json({ message: 'Products added successfully' });
        }
        else {
            return res.status(400).json({ error: 'This method is not allowed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

export default connectDb(handler);