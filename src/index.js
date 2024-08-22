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
    let result = "";
    for (let index = 0; index < expr.length; index+=10) {
        let currentLetter = expr.substring(index, index+10);
        if (currentLetter === "**********") {
            result+=" ";
        } else {
            let currentCode = ""
            for (let i = 0; i < currentLetter.length;i+=2) {
                let codePart = currentLetter.substring(i,i+2);
                if(codePart === "10") {
                    currentCode+="."
                } else if (codePart === "11"){
                    currentCode+="-"
                }
            }
             result+=MORSE_TABLE[currentCode]
             currentCode=""   
        }
        currentLetter = ""
    }
        return result;
}
module.exports = {
    decode
}