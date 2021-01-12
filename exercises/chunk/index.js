// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//steps:
//1. Create empty array to hold chunks
//2. For each element in unchunked array retrieve the last element in chunked
//3. If last element does not exist, of it its length is equal to chunk size
//4. Push new chunk into chunked with current element
//5. Else add current element into chunk
function chunk(array, size) {
    let newArray = []
    //running over length of array
    for(let i = 0; i < array.length; i++) {
        //last value 
     const last = newArray[newArray.length - 1];
     //if last does not exist or the length of last is equal to newArray size
        if (!last || last.length === size) {
          newArray.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }
      return newArray
    }

    // function chunk(array, size) {
    //     const chunked = []
    //     //running over length of array
    //     for(let element of array) {
    //         //last value 
    //      const last = chunked[chunked.length - 1];
    //      //if last does not exist or the length of last is equal to newArray size
    //         if (!last || last.length === size) {
    //           chunked.push([element);
    //         } else {
    //           last.push(element);
    //         }
    //       }
    //      return chunked 
    //     }
    

    //alt with slice:
    //1. create empty chunked array
    //2. create index starting at 0
    //3. while index is less than array.length
    //push a slice of length size from array into chunked
    //add size to index
    
    // function chunk(array, size) {
    //     const chunked = []
    //     let index = 0

    //     while(index < array.lenth) {
    //         chunked.push(array.slice(index, index + size));
    //         index += size;
    //     }
    //     return chunked
    // }


module.exports = chunk;
