const colors = require('colors')
colors.enable()
const manejador = require('fs');
const CrearTabla =async(numero= 5, multi= false, sumar= false, hasta=5) =>{
    
    try{

        let salida = '';
        let salisu = '';

        let consola = '';

        for (let i = 0; i <= hasta; i++) {
            salida += `${numero} x ${i} = ${numero * i}\n`;

            consola += `${numero} ${'x'.yellow} ${i} ${'='.bgCyan} ${numero * i}\n`;//lo q se imprimira en la consola
        }
        for (let i = 0; i <= hasta; i++) {
            salisu += colors.rainbow(`${numero} + ${i} = ${numero + i}\n`);
        }
        if(multi){
            console.log(colors.bgCyan('==============='));
            console.log(colors.trap('  tabla del:', numero));
            console.log(colors.bgGreen.red('==============='));
            console.log(consola);
        }

        if(sumar){
            console.log(colors.bgYellow('==============='));
            console.log(colors.bgGreen('  tabla del:', numero));
            console.log(colors.bgMagenta('==============='));
            console.log(salisu);
        }

        

        manejador.writeFileSync(`./salida/tabla-${numero}.txt`, salida,);
        manejador.writeFileSync(`tabla-sumar${numero}.txt`, salisu,);//crear archivo texto

        return `tabla-${numero}.txt`;
    }catch(error){
        throw error;
    }
    

}

module.exports= {
    tabla:CrearTabla
}


