
import express from "express";
import { crearUsuario, iniciarSesion } from "../controller/auth.controller.js"; 

const router = express.Router();

router.post("/register", crearUsuario); 
router.post("/login", iniciarSesion);   
export default router;
