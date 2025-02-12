import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    try {
        if(req.method === 'POST') {
            let p = new Product({
                title: req.body.title,
                slug: req.body.slug,
                desc: req.body.desc,
                img: req.body.img,
                category: req.body.category,
                size: req.body.size,
                color: req.body.color,
                price: req.body.price,
                availableQty: req.body.availableQty 
            })
        }
        else {
            return res.status(400).json({ error: 'This method is not allowed' });
        }
        await p.save();

        const product = new Product({ title, slug, desc, img, category, size, color, price, availableQty });
        await product.save();
        return res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

export default connectDb(handler);
 