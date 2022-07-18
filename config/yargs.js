const argv = require('yargs')
                .option('n',{
                    alias:'numero',
                    type: 'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('m',{
                    alias:'multi',
                    type:'boolean',
                    default:false,
                    describe:'muestra la tabla de multiplicar'
                })
                .option('s',{
                    alias:'sumar',
                    type:'boolean',
                    default:false,
                    describe:'muestra la tabla de sumar'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    demandOption:true,
                    describe:'hasta donde se hara la tabla'
                })
                .check((argv, options)=>{
                    if(isNaN(argv.n)){
                        throw 'La n tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports= argv;