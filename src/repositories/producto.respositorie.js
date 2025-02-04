
import db from "../config/db.js"

export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM producto"
        db.execute(query)
        .then((res) => {
            
            resolve(res[0])
        })
        .catch((err) => reject(err))
    })
}

export const postProductos = (nombre, precio, cantidad )=> new Promise ((resolve, reject)=> {
    const consulta = "INSERT INTO producto (nombre, precio, cantidad) VALUES (?,?,?)"
    db.execute(consulta, [nombre, precio, cantidad])
    .then((res)=> resolve(res)) 
    .catch((err)=> reject(err))
});