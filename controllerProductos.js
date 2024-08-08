import productos from './productos.js'

export const getProductos = (req, res) => {

    if(productos.length === 0 ){
        res.json({message:"Aun no hay productos"})
        return 
    }
    res.json(productos)
}

export const getProrducto = (req, res) => {
    let id = parseInt(req.params.id)
    for(let i = 0; i < productos.length; i++) {
        if(id === productos[i].id) {
            res.json(productos[i])
            return
        }
    } 
    res.json({message:"no se encontro el producto"})
}

export const postProducto = (req, res) => {
    let nuevoProducto = req.body
    nuevoProducto.id = productos.length +1 
    productos.push(nuevoProducto)
    res.json({message:productos})

}

export const putProducto = (req, res) => {

    let id = parseInt(req.params.id)
    let product = req.body

    for(let i = 0; i < productos.length; i++) {
        if(id === productos[i].id) {
            productos.splice(i, 1, product)
            res.json({"Actualizado" : product})
            return
        }
    } 

}


export const delProducto = (req, res) => {
    let id = parseInt(req.params.id)
    for(let i = 0; i < productos.length; i++){
        if(productos[i].id === id){
            productos.splice(i,1)
            res.json({message :"Producto eleiminado"})
            return
        }
    }   
    return res.json({message : "El jugador no existe"})
}


export const delProductos = (req, res) => {
    productos.splice(0,productos.length)
    return res.json({message : "Productos eliminados"})
}


