const fs = require('fs');
const colors = require('colors');

const createFile = async(base = 5 , listar, hasta = 10) => {
    try {
        const fileName = `./salida/Tabla-${base}.txt`;    
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} ${'x'} ${index} ${'='} ${base*index}\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.blue} ${base*index}\n`;
        }

        if(listar){
            console.log(colors.green('==================================='));
            console.log(colors.green('=========='),` TABLA DEL ${base} `, colors.green('=========='));
            console.log(colors.green('==================================='));
            console.log(consola);
            console.log(colors.green('==================================='));
        }

        fs.writeFileSync(fileName, salida);
        return fileName;
    } catch (err) {
        throw err;
    }
    
}





// const createFile = (base = 5 ) => {
//     const fileName = `Tabla-${base}.txt`;    
//     return new Promise((resolve, reject) => {
//         let salida = '';
//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${base*index}\n`;
//         }
        
//         try {
//             fs.writeFileSync(fileName, salida);
//             resolve(fileName);
//         } catch (err) {
//             reject(err);
//         }
//     });
    
// }

module.exports = {
    createFile : createFile
};