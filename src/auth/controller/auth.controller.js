
import { registrarUsuario, loginUsuario } from "../service/auth.service.js";

export const crearUsuario = async (req, res) => {
    try {
        const usuario = await registrarUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const iniciarSesion = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const result = await loginUsuario(correo, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
