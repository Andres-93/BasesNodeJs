
const argv = require('./config/yargs').argv;
const colors = require('colors');


const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch(comando){

    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;

    case 'crear':     
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log('archivo creado  '.red + archivo.red))
        .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');


}


//console.log(process.argv);


//let parametroBase = argv[2];
//let base = parametroBase.split('=')[1]; //Separamos el contenido en un arreglo usando el igual.


