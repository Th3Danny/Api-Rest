
import jwt from "jsonwebtoken";

const JWT_SECRET = "tu_clave_secreta";

export const verificarToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extrae el token del encabezado Authorization

    if (!token) {
        return res.status(401).json({ error: "No se proporcionó un token" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.usuario = decoded; // Agrega la información del usuario al objeto de la solicitud
        next();
    } catch (error) {
        res.status(403).json({ error: "Token inválido o expirado" });
    }
};
