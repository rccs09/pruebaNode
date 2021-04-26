const argv = require('yargs')
                .option('b',{
                    alias : 'base',
                    type : 'number',
                    demandOption : true,
                    describe : 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias : 'listar',
                    type : 'boolean',
                    default : false,
                    describe : 'indica si se debe o no mostrar la tabla en consola'
                })
                .option('h',{
                    alias : 'hasta',
                    type : 'number',
                    demandOption : true,
                    default : 10,
                    describe : 'Propfundidad de la tabla de multiplicar'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                       throw 'la base debe ser un numero';     
                    }
                    if(isNaN(argv.h)){
                        throw 'la profundidad debe ser un numero';     
                     }
                    return true;
                })
                .argv;

module.exports = argv;                