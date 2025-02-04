import { Router } from "express";
import productoRouter from "./producto.route.js";
import authRoutes from "../auth/routes/auth.route.js";
import protectedRoutes from "./protected.route.js";

const prefijo = "api"

const indexRouter = Router()

indexRouter.use(`/${prefijo}/productos`, productoRouter);

// Rutas de autenticación
indexRouter.use(`/${prefijo}/auth`, authRoutes);

// Rutas protegidas
indexRouter.use(`/${prefijo}`, protectedRoutes);


export default indexRouter