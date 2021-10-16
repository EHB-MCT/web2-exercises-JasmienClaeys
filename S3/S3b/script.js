// let config = null;

// async function getConfig() {
//     let resp = await fetch('config.json');
//     let data = await resp.json();
//     config = data;
// }

window.onload = () => {
    console.log('loaded');

    // getConfig();

    async function getData(searchparameter) {
        // let url = `${config.baseurl}t=${searchparameter}${config.apikey}`;
        let url = `http://www.omdbapi.com/?t=${searchparameter}&apikey=b5bf80b1`;

        console.log(url);

        let resp = await fetch(url);
        let data = await resp.json();

        console.log(data);
        return data;
    }

    function showMovieOnCard(movie) {
        //DOM (Document Object Module) manipulation 
        document.getElementById('movie-title').innerText = movie.Title;
        document.getElementById('movie-plot').innerText = movie.Plot;
        document.getElementById('movie-releasedate').innerText = movie.Released;

        document.getElementById('movie-poster').setAttribute('src', movie.Poster);

        document.getElementById('card').style.display = 'block';

    }

    let submitForm = event => {
        event.preventDefault();

        let value = document.getElementById('inputTitle').value;
        getData(value).then(result => {
            console.log(result);
            showMovieOnCard(result);
        });
    }

    document.getElementById('searchform').addEventListener('submit', submitForm);
    document.getElementById('card').style.display = 'none';
}