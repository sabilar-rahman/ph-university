import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {

    try {
        const product = req.body;

        const result = await ProductService.createProductsIntoDB(product);

        // send response to user
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })

    } catch (err) {
        console.log(err);

    }


}

// get all products

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProductsFromDB()

        // send response to user
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })

    } catch (err) {
        console.log(err);

    }
}

// get single products ---------

const getSingleProducts = async (req: Request, res: Response) => {
    try {

        const {productId} = req.params;
        const result = await ProductService.getSingleProductsFromDB(productId)

        // send response to user
        res.status(200).json({
            success: true,
            message: "A sleek and powerful smartphone with cutting-edge features.",
            data: result
        })

    } catch (err) {
        console.log(err);

    }
}

// delete single product from db

const deleteSingleProducts = async (req: Request, res: Response) => {
    try {

        const {productId} = req.params;
        const result = await ProductService.deleteProductFromDB(productId)

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }


        // send response to user
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: null
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product",
        });

    }
}

// update product put

const updateSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        const result = await ProductService.updateProductInDB(productId, updatedData);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the product",
        });
    }
};

// search Products
// const searchProducts = async (req: Request, res: Response) => {
//     try {
//         const { searchTerm } = req.query;
//         if (!searchTerm) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Search term is required",
//             });
//         }

//         const result = await ProductService.searchProductsInDB(searchTerm.toString());

//         res.status(200).json({
//             success: true,
//             message: `Products matching search term '${searchTerm}' fetched successfully!`,
//             data: result
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             success: false,
//             message: "An error occurred while searching for products",
//         });
//     }
// };

//-------

// const searchProducts = async (req: Request, res: Response) => {
//     try {
//         const { searchTerm } = req.query;
//         if (!searchTerm || typeof searchTerm !== 'string') {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid search term provided",
//             });
//         }

//         const result = await ProductService.searchProductsInDB(searchTerm);

//         res.status(200).json({
//             success: true,
//             message: `Products matching search term '${searchTerm}' fetched successfully!`,
//             data: result
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             success: false,
//             message: "An error occurred while searching for products",
//         });
//     }
// };

const searchProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;

        if (!searchTerm || typeof searchTerm !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Invalid search term provided",
            });
        }

        // Dynamically build the query object
        const query = {
            name: { $regex: searchTerm, $options: 'i' }
        };

        const result = await ProductService.searchProductsInDB(query);

        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while searching for products",
        });
    }
};








export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProducts,
    deleteSingleProducts,
    updateSingleProduct,
    searchProducts

}