'use strict';

// import Team from './team.js'

//let list = [];
// let pokemons = [];

// let team1 = new Team();

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => {
        // console.log(data.results);
        let list = data.results;

        list.forEach(poke => {
            fetch(poke.url)
                .then(response => response.json())
                .then(pokeObject => {
                    // pokemons.push(pokeObject);
                    console.log(pokeObject);

                    let container = document.getElementById("container");
                    let htmlString = `
                    <div id="pokemon">
                        <div id="image">
                            <img src="${pokeObject.sprites.front_default}"></img>
                        </div>
                        <div id="nameType">
                            <p id="name">${pokeObject.name}</p>
                            <p id= "type">Type: ${pokeObject.types[0].type.name}</p>
                        </div>
                        <div id="teamButton">
                            <p>Add to your team</p>
                        </div>
                    </div>`;

                    container.insertAdjacentHTML('beforeend', htmlString);
                });
        });
    });

window.onload = function () {
    setTimeout(buildList, 3000);

    function buildList() {
        console.log(pokemons);
    }

}

// function refreshTeam(message) {
//     document.getElementById('team').innerHTML = team1.describe();

//     let alertBox = document.createElement('div');
//     alertBox.classList.add('alert');
//     alertBox.setAttribute('role', 'alert');

//     if (message.type == 'SUCCES'){
//         alertBox.classList.add('alert-succes');
//     } else{
//         alertBox.classList.add('alert-danger');
//     }

//     alertBox.innerText = message.value;
// }