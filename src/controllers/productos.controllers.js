import Producto from "../database/models/producto.js"

export const listarProductos = async (req , res)=>{

    try{
        const productos = await Producto.find()
        res.status(200).json(productos)
    }catch(error){
        console.error(error)
        res.status(404).json({
            message:"no se pudo obtener la lista de productos"
        })
    }

}

export const crearProductos = async(req , res)=>{
    try{
        //traigo los datos del body
        console.log(req.body);

        //agregar validacion de los datos del body...
        
        const productoNuevo=new Producto(req.body);
        
        //pedir a la bd guardar el nuevo producto

        await productoNuevo.save()

        //enviar respuesta al front

        res.status(201).json({
            message:"Se creo el producto correctamente"
        })

    }catch (error){
        console.error(error)
        res.status(400).json({
            message:"El producto no pudo ser dado de alta"
        })
    }
}

export const obtenerProducto=async(req,res)=>{
    try{
        //extraer id
        const id=req.params.id
        //buscar el producto por id en db
        const productoBuscado = await Producto.findById(id)

        console.log(productoBuscado)
        //responder con el producto

        res.status(200).json({productoBuscado, message:"producto encontrado"})
    }catch(error){
        console.error(error)
        res.status(404).json({
            message:"No se encontro el producto buscado por id"
        })
    }
}

export const editarProducto=async (req,res)=>{
    try {
        //extraer id del producto a editar y los datos a editar
        const id=req.params.id
        //buscar el producto por id en db
        const productoBuscado = await Producto.findById(id)
        //enviar un mensaje de error si no existe el producto
        if(!productoBuscado){
            return res.status(404).json({
                message:"No se encontro el producto"
            })
        }   
        //editar el producto si existe
        await Producto.findByIdAndUpdate(id,req.body)
        //responder con el producto
        res.status(200).json({message:"producto editado"})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message:"Ocurrio un error y no se pudo realizo la operacion (editar)"
        })
    }
}

export const borrarProducto=async (req,res)=>{
    try {
        //extraer id del producto a editar y los datos a editar
        const id=req.params.id
        //buscar el producto por id en db
        const productoBuscado = await Producto.findById(id)
        //enviar un mensaje de error si no existe el producto
        if(!productoBuscado){
            return res.status(404).json({
                message:"No se encontro el producto"
            })
        }   
        //editar el producto si existe
        await Producto.findByIdAndDelete(id,req.body)
        //responder con el producto
        res.status(200).json({message:"producto borrado"})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message:"Ocurrio un error y no se pudo realizo la operacion (borrar)"
        })
    }
}