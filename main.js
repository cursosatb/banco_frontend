/*
Ejercicio 4.1: El resto de funcionalidades anteriores del programa deben abstraerse en funciones.
*/

// const gestores = generarGestores();
// console.log(gestores);

// const gestoresJSON = JSON.stringify(gestores);
// console.log(gestoresJSON);
// console.log(gestoresJSON.length);

// const clientes = generarClientes();
// const cliente1 = clientes[0];
// const cliente1JSON = JSON.stringify(cliente1);
// console.log(cliente1JSON);

/*
    Realizar una petición a http://localhost:8085/ok y mostrar la respuesta por pantalla
*/

// las propiedades del objeto opciones son: url, metodo, body, cabeceras

// obtenerGestores(gestores => {
//     mostrarGestores(gestores);
// });

async function main() {
    const gestores = await obtenerGestores();
    mostrarGestores(gestores);
}

main();


// función ejecutable
// (async () => {
//     const gestores = await obtenerGestores();
//     mostrarGestores(gestores);
// })();


















