// console.log('Hola Mundo desde app.js')

const { envs } = require("./config/env")
const { startServer } = require("./server/server")

//funcion agnóstica autoconvocada
//agnóstica porque no tien nombre
//autoconvocada porque lo ejecutamos con los parentesis
const main = () => {
    // console.log('Aqui comenzamos con el servidor')
    //console.log(envs)
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async() => {
    main()
})()
