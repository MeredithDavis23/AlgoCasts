// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//1. Make an empty array 'words
//2. Split the input string by spaces to get an array
//3. For each word in the array
//Uppercase the first letter
//Join first letter with rest of string
//push result into words array 
//5. Join words into a string and return it
function capitalize(str) {
    const words = []
    
  for(let word of str.split(' ')) {
     words.push(word[0].toUpperCase() + word.slice(1))
  }

//     let array = str.split(" ")
// for(let i = 0; i <array.length; i++) {
//     words.push(array[i][0].toUpperCase() + array[i].slice(1))
// }

  return words.join(' ')
}

//1. Create 'result' which is first character of input string capitalized 
//2. For each character in the string, 
//3. IF the character to the left is a space capitalize it
//4. Else add it to 'result'

// function capitalize(str) {
//   const result = str[0].toUpperCase()

//   for(let i = 1; i < str.length; i++) {
//     //to left of current character
//     if(str[i - 1] === ' ') {
//       result += str[i].toUpperCase()
//     }else {
//       result += str[i]
//     }
//   }
//   return result 
// }



module.exports = capitalize;
