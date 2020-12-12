'use strict';

const user = {
    name: 'Abraham',
    age: 31,
    debt: 0
};

let orderNew = [];
let priceTotal = [];

const showMenu = () => {
    menuAvalible.forEach( menu => console.log(`Aqui tienes ${menu.product},
    su precio es ${menu.price} euros y el codigo para el pedido es ${menu.code}`));
};

const orderMenu = cod => {
    if (!cod) console.log('Introduce un codigo valido');
    let productOrder = menuAvalible.find( prod => prod.code === cod );
    if (!productOrder) console.log('No existe este producto');
    orderNew.push(productOrder);
    console.log(`Su producto a sido añadido a su cesta`);
};

const actuallOrder = () => orderNew;

const addCost = (menuAvalible) => {
    let cost = 0;
    for ( menuAvalible of orderNew ) {
    cost += menuAvalible.price;
    }
    priceTotal = cost;
};

const finallOrder = () => {
    user.debt = priceTotal;
    console.log(`${user.name} tienes que pagar ${user.debt} euros`);
};

const payOrder = (amounthGave) => {
    if ( amounthGave == priceTotal ) {
        console.log (`${user.name} tu deuda es 0`);
    } else if ( amounthGave < priceTotal ) {
        console.log(`${user.name} te faltan ${priceTotal - amounthGave}`);
    } else {
        console.log(`${user.name} y tu cambio es de ${amounthGave - priceTotal}`);
    }
};





