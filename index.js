import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'

console.log('bienvenidos c74i')

// 1 - configurar un puerto
const app = express()

app.set("puerto",process.env.PORT || 4000) // process.env.PORT || 4000 para traer el puerto de entorno o 400 por defecto


app.listen(app.get("puerto"),()=>{ //bajo este puerto realiza esta funcion
    console.log("estoy en el puerto "+app.get("puerto"))
})

// 2 - configurar los middlewares

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //permite interpretar el formato json
app.use(express.urlencoded({extended:true})) //permite interpretar los datos del body de un request

// 3 - configuracion de las rutas 

app.get('/', (req,res)=>{
    console.log("hola hola")
    res.send("desde el backend de rollingCoffee")
})