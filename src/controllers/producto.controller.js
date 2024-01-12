import * as productsService from "../services/producto.service.js"
import { postProductosService } from "../services/producto.service.js"
export const getAllController = async (req, res) => {
    try{
        const result = await productsService.getProductsService()
        return res.status(200).json(result)
    }catch(err){
        return res.status(400).json(err.message)
    }
}


export const postProductosController = async (req, res) =>{

const producto = req.body;
postProductosService(producto)

.then((producto)=> res.status(200).json(producto))
.catch((error)=> res.status(500).send(error.message))
}