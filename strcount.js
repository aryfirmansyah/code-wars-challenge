//code wars 3/90
//uncounted cause i look the solution
//https://www.codewars.com/kata/5865918c6b569962950002a1

// function strCount(str, letter) {
//    const a = str;
//    const b = letter;
//    let result = 0;
//    for (let i = 0; i < a.length; i++) {
//     if(i == b){
//         return result;
//     }
//    }
// }

function strCount(str, letter) {
   let count = 0;

   for (let i = 0; i < str.length; i++) {
      if (str[i] == letter) count++;
   }

   return count;
}

// function strCount(str, letter){
//     let a = str;
//     let b = letter;
//     const result = a.match(b);

//     return result;
//   }

console.log(strCount("Hello", "l"));
