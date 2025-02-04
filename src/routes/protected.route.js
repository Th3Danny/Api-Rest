
import express from "express";
import { verificarToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/protected", verificarToken, (req, res) => {
    res.json({ mensaje: "Ruta protegida", usuario: req.usuario });
});

export default router;
