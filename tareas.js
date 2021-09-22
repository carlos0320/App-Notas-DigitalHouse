const fs = require('fs')
const tareas = require('./tareas.json')

function escribirJSON(tareas){
    const tareasJSON = JSON.stringify(tareas)
    fs.writeFileSync('./tareas.json', tareasJSON)   
}

function guardarTarea(tarea){
    let tareas = leerJSON()
    tareas.push(tarea)
    escribirJSON(tareas)
}

function leerJSON(){    
    return tareas
}

function leerPorEstado(estado){
    const tareas = leerJSON()
    const tareasPorEstado = tareas.filter(tarea => tarea.estado === estado)
    return tareasPorEstado
}

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
}

module.exports = {
    archivoTareas,    
    guardarTarea,
    leerPorEstado    
}

