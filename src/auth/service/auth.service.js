
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validateUsuario } from "../validations/auth.validation.js";
import { insertUsuario, findUsuarioByCorreo } from "../../repositories/user.repositorie.js";

const JWT_SECRET = "tu_clave_secreta"; // Cámbiala por una clave secreta más segura

export const registrarUsuario = async (usuario) => {
    const { nombre, correo, password } = usuario;

    // Validar datos de entrada
    const validation = validateUsuario(usuario);
    if (!validation.success) {
        throw new Error(validation.error.errors.map(err => err.message).join(", "));
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = await findUsuarioByCorreo(correo);
    if (usuarioExistente) {
        throw new Error("El correo ya está registrado");
    }

    // Hashear contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Insertar usuario en la base de datos
    const id = await insertUsuario(nombre, correo, passwordHash);

    return { id, nombre, correo };
};

export const loginUsuario = async (correo, password) => {
    const usuario = await findUsuarioByCorreo(correo);
    if (!usuario) {
        throw new Error("Usuario no encontrado");
    }

    // Comparar contraseñas
    const passwordCorrecta = await bcrypt.compare(password, usuario.password);
    if (!passwordCorrecta) {
        throw new Error("Contraseña incorrecta");
    }

    // Generar token JWT
    const token = jwt.sign(
        { id: usuario.id_usuario, correo: usuario.correo },
        JWT_SECRET,
        { expiresIn: "1h" } // El token expira en 1 hora
    );

    return { token, usuario: { id: usuario.id_usuario, nombre: usuario.nombre, correo: usuario.correo } };
};
