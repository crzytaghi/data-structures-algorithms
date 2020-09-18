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
//
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
//   let x = [];
//   let j = n;
//
//   for (let i = 0; i < n; i++) {
//     x.push(array[i]);
//     x.push(array[j]);
//     j++;
//   }
//   return x;
// }
//
// console.log(shuffle([2,5,1,3,4,7],3));

// ========== FIBONACCI ========== //

// let getNthFib = (n) => {
  // O(2^n) time

  // if (n === 2) {
  //   return 1
  // } else if (n === 1) {
  //   return 0
  // } else {
  //   return getNthFib(n-1) + getNthFib(n-2)
  // }

  // O(n) time and O(1) space.

//   if (n < 0) {
//     throw new Error('Error, negative number')
//   } else if (n === 0 || n === 1) {
//     return n
//   } else {
//     let prevPrev = 0;
//     let prev = 1;
//     let current;
//
//     for (let i = 1; i < n; i++) {
//       current = prev + prevPrev;
//       prevPrev = prev;
//       prev = current;
//     }
//     return current;
//   }
// }
//
// console.log(getNthFib(19));

// ========== GENERATE RANDOM NUMBER ========== // ===== NEEDS WORK ===== //

// let rand10 = (self) => {
//   let rand40 = 40;
//   while (rand40 >= 40) {
//     rand40 = (rand7() - 1) * 7 + rand7() - 1
//   }
//   return rand40 % 10 + 1
// }
//
// console.log(rand10(1));

// ========== 2D ARRAY =========== //

// let hourGlassSum = (array) => {
//
//   let sum = 0;
//
//   for (let i = 0; i < array.length; i++) {
//     console.log(i);
//   }
// }

// ========== ARRAY LEFT ROTATION ========== //

// function rotLeft(a, d) {
//     let arr = '';
//     for (let i = 0; i < d; i++) {
//         arr = a.shift();
//         a.push(arr);
//     }
//     return a;
// }
//
// console.log(rotLeft([1,2,3,4,5],4));

// ==========  TWO STRINGS ========== //

// Create a function that determines if two strings have similar characters. If so, return YES, if not, return NO
// Implement a hashmap to lookup through s2 and check if it contains similar characters.

// let twoStrings = (s1,s2) => {
//   let s1Map = {};
//
//   for (let i = 0; i < s1.length; i++) {
//     const s1Letter = s1[i];
//     s1Map[s1Letter] = true;
//   }
//
//   for (let i = 0; i < s2.length; i++) {
//     s2Letter = s2[i]
//     if (s1Map[s2Letter]) {
//       return "YES"
//     }
//   }
//   return "NO"
// }
//
// console.log(twoStrings('wouldyoulikefries','abcabcabcabcabcabc'));
// console.log(twoStrings('hackerrankcommunity','cdecdecdecde'));
// console.log(twoStrings('jackandjill','wentupthehill'));
// console.log(twoStrings('writetoyourparents','fghmqzldbc'));

// ========== GRADING STUDENTS ========== //
// If the difference between the students grade and the nearest rounded up to the nearest 5 is < 3, round up to the nearest 5. If the value below 38 do not round since the score is failing.

// let gradingStudents = (grades) => {
//   for (let grade of grades) {
//     console.log(`the value of the students grade is ${grade}`);
//     if (grade < 38 || (Math.ceil(grade/5)*5) - grade >= 3) {
//       console.log(grade);
//     } else if ((Math.ceil(grade/5)*5) - grade < 3) {
//       console.log(Math.ceil(grade/5)*5);
//     }
//   }
// }
//
// console.log(gradingStudents([4,73,67,38,33]));

// ========== NEW ARRAY ========== //
// Output a new array with each repeated value cordinated with the number associated to how many times that value appears.
// let arr = ['switch', 'tv', 'switch', 'tv', 'switch', 'tv']
//
// let hash = {};
// let newArr = [];
//
// for (i of arr) {
//   arr[i] = (arr[i] || 0) + 1;
//
//   if (arr[i] === 1) {
//     newArr.push(`${i}`);
//   } else {
//     newArr.push(`${i}${arr[i] - 1}`);
//   }
// }
//
// console.log(newArr);

//
// Given two arrays of strings, determine if the strings at the index values contain similar characters

// let twoStrings = (arr1, arr2) => {
//   for (i of arr1) {
//
//   }
// }
//
// twoStrings(['hello','hi'],['world','bye']);

// ========== FLATLAND SPACE STATIONS ========== //
// Determine the max distance any city is from a space station given n (the lenght of the array) & c (the values at which the space station(s) is/are located)

// let flatLandSpaceStations = (n, c) => {
//
//   let distances = [];
//     c.sort((a,b)=>a-b);
//
//     for (let i = 0; i < c.length-1; i++) {
//         const dist = Math.floor(Math.abs(c[i + 1] - c[i]) / 2)
//         distances.push(dist)
//     }
//
//     //find max distances before and after
//     const before = Math.abs(c[0] - 0)
//     const after = Math.abs(n - c[c.length - 1])-1
//     return Math.max(...distances,before,after)
// }
//
// console.log(flatLandSpaceStations(5,[0,4]));

// ========== FAIR RATIONS ========== //
// Determine how many loafs of bread must be distributed in order to give all participants an even number of loafs. For every loaf distributed at i, another must be distributed at i+1.

// let fairRations = (arr) => {
//   let count = 0;
//   let n = arr.length;
//
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] % 2 === 1) {
//       arr[i]++;
//       arr[i+1]++;
//       count += 2;
//     }
//   }
//
//   return arr[n - 1] % 2 === 1 ? 'NO' : count;
// }
//
// console.log(fairRations([1,2]));

// ========== TIME CONVERSION ========== //

// Convert the time in 1200 to 2400 given AM and PM.

// let timeConversion = (s) => {
//   let AMPM = s.slice(-2);
//     let timeArr = s.slice(0,-2).split(":");
//
//     if (AMPM === "AM" && timeArr[0] === "12") {
//         timeArr[0] = "00"
//     } else if (AMPM === "PM") {
//         timeArr[0] = (timeArr[0] % 12) + 12
//     }
//     return timeArr.join(":");
// }
//
// console.log(timeConversion("07:05:45PM"));

let cavityCheck = (grid) => {
  for (let i = 1; i < grid.length - 1; i++) {
        if (grid[i - 1] < grid[i] > grid[i + 1]) {
            grid[i] = 'X';
        }
    }
    return grid;
}

console.log(cavityCheck([1,9,1,2]));
