//code wars 8/90
//https://www.codewars.com/kata/53369039d7ab3ac506000467

function boolToWord(bool) {
   let result;

   if (bool == true) {
      result = "Yes";
   } else {
      result = "No";
   }
   return result;
}

console.log(boolToWord(true));
