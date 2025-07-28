const fs = require('fs');

const newPractice = JSON.parse(fs.readFileSync('new.json'));
const file = 'practice-library.json';

const existing = JSON.parse(fs.readFileSync(file));
existing.push(newPractice);
fs.writeFileSync(file, JSON.stringify(existing, null, 2));
console.log('Appended new practice!');
