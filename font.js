const fs = require('fs');
const fileBuffer = fs.readFileSync('Cyrvetica-Narrow-opentype.ttf').toString('base64');
console.log(fileBuffer);
fs.writeFileSync("base64.txt", 'data:font/ttf;charset=utf-8;base64,' + fileBuffer);