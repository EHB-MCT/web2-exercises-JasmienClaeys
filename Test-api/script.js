'use strict';

fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=052ac81a9d0f4b35bce9cc8e6e20d5e9&includeNutrition=true')
    .then(response => response.json())
    .then(data => {
        console.log(data),
            console.log(data.extendedIngredients[0].aisle);
        document.getElementById('recipe').insertAdjacentHTML("afterbegin", data.extendedIngredients[0].aisle);
    });


document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();

    let input = document.getElementById('inputIngredients').value;
    console.log(input);

    // document.getElementById('recipe').insertAdjacentHTML("afterbegin", data.extendedIngredients[0].aisle);
});