// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//1. From 0 to n (iterate through rows)
//2. Create an empty string, 'level'
//3. From 0 to ?? (columns)
//4. IF the column should have a '#' 
//5. Add '#' to 'level'
//6. ELSE add a space to 'level'
//7. Console.log('stair')

function pyramid(n) {

    for(let row = 0; row < n; row++) {
        let level = ''
        
        for(let column = 0; column <= n + 1; column++) {
            if(column === row) {
                level += '#'
            }else {
                level += " "
            }
        }
        console.log(level)
    }
}

module.exports = pyramid;