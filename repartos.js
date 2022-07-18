
const CrearUsu = async(id=1,sueldo=false)=>{
    const usuarios = [
        {
            id:1,
            nombre:'Jesus'
        },
        {
            id:2,
            nombre:'Orlando'
        },
        {
            id:3,
            nombre:'Jhan'
        }
    ];

    try{
        let salario = ''
        if(sueldo){
            console.log(`El trabajador ${id} tiene un sueldo de ${sueldo}`)
        }
    }catch(error){
        throw error;
    }

}

