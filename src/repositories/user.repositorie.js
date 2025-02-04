
import db from "../config/db.js"; 

/**
 * Inserta un nuevo usuario en la base de datos.
 * @param {string} nombre 
 * @param {string} correo 
 * @param {string} passwordHash
 * @returns {number} 
 */
export const insertUsuario = async (nombre, correo, passwordHash) => {
    const query = "INSERT INTO usuario (nombre, mail, password) VALUES (?, ?, ?)";
    const [result] = await db.execute(query, [nombre, correo, passwordHash]);
    return result.insertId;
};

/**
 * Busca un usuario por su correo electrónico.
 * @param {string} mail 
 * @returns {object|null} 
 */
export const findUsuarioByCorreo = async (mail) => {
    const query = "SELECT * FROM usuario WHERE mail = ?";
    const [rows] = await db.execute(query, [mail]);
    return rows[0] || null;
};

/**
 * Obtiene todos los usuarios de la base de datos.
 * @returns {Array} 
 */
export const getAllUsuarios = async () => {
    const query = "SELECT id_usuario, nombre, mail FROM usuario";
    const [rows] = await db.execute(query);
    return rows;
};
