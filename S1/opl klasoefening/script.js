'use strict';


window.onload = function () {
    console.log('loaded');

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();

        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.getElementById('orderInput').value;

        let orderdetails = {
            name,
            email,
            order
        }

        document.getElementById('messages').innerHTML = printOrder(orderdetails);
    });
}

function printOrder(orderdetails) {
    return `<p>The order for the customer ${orderdetails.name} is the following:  
    ${orderdetails.order}. The customer may be notified by email: ${orderdetails.email}</p>`;
}