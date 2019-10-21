const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completadoo pendiente la tarea'
};
const argv = require('yargs').command('crear', 'Crear un elemento por hacer', {
        descripcion
    }).command('actualizar', 'Actualizar el estado compretado de las tareas', {
        descripcion,
        completado
    }).command('borrar', 'Borrar tarea', {
        descripcion
    })
    .help().argv;
module.exports = {
    argv
}