import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import productosRouter from './src/routes/productos.routes.js'
import "./src/database/database.js"

console.log('bienvenidos c74i')

// 1 - configurar un puerto
const app = express()

app.set("puerto",process.env.PORT || 4000) // process.env.PORT || 4000 para traer el puerto de entorno o 400 por defecto


app.listen(app.get("puerto"),()=>{ //bajo este puerto realiza esta funcion
    console.log("estoy en el puerto "+app.get("puerto"))
})

// 2 - configurar los middlewares - funciones intermedias que se ejecutan antes de las rutas

app.use(cors()) //permite conexiones remotas
app.use(morgan('dev')) //muestra info extra en la terminal
app.use(express.json()) //permite interpretar el formato json
app.use(express.urlencoded({extended:true})) //permite interpretar los datos del body de un request

const __filename = fileURLToPath(import.meta.url)
//console.log(__filename);

const __dirname=path.dirname(__filename)
//console.log(path.join(__dirname, '/public'))

app.use(express.static(path.join(__dirname, '/public')))


// 3 - configuracion de las rutas - rutas: las url de solicitudes al servidor

//http:localhost:1231/productos
app.use('/',productosRouter)