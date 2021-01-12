// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//number of character in string is always squared
//1. From 0 to n
//2. Create an empty string 'stair'
//3. From 0 to n
//4. IF the current column is equal to or less than that row
//5. Add a '#' to 'stair'
//6. Else 
//7. Add a space to 'stair'
//8. Console log 'stair'
function steps(n) {
    let stair = ''
    for(let row = 0; row < n; row++) {
        let stair = ''
        for(let column = 0; column < n; column++) {
            if(column <= row) {
               stair += '#'
            } else {
                stair += " "
            }
        }
        console.log(stair)
    }
}

//Other solution using recursion 
//tips 
//1. Identify bare minimum pieces of information to represent your problem
//2. Give reasonable defaults to the bare minimum pieces of info
//3. Check the base case. Is there any work left to do? If not, return
//4. Do some work. Call your function again, making sure the arguments have changed in some fashion


//1. If row === n then we've hit the end of the problem
//2. If the 'stair' string has a length === n then we are at the end of a row
//3. If the length of the stair string is less than or equal to the row number we're working on, we add a '#',
    //otherwise add a space

    //default value for row is starting on very first row in case it's not defined
    
// function steps(n, row = 0, stair ='') {
//    if(n === row) {
//        return;
//    }
//    //when hit the end of a row
//    if(n === stair.length) {
//        console.log(stair);
//        return steps(n, row + 1)
//    }
//    //when still assembling string
//    if(stair.length <= row) {
//        stair += '#'
//    } else {
//        stair += " "
//    }
//    steps(n, row, stair)
// }

module.exports = steps;
