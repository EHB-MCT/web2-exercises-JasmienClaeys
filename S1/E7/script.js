'use strict';

const dishes = [{
    id: 1,
    name: 'Burger and fries',
    price: 12
}, {
    id: 2,
    name: 'Pizza',
    price: 15

}, {
    id: 3,
    name: 'Spaghetti',
    price: 10
}]

window.onload = function () {
    console.log('loaded');

    document.getElementById('form')
        .addEventListener('submit', event => {
            event.preventDefault();
            console.log(event);

            let name = document.getElementById('nameInput').value;
            let email = document.getElementById('emailInput').value;
            let order = document.querySelector('input[name="dish"]:checked').value;

            let dish = dishes.find(d => d.id == order);
            //Docu: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

            let orderdetails = {
                name,
                email,
                dish
            }

            document.getElementById('messages').innerHTML = printOrder(orderdetails);
        });
}

function printOrder(orderdetails) {
    return `<p>The order for the customer ${orderdetails.name} is the following:  
        ${orderdetails.dish.name}. The customer may be notified by email: ${orderdetails.email}</p>`;
}