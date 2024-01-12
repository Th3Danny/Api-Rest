import * as productRepository from "../repositories/producto.respositorie.js"
import { getProductosDto } from "../dtos/producto.dto.js";
import { validateProducto } from "../validations/producto.validation.js";
import { getAllProducts } from "../repositories/producto.respositorie.js";
import { postProductos } from "../repositories/producto.respositorie.js";
export const getProductsService = async () => {
    try{
        const results = await productRepository.getAllProducts()
        console.log(results);
        return getProductosDto(results)
    }catch(err){
        return err
    }
}

export const postProductosService = async(producto) =>{
    try{
        const validarProducto = validateProducto(producto)
        if (validarProducto.success) {
            const {nombre, precio, cantidad}= producto;
            const productoRes= await postProductos(nombre, precio, cantidad);
            return productoRes;
            
        }else{
            throw new Error (validarProducto.error.message)
        }
}
catch(error){
    throw error;
}
}