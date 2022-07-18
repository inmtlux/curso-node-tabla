var colors = require('colors')
colors.enable()
const { tabla }= require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();




console.log('numero: yargs',argv.numero, 'hasta: yargs',argv.hasta);

tabla(argv.n, argv.m, argv.s, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo, 'creado')))
    .catch(err => console.log(err));







