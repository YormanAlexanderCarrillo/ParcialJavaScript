const fs = require('fs');

const jsonString = fs.readFileSync('./data/marvel.json', 'utf-8');

const jsonObject = JSON.parse(jsonString);
//console.log(jsonObject)
const marvel = new Map(Object.entries(jsonObject["Marvel Cinematic Universe"]));

//console.log(marvel);

module.exports.marvel = marvel
