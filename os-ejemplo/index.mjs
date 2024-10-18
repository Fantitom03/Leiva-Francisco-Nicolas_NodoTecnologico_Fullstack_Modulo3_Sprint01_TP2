import os from 'os';

//Obtener la arquitectura del sistema
console.log('Arquitectura: ', os.arch());

//Obtener el tipo de sistema operativo
console.log('Plataforma: ', os.platform())

//Obtener la cantidad total de memoria libre
console.log('Memoria libre: ', os.totalmem());

//Obtener la memoria libre
console.log('Memoria libre: ', os.freemem());

//Obtener información de la CPU
console.log('Información de la CPU: ', os.cpus());