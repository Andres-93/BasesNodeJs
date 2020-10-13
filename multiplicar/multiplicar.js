
const fs  = require('fs');
const colors = require('colors');


let listarTabla = (base, limite)=>{

    console.log('==============================='.green)

    for(var i = 0 ; i<=limite; i++ ){

        console.log(base + ' * ' + i + " = " + base*i );

    }

    console.log('==============================='.green)
}


let crearArchivo = (base, limite) => {
    
    
    return new Promise ((resolve,reject) =>{

        if (!Number(base)){
            reject(`El valor introducido - ${base} no es un numero`.red);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite;i++){

            data += (`${base} x ${i} = ` + base*i + "\n");

        }


        fs.writeFile(`tablas/tabla - ${base}`, data, (err)=>{

            if(err) 
                 reject(err);
            else    
                resolve(`tabla - ${base}.txt`);
                          
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}
