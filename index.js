import express from 'express'

console.log('bienvenidos c74i')

// 1 - configurar un puerto
const app = express()

app.set("puerto",4000) // process.env.PORT || 4000 para traer el puerto de entorno o 400 por defecto


app.listen(app.get("puerto"),()=>{ //bajo este puerto realiza esta funcion
    console.log("estoy en el puerto "+app.get("puerto"))
})


// 2 - configurar los middlewares

// 3 - configuracion de las rutas 