//code wars 9/90
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
   findSmallestInt(args) {
      let result = 0;
      for (let i = 0; i < args.length; i++) {
         if (args[i] == Math.min(...args)) {
            result = args[i];
         }
      }
      return result;
   }
}

let sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
