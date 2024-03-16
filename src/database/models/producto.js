import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type:String, 
        required:true,
        maxlength:30,
        minlength:2,
        unique:true
    },

    caracteristicas:{
        type:String, 
        required:true,
        minlength:10,
        maxlength:100
    },

    caracteristica_amplia:{
        type:String, 
        required:true,
        minlength:20,
        maxlength:1000
    },

    categoria:{
        type:String, 
        required:true,
        enum:['Infusiones','Batidos','Dulce','Salado']
    },

    precio:{
        type:Number, 
        required:true,
        max:30000,
        min:100
    },

    imagen:{
        type:String, 
        required:true,
        validate:{
            validator:function(valor){
                //validar el valor con un patron (regex) usando test
                return //true o false
            }
        },message:props=>`${props.value} no es una url de imagen valida.`,
        unique:true
    },

    disponible:{type:String, required:true}
});

//generamos el modelo del producto que tendra el schema definido anteriormente (productoSchema)

const Producto = mongoose.model('producto', productoSchema)

export default Producto;