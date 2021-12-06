const fs = require('fs');
require('colors')

const crearArchivo = async(base = 1, listar = false, hasta = 10) => {
    
    /* return new Promise((res, rej) => {
        console.log('================')
        console.log('Tabla del 5')
        console.log('================')
        
        let salida = '';
    
        for (let i = 1; i <= 10 ; i++){
            salida += `${base} x ${i} = ${base * i}\n`
        }
    
        console.log(salida)

        fs.writeFile(`Tabla-${base}-Creada.txt`, salida, (err) => {
            if (err) throw err
            
            res(`Tabla-${base}.txt Creada`)
        })
    }) */   
    
    try {
        
        let salida = '';
        let consola = '';

    
        for (let i = 1; i <= hasta ; i++){
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.green} ${i} = ${base * i}\n`
        }

        if (listar) {
            console.log('================'.magenta)
            console.log('Tabla del', base)
            console.log('================'.magenta)
            console.log(consola)
        }


        fs.writeFileSync(`./salida/Tabla-${base}-Creada.txt`, salida);

        return(`Tabla-${base}.txt Creada`.rainbow)
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}