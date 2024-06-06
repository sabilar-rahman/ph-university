import { TProduct } from "./product.interface";
import { ProductsModel } from "./product.model";

const createProductsIntoDB = async(product:TProduct)=>{
    const result = await ProductsModel.create(product);
    return result;
}

const getAllProductsFromDB = async()=>{
    const result = await ProductsModel.find();
    return result;
}

const getSingleProductsFromDB = async (_id: string) => {
    const result = await ProductsModel.findOne({ _id });
    return result;
  };


  const deleteProductFromDB = async (_id: string) => {
    const result = await ProductsModel.findByIdAndDelete(_id);
    return result;
};

const updateProductInDB = async (_id: string, updatedData: TProduct) => {
    const result = await ProductsModel.findByIdAndUpdate (_id, updatedData, { new: true });
    return result;
};



// const searchProductsInDB = async (searchTerm: string) => {
//     const result = await ProductsModel.find({
//         $or: [
//             { name: { $regex: searchTerm, $options: 'i' } },
//             // { description: { $regex: searchTerm, $options: 'i' } },
//             // { category: { $regex: searchTerm, $options: 'i' } },
//             // { 'variants.type': { $regex: searchTerm, $options: 'i' } },
//             // { 'variants.value': { $regex: searchTerm, $options: 'i' } },
//         ]
//     });
//     return result;
// }; 



// const searchProductsInDB = async (searchTerm: string) => {
//     const result = await ProductsModel.find({
//         $or: [
//             { name: { $regex: searchTerm, $options: 'i' } },
//             // { description: { $regex: searchTerm, $options: 'i' } },
//             // { category: { $regex: searchTerm, $options: 'i' } },
//             // { 'tags': { $regex: searchTerm, $options: 'i' } }, // Adjusted to search tags
//             // { 'variants.type': { $regex: searchTerm, $options: 'i' } },
//             // { 'variants.value': { $regex: searchTerm, $options: 'i' } },
//         ]
//     });
//     return result;
// };

const searchProductsInDB = async (query: object) => {
    const result = await ProductsModel.findOne(query);

    
    return result;
};




export const ProductService ={
    createProductsIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    deleteProductFromDB,
    updateProductInDB,
    searchProductsInDB


}