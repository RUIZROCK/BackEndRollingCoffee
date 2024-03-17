import Producto from "../database/models/producto.js"

export const listarProductos = (req , res)=>{
    console.log("lista productos")
    res.send("aqui se lista los productos")
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
        console.log(error)
        res.status(400).json({
            message:"El producto no pudo ser dado de alta"
        })
    }
}