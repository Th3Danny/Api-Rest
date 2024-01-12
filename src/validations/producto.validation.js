import z from "zod";

const productoScham =z.object ({
   id_producto: z.number({
      invalid_type_error: "idProducto tiene que ser creado"
   }).optional(),

  nombre: z.string({
    invalid_type_error: "nombre tiene que ser estring",
    required_error: "nombre is required "
  }),

  precio: z.number({
    invalid_type_error: "precio tiene que ser number",
    required_error: "precio is required "
  }),

  cantidad: z.number({
    invalid_type_error: "cantidad tiene que ser number",
    required_error: "cantidad is required "
  })

})

export function validateProducto (producto){

  return productoScham.safeParse(producto);
}

export function validatePartialProducto(producto) {
    return productoScham.safeParse(producto);
}