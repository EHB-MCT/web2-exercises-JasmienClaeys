'use strict';

document.getElementById("form").addEventListener('submit', event => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    console.log(name);
    let email = document.getElementById('email').value;
    let order = document.getElementById('order').value;

    document.getElementById('submit').innerHTML = getMessage(name, order, email);
});

function getMessage(name, order, email) {
    let htmlString =`The order for the customer ${name} is the following:  ${order}. The customer may be notified by email:  ${email}`
    console.log(htmlString);
}