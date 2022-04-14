import { writeFile, writeFileSync } from 'fs';

let output = '';
export const newFile = async(base = 5, listar = false, hasta = 10) =>{

    for (let index = 1; index <= hasta; index++){

        output += `${base} X ${index} = ${index*base}\n`;

    }
    
    try {
        if(listar){
            console.log("==================".silly);
            console.log(`TABLA DEL ${base}`);
            console.log("==================".silly);
            console.log(listar);
            console.log(output.verbose);
        }
        await writeFileSync(`./salida/tabla-${base}.txt`,output);
        return `tabla-${base} se creo`;        
    } catch (error) {
        throw error;
    }

}



/*
export const newFile = (base = 5) =>{


    console.log("prueba");
}
*/

