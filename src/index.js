const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {    
    let arrSimbol = expr.match(/.{1,10}/g);
    let arrMorse = [];    
    let result = '';   
    for (let i = 0; i < arrSimbol.length; i++) {
        if (arrSimbol[i] === '**********') arrMorse.push(' ');
        else {
            let Temp = '';
            for (let j = 0; j < arrSimbol[i].length; j += 2) {
                let tempChar = arrSimbol[i].slice(j, j + 2);                
                if (tempChar === '10') Temp += '.';
                else if (tempChar === '11') Temp += '-';                
            }
            arrMorse.push(Temp);
        }
    }
    for (let i = 0; i < arrMorse.length; i++) {  
        if (arrMorse[i] === ' ') result += ' ';      
        else result += MORSE_TABLE[arrMorse[i]];        
    }
    return result;            
}

module.exports = {
    decode
}