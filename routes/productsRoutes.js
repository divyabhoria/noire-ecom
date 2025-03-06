// // // const express = require('express');
// // // const router = express.Router();
// // // const Product = require('../models/products');

// // // // ✅ GET all products
// // // router.get('/', async (req, res) => {
// // //     try {
// // //         const products = await Product.findAll();
// // //         if (products.length === 0) {
// // //             return res.status(404).json({ message: "No products found" });
// // //         }
// // //         res.status(200).json(products);
// // //     } catch (error) {
// // //         console.error(error);
// // //         res.status(500).json({ message: "Server error", error });
// // //     }
// // // });

// // // // ✅ GET product by ID
// // // router.get('/:id', async (req, res) => {
// // //     try {
// // //         const { id } = req.params;
// // //         const product = await Product.findByPk(id);

// // //         if (!product) {
// // //             return res.status(404).json({ message: "Product not found" });
// // //         }

// // //         res.status(200).json(product);
// // //     } catch (error) {
// // //         console.error(error);
// // //         res.status(500).json({ message: "Server error", error });
// // //     }
// // // });

// // // // ✅ POST (Create new product)
// // // router.post('/', async (req, res) => {
// // //     try {
// // //         const { name, price, category, stock, restaurantId } = req.body;

// // //         if (!restaurantId) {
// // //             return res.status(400).json({ message: "restaurantId is required" });
// // //         }

// // //         const newProduct = await Product.create({ name, price, category, stock, restaurantId });
// // //         res.status(201).json({ message: "Product created successfully", product: newProduct });

// // //     } catch (error) {
// // //         console.error(error);
// // //         res.status(500).json({ message: "Server error", error });
// // //     }
// // // });

// // // // ✅ PUT - Update product
// // // router.put('/:id', async (req, res) => {
// // //     try {
// // //         const { id } = req.params;
// // //         const { name, price, category, stock } = req.body;

// // //         const product = await Product.findByPk(id);
// // //         if (!product) {
// // //             return res.status(404).json({ message: "Product not found" });
// // //         }

// // //         await product.update({
// // //             name: name || product.name,
// // //             price: price || product.price,
// // //             category: category || product.category,
// // //             stock: stock || product.stock
// // //         });

// // //         res.status(200).json({ message: "Product updated successfully", product });
// // //     } catch (error) {
// // //         console.error(error);
// // //         res.status(500).json({ message: "Server error", error });
// // //     }
// // // });

// // // // ✅ DELETE - Remove product
// // // router.delete('/:id', async (req, res) => {
// // //     try {
// // //         const product = await Product.findByPk(req.params.id);
// // //         if (!product) return res.status(404).json({ message: "Product not found" });

// // //         await product.destroy();
// // //         res.json({ message: "Product deleted" });
// // //     } catch (err) {
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // });

// // // module.exports = router;




// // const express = require('express');
// // const router = express.Router();
// // const Product = require('../models/products');

// // // ✅ Get all products
// // router.get('/', async (req, res) => {
// //     try {
// //         const products = await Product.findAll();
// //         res.status(200).json(products);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: "Server error", error });
// //     }
// // });

// // // ✅ Get product by ID
// // router.get('/:id', async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const product = await Product.findByPk(id);

// //         if (!product) {
// //             return res.status(404).json({ message: "Product not found" });
// //         }

// //         res.status(200).json(product);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: "Server error", error });
// //     }
// // });

// // module.exports = router;








// const express = require('express');
// const router = express.Router();
// const Product = require('../models/products');

// // ✅ Get all products
// router.get('/', async (req, res) => {
//     try {
//         const products = await Product.findAll();
//         res.status(200).json(products);
//     } catch (error) {
//         console.error("❌ Error fetching products:", error);
//         res.status(500).json({ message: "Server error", error });
//     }
// });

// // ✅ Get a product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByPk(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json(product);
//     } catch (error) {
//         console.error("❌ Error fetching product:", error);
//         res.status(500).json({ message: "Server error", error });
//     }
// });

// // ✅ Create a new product
// router.post('/', async (req, res) => {
//     try {
//         const { name, price, category, stock, restaurantId } = req.body;

//         // Check for required fields
//         if (!name || !price || !category || !stock || !restaurantId) {
//             return res.status(400).json({ message: "All fields (name, price, category, stock, restaurantId) are required" });
//         }

//         const newProduct = await Product.create({ name, price, category, stock, restaurantId });
//         res.status(201).json({ message: "Product created successfully", product: newProduct });
//     } catch (error) {
//         console.error("❌ Error creating product:", error);
//         res.status(500).json({ message: "Server error", error });
//     }
// });

// // ✅ Update a product by ID
// router.put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByPk(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         await product.update(req.body);
//         res.status(200).json({ message: "Product updated successfully", product });
//     } catch (error) {
//         console.error("❌ Error updating product:", error);
//         res.status(500).json({ message: "Server error", error });
//     }
// });

// // ✅ Delete a product by ID
// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByPk(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         await product.destroy();
//         res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//         console.error("❌ Error deleting product:", error);
//         res.status(500).json({ message: "Server error", error });
//     }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Product = require('../models/products');

// ✅ Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// ✅ Get a product by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("❌ Error fetching product:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// ✅ Create a new product
router.post('/', async (req, res) => {
    try {
        const { name, brand, price, category, ingredients, skinType, expiryDate, stock, imageUrl } = req.body;

        // Check for required fields
        if (!name || !brand || !price || !category || stock === undefined) {
            return res.status(400).json({ message: "Missing required fields: name, brand, price, category, stock" });
        }

        const newProduct = await Product.create({
            name, brand, price, category, ingredients, skinType, expiryDate, stock, imageUrl
        });

        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error("❌ Error creating product:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// ✅ Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await product.update(req.body);
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error("❌ Error updating product:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// ✅ Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await product.destroy();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting product:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;

