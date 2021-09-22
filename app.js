// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array 

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

const {archivoTareas, guardarTarea, leerPorEstado} = require("./tareas");



const  opcion = process.argv[2]
const titulo = process.argv[3]

switch(opcion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leer();
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        tareas.forEach((tarea, index) => {
            console.log(index + '. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        console.log()
        break;
    case "crear":
        const tarea = {
            titulo: titulo,
            estado: "pendiente"
        }
        guardarTarea(tarea)
        break;
    case "filtrar":
        let estado = titulo
        let filtrados = leerPorEstado(estado)
        filtrados.forEach(element => {
            console.log(element)
        });
        break;

    // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // Micro desafío 2
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
