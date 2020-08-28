// let twoSums = (nums,target) => {
//   for (let i=0; i<nums.length; i++) {
//     console.log('the value of i is ' +nums[i]);
//     for (let j=i+1; j<nums.length; j++) {
//       console.log('the value of j is ' + nums[j]);
//       if (nums[j] === target - nums[i]) {
//         console.log(nums.indexOf(nums[i]));
//         console.log(nums.indexOf(nums[j]));
//         return [nums.indexOf(nums[i]), nums.indexOf(nums[j])];
//       }
//     }
//   }
// }
//
// twoSums([3,4],6);

// let array = [1,4,2,7,4,8,2,4,7,3,5,7,9];
//
// for (let i=0;i<array.length;i++) {
//   for (let j=i+1;j<array.length;j++) {
//     if (array[i] === array[j]) {
//       console.log(array[i]);
//     }
//   }
// }


// ========= Running Sum of nums ========= //

// let array = [1,2,3,4];
//
// let sum = array.reduce((total,amount) => {
//   console.log(`this is the value of total ${total}`);
//   console.log(`this is the value of amount ${amount}`);
//   return total+amount
// })
//
// console.log(sum);


// let runningSum = (nums) => {
//   let sums = [];
//   for (let i = 0; i<nums.length; i++) {
//     if (i === 0) {
//       sums.push(nums[i]);
//     } else {
//       sums.push(nums[i] + sums[sums.length - 1]);
//     }
//   }
//   return sums;
// }
//
// console.log(runningSum([1,2,3,4]))

// ========== Find Words that can be formed by characters ========== // ======== NOT COMPLETE ========= //
/*
  You are given an array of strings words and a string chars.
  A string is good if it can be formed by characters from chars (each character can only be used once).
  Return the sum of lengths of all good strings in words.
*/

// var countCharacters = function(words, chars) {
//     let output = [];
//     for (let i=0; i<words.length; i++) {
//         if (words[i].includes(chars)) {
//             output.push(words[i])
//         } else {
//
//         }
//     }
//     return output;
// };


// ======== Finding pairs in an array ========== //

// THIS ONE WORKS

// let pairOfSocks = (ar) => {
//   ar.sort();
//   let pairs = 0;
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] === ar[i+1]) {
//       pairs++;
//       i++;
//     }
//   }
//   return pairs;
// }
//
// console.log(pairOfSocks([1,1,3,1,2,1,3,3,3,3]));

// USING HASH TABLES

// const pairsOfSocks = (array) => {
//   pairs = {}
//   totalPairs = 0;
//   array.map((sock) => {
//     if (pairs.hasOwnProperty(sock)) {
//       pairs[sock] = pairs[sock] += 1;
//     } else {
//       pairs[sock] = 1;
//     }
//   })
//   // console.log(pairs);
//   for (sock of Object.values(pairs)) {
//     if (sock > 1) {
//       pairs = Math.floor(sock / 2);
//       totalPairs += pairs;
//     }
//   }
// return totalPairs;
// }
// console.log(pairsOfSocks([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));

// ====== STOCK PRICES ====== //

// const getMaxProfit = (stockPrice) => {
//   if (stockPrice.length < 2) {
//     return "Not enough values in the array to determine the price"
//   } else {
//
//     // initialize the current stock price as the buy price
//     let minPrice = stockPrice[0]
//     let maxProfit = stockPrice[1] - stockPrice[0]
//
//     //loop through the array starting at index 1 to determine the max profit
//     for (let i = 1; i < stockPrice.length; i++) {
//
//       // Determine the potential profit by comparing the current stock price to the minPrice
//       potentialProfit = stockPrice[i] - minPrice;
//
//       // Determine whether the maxProfit or the potentialProfit are greater and set that value to maxProfit
//       maxProfit = Math.max(maxProfit, potentialProfit);
//
//       // Determine whether the minPrice or the current price are less, set that value to minPrice
//       minPrice = Math.min(minPrice, stockPrice[i]);
//     }
//     return maxProfit;
//   }
// }
//
// console.log(getMaxProfit([10,7,5,8,11,9]));

// ========== FINDING THE PRODUCT OF THE ARRAY AT ALL VALUES EXCEPT AT THE INDEX ========== //

// const getProduct = (array) => {
//
//   if (array.length < 2) {
//     return "Must have two or more numbers"
//   } else {
//
//     const products = [];
//
//     let productSoFar = 1;
//     for (var i = 0; i < array.length; i++) {
//       products[i] = productSoFar;
//       productSoFar *= products[i];
//     }
//
//     productSoFar = 1;
//     for (let j = array.length - 1; j >= 0; j--) {
//       products[j] *= productSoFar;
//       productSoFar *= array[j];
//     }
//
//     return products;
//   }
// }
//
// console.log(getProduct([6]));

// ========== SHUFFLE THE ARRAY ========== //

// let shuffle = (array,n) => {
//
//   let y = [];
//
//   for (let j = 0; j < n; j++) {
//     y.push(array[j]);
//     y.push(array[j+1]);
//   }
//   return y;
// }
//
// console.log(shuffle([2,5,1,3,4,7],3));

// ========== FIBONACCI ========== //

let getNthFib = (n) => {
  if (n === 2) {
    return 1
  } else if (n === 1) {
    return 0
  } else {
    return getNthFib(n-1) + getNthFib(n-2)
  }
}

console.log(getNthFib(12));
