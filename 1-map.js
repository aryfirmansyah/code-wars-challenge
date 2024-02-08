//code wars 4/90
//https://www.codewars.com/kata/57f781872e3d8ca2a000007e

function maps(x) {
   let array = [];
   //    let result = [];
   for (let i = 0; i < x.length; i++) {
      console.log(i);
      array.push(x[i] * 2);
   }
   return array;
}

console.log(maps([1, 2, 3]));
