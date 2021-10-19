'use strict';

fetchData();

function fetchData(){
    let input = document.getElementById('inputIngredients').value;
    
    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
          
        console.log(input);

        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=052ac81a9d0f4b35bce9cc8e6e20d5e9&includeNutrition=true&query=pasta')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // document.getElementById('recipe').insertAdjacentHTML("afterbegin", data.results[0].title);
    
            // fetch('https://spoonacular.com/recipeImages/654959-312x231.jpg')
        });
    });

    
}


