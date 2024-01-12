import { Router } from "express";
import * as productController from "../controllers/producto.controller.js"
const productoRouter = Router();

productoRouter.get("/", productController.getAllController)
productoRouter.post('/', productController.postProductosController)

export default productoRouter;