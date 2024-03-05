let express = require('express')

let app = express()

//req (Solicitud) - res(respuesta)

app.get('/',function(req,res){
    res.send('hello world')
})

app.listen(3000,function(){
    console.log('Example app listening on port 3000!')
})