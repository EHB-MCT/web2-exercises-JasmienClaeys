import axios from "axios";
import * as fs from 'fs/promises';


// uitgebreider geschreven, volgens de uitleg op axios (een vd mogelijkheden)
// axios.get('https://jsonplaceholder.typicode.com/comments')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed, voor af te ronden
//   }); 


//met een await, kort geschreven
let response = await axios.get('https://jsonplaceholder.typicode.com/comments');
// console.log(response.data[0]);

let emails = {
    count: 0,
    list: []
}
for (let comment of response.data) {
    //add to file
    emails.list.push(comment.email);
    //up a counter
    emails.count++;
}
await fs.appendFile('emails.json', JSON.stringify(emails));