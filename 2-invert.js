//code wars 5/90
//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
function invert(array) {
   let result = [];
   for (let i = 0; i < array.length; i++) {
      result.push(array[i] * -1);
   }
   return result;
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
