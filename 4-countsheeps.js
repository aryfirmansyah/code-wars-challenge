//code wars 7/90
//codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
   let result = 0;
   for (let i = 0; i < sheep.length; i++) {
      if (sheep[i] == true) {
         result += 1;
      } else {
         result += 0;
      }
   }

   return result;
}

console.log(
   countSheeps([
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
   ]) // 17
);
