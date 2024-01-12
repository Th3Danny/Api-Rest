export function getProductosDto(productos){
    const arr = [];
    productos.forEach((producto) => {
        arr.push({
            Productonombre: producto.nombre || " ",
            Productoprecio: producto.precio || " ",
        })
    })
    return arr;
}