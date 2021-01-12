// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('')
}
reverse('hello')

//ORR........

// function reverse(str) {
//     let reversed = ""
//     for(let character of str) {
//         reversed = character + reversed
//     }
//     return reversed
// }

// function reverse(str) {
//    return str.split("").reduce((reversed, character) => {
    // return character + reversed;
// }, '');
// }

// debugger write node inspect index.js in terminal after stopping test 
//write word debugger right after function reverse(str){ and then call function after close 
//debugger will run until reaches debugger statement, and will stop and ask if want to debug code
//debug > repl

module.exports = reverse;
