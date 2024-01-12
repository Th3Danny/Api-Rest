import { Router } from "express";
import productoRouter from "./producto.route.js";

const prefijo = "api"

const indexRouter = Router()

indexRouter.use(`/${prefijo}/productos`, productoRouter);

export default indexRouter