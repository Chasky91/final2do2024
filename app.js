import express from 'express'
import { delProducto, delProductos, getProductos, getProrducto, postProducto, putProducto } from './controllerProductos.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req, res) => {
    res.send("Raiz del proyecto")
})

app.get('/productos',getProductos)
app.get('/producto/:id',getProrducto)
app.post('/producto', postProducto)
app.put('/producto/:id', putProducto)
app.delete('/producto/:id',delProducto)
app.delete('/productos',delProductos)

app.listen(5000, console.log('Corriendo por el puerto 5000'))