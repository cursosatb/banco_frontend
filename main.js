/*
Escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.
*/

const gestor1 = {
    id: 1,
    usuario: 'gestor1',
    password: 'gestor1',
    correo: 'gestor1@mail.com'
};

const gestor2 = {
    id: 2,
    usuario: 'gestor2',
    password: 'gestor2',
    correo: 'gestor2@mail.com'
};

const cliente1 = {
    id: 1,
    id_gestor: 1,
    usuario: 'cliente1',
    password: 'cliente1',
    saldo: 4300.56
};

const cliente2 = {
    id: 2,
    id_gestor: 1,
    usuario: 'cliente2',
    password: 'cliente12',
    saldo: Math.random() * 1000
};

console.log(gestor2);
console.table(cliente2);





