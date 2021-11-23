const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', (req, res) => {
    console.log('local root called!');
    res.redirect('/info.html');
});

// app.get('/', (req, res) => {
//     console.log('local root called!');
//     res.send('Hello Jasmien')
// });

//port + function
app.get('/test', (req, res) => {
    res.send('test succeeded!');
});

app.get('/data', (req, res) => {
    let exampleData = {
        name: 'Jasmien',
        age: 20
    }
    res.send(exampleData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})