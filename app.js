const {crearArchivo} = require('./helpers/multiply.js')
const argv = require('./config/yargs')

console.clear()

/* console.log(argv)
console.log(argv.b) */


/* const [, , arg3 = 'base=1'] = process.argv;
const [, base = 1] = arg3.split('='); */

//const base = 8

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err))

