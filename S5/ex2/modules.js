import * as fs from 'fs/promises';


//get data from the file
let result = await fs.readFile('boardgames.json');
// console.log(result);
let data = JSON.parse(result);
// console.log(data);

//loop over boardgames
for (let i in data) {
    console.log(data[i]);
    //file naam wordt aangemaakt en er wordt een json van gemaakt
    let filename = `${i}.json`;
    //Stringify the value, boardgame = bg
    let bg = JSON.stringify(data[i]);
    //save to file
    await fs.writeFile(filename, bg);

}