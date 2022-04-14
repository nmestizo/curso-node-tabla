
import yargs from 'yargs'
//const args = yargs(process.argv.slice(2)).parse();


export const args = yargs(process.argv.slice(2)).option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "Base de la tabla de multiplicar"
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: "Lista la tabla en consola"
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: "Hasta el número que multiplica"
})
.check((argv) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número'
    }
    return true
})
.argv;
