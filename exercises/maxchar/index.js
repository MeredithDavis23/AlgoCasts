// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// **** other wording for this question can be..
//What is the most common character in the string?
//Does string A have the same characters as string B (is it an anagram)?
//Does the given string have any repeated characters in it?


//take string and convert into object where keys are the characters and values are number of times that it has
//been found

//

function maxChar(str) {
    let chars = {};
    let max = 0;
    let maxChar = '';
    //for arrays and strings use for of loop
    for(let char of str){
        if(chars[char]){
            chars[char]++
        } else {
            chars[char] = 1
        }
    }
    //for objects use for in loop
    for(let char in chars) {
        //if greatest number of uses assigning character to maxChar and assigning number to max
        if(chars[char] > max) {
            max = chars[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxChar;
