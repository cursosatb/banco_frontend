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

const server = 'localhost:8085';

const opciones = {
    url: `http://${server}/ok`,
    metodo: 'GET'
};

ajax(opciones, (data) => {
    console.log(data);
});


const opcionesLogin = {
    url: `http://${server}/login/gestor/`,
    metodo: 'POST',
    body: 'usuario=gestor1&password=gestor1',
    cabeceras: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

// realiza la petición de login del gestor
ajax(opcionesLogin, (data) => {

    // esta función se ejecuta cuando los datos han sido
    // devueltos por el servicio

    // convirtiendo el string en formato JSON a objeto de JavaScript
    const respuesta = JSON.parse(data);

    // guardamos el token
    const token = respuesta.data.token;

    // realizamos la solicitud para obtener todos los gestores

    const opcionesObtenerGestores = {
        url: 'http://localhost:8085/gestores/',
        metodo: 'GET',
        cabeceras: {
            Authorization: `Basic ${token}`
        }
    }

    ajax(opcionesObtenerGestores, (data) => {

        // data tiene toda la información de los gestores en formato string
        console.log(data);

        // convertir a objeto de JavaScript
        const respuesta = JSON.parse(data);

        const gestores = respuesta.data;
        mostrarGestores(gestores);

    });
});




// obtenerGestores(gestores => {
//     mostrarGestores(gestores);
// })













