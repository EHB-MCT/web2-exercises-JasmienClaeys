'use strict'

window.onload = function () {
    // console.log('loaded');

    let number = Math.floor(Math.random() * 20) + 1;
    console.log(number);

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();

        let userNumber = document.getElementById('input').value;
        console.log(userNumber);

        let numbers = {
            userNumber,
            number
        }

        document.getElementById('messages').innerHTML = compareNumber(numbers);
    });


}

function compareNumber(numbers) {
    // let promise = new Promise(
    //     function(resolve, reject){
    //     console.log('Start of promise');

    //     setTimeout(() => resolve("DONE!"), 2000);
    //     // reject('ITS BROKEN');
    // });

    // promise.then(
    //     result =>console.log(result),
    //     error => console.log(error)
    // );

    // if(promise == resolve) {
    if (numbers.userNumber == undefined) {
        return `That is not a valid number (Error)`
    } else if (numbers.userNumber == numbers.number) {
        return `You have guessed the mystery number!`
    } else if (numbers.userNumber > numbers.number) {
        return `The mystery number is lower. Guess again!`
    } else if (numbers.userNumber < numbers.number) {
        return `The mystery number is higher. Guess again!`
    }
}
// }