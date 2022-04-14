

import { newFile } from './helpers/multiplicar.js';
import { colorTheme } from './config/colors-consola.js'
import { args } from './config/yargs.js';







console.clear();


console.log(args);
console.log('base: yargs', args.base, args.listar);


    newFile(args.base, args.listar, args.hasta)
        .then((nameFile) => console.log(nameFile.yellow, 'Éxito') )
        .catch((err) => console.log(err));


//const [,, arg3 = 'base=5'] = process.argv;
//const [, base=5] = arg3.split("=");
//console.log(base);

//const base = 6;





/*
writeFile(`tabla-${base}`,output, (err) => {
    if (err) throw err;
    console.log(`tabla-${base} se creo`);
})
*/

//traer argunto por consolo
//console.log(process.argv);

//para correr programa en consolo con l: listar si l no lista
//node app --base=3 -l