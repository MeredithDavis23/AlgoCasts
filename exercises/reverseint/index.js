// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



function reverseInt(n) {
    const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')
 
    //if negative number, Math.sign maintains negative. Can also use if statement and multiply return statement by -1 
    //if n < 0
    return parseInt(reversed) * Math.sign(n)
  }
 
 
 
 
 
 module.exports = reverseInt;
 