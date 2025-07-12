const fs = require('fs');
const path = require('path');

function generateRandomWord(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let word = '';
    for (let i = 0; i < length; i++) {
        word += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return word;
}

let words = '';
for (let i = 0; i < 100; i++) {
    words += generateRandomWord() + '\n';
}

fs.writeFileSync(path.join(__dirname, 'random-wrods.txt'), words);
console.log('100 random words written to random-wrods.txt');