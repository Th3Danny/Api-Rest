
import z from "zod";

const usuarioSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    correo: z.string().email("El correo no es válido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const validateUsuario = (usuario) => usuarioSchema.safeParse(usuario);
