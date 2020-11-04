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

// ========== CAVITY CHECK ========== //
// NEED TO COMPLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let cavityCheck = (grid) => {
//   for (let i of grid) {
//     let splitGrid = i.split('');
//   }
//   for (let i = 1; i < grid.length - 1; i++) {
//         if (grid[i - 1] < grid[i] > grid[i + 1]) {
//             grid[i] = 'X';
//         }
//     }
//     return grid;
// }
//
// console.log(cavityCheck([]));

// ========== ANGRY PROFESSOR ========== //

// let angryProfessor = (k,a) => {
//   let countA = 0;
//
//   for (var i of a) {
//     if (i <= 0) {
//       countA++;
//     }
//   }
//
//   return (countA >= k) ? 'YES' : 'NO';
// }
//
// console.log(angryProfessor(3,[-1,0,2,4,5,-2]));

// ========== *!*!*!*! GOOGLE KICKSTARTER ROUND F !*!*!*!* ========== //

// ========== ATM QUEUE ========== //

// let N = [1,2,3];
// let T = 3;
// let A = [2,7,4];
// let arr = [];
//
// for (let i = 0; i < N.length; i++) {
//   if (A[i] < T) {
//     arr.unshift(A[i]);
//   } else if (A[i] > T) {
//     A[i] - T;
//     N.push(A[i]);
//   }
// }

// END OF GOOGLE KICKSTARTER ROUND F //

// ========== VIRAL ADVERTISING ========== //

// let viralAdvertising = (n) => {
//   let advertising = 0;
//   let firstPost = 5;
//   let i = 0;
//   while (i < n) {
//     let reposts = Math.floor(firstPost/2);
//     advertising += reposts;
//     let nextPost = reposts * 3;
//     firstPost = nextPost;
//     i++;
//   }
//   return advertising;
// }
//
// console.log(viralAdvertising(3));

// ========== UTOPIAN TREE ========== //

// let utopianTree = (n) => {
//   let height = 1;
//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       return 1;
//     } else if (i % 2 !== 0) {
//       height *= 2;
//     } else if (i % 2 === 0) {
//       height++;
//     }
//   }
//   return height;
// }
//
// console.log(utopianTree(0));

// ========== FIND DIGIT ---------- //

// let findDigit = (n) => {
//   let string = n.toString();
//   let arr = string.split('');
//   let total = 0;
//   for (let i of arr) {
//     if (n % parseInt(i) === 0) {
//       total++;
//     }
//   }
//   return total;
// }
//
// console.log(findDigit(12));
// console.log(findDigit(1012));

// ========== EXTRA LONG FACTORIALS ========== //

// let extraLongFactorials = (n) => {
//   n = BigInt(n);
//   let result = BigInt(1);
//   for (let i = n; i > 0; i--) {
//       result *= i;
//   }
//   console.log(result.toString());
// }

// ========== MERGING MEETING TIMES ========== //

// const mergeRanges (meetings) => {
//   // Sort the start time
//   const sortedMeetings = meetings.sort((a,b) => {
//     return a.startTime - b.startTime;
//   });

//   // Initialize mergedMeetings with the earliest meeting
//   const mergedMeetings = [sortedMeetings[0]];

//   for (let i = 1; i < sortedMeetings.length; i++) {
//     const currentMeeting = sortedMeetings[i];
//     const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

//     //if the current meetings overlaps with the last merged meeting, use the later end time of the two.
//     if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//       lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
//     } else {
//       // Add the current meeting since it doesnt overlap
//       mergedMeetings.push(currentMeeting);
//     }
//   }
// }


// ========== CHOCOLATE FEAST ========== //

// let chocolateFeast = (n, c, m) => {
//   /* First you need to determine how many choclate bars you can buy given the money you have and the cost of a chocolate bar */
//   let wrappers = Math.floor(n/c);

//   /* Then you need to determine how many wrappers you can turn in given how many chocolcate bars you purchased. Divide the number of wrappers by m, wrappers needed for a new bar, minus 1 and take the ceiling of that value. Subtract one from that value and add that number to the number of wrappers bought. */
//   return wrappers + Math.ceil(wrappers / (m - 1)) - 1;
// }

// console.log(chocolateFeast(7,3,2));


// ========== REVERSE ARRAY OF CHARACTERS ========== //

// let reverseChar = (array) => {
//   let newArr = [];
//   let i = 0;

//   while (i < array.length) {
//     const lastLetter = array.pop();
//     newArr.push(lastLetter);
//   }

//   return newArr;

  /* Another approach to solving this problem is to swap the first and last characters of the array and then move towards the middle after every iteration. */

//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex < rightIndex) {
//     const temp = array[leftIndex];
//     array[leftIndex] = array[rightIndex];
//     array[rightIndex] = temp;

//     /* move towards the middle by adding one to leftIndex and subtracting one from rightIndex. */
//     leftIndex++;
//     rightIndex--;
  // }
// }

// console.log(reverseChar([0,1,2,3,4,5,6,7]));

// ========== PURCHASING SUPPLIES ========== //

/* A manufacture purchases fragile components that must be shipped using expensive containers. The manufacture agrees to provide customers with a freee container of components for returning a certain number of containers. Determine the maximum number of containers a customer can receive given a budget, the cost per container, and the number of empty containers that must be returned for a free container. let scenarios = ['10 2 5', '12 4 4', '6 2 2'] */

// function maximumContainers(scenarios) {

//   //Initially, you need to loop through the array and split each index string into seperate strings of characters. Once you split each index, you can access each nested index value and convert those values into integers. The first index value is the budget, the second index value is the cost, and the third index value is the exchange rate.

//   for (let i = 0; i < scenarios.length; i++) {

//       let array = scenarios[i].split(' ');
//       // console.log(array);
//       let n = parseInt(array[0]);
//       // console.log(n);
//       let cost = parseInt(array[1]);
//       // console.log(cost);
//       let m = parseInt(array[2]);
//       // console.log(m);


//       // Then you need to determine how many whole containers you can purchase given your budget and the cost for a container.

//       let containers = Math.floor(n / cost);

//       //Once you have the total number of whole containers purchased, you need to determine how many empty containers you can return for a new container. Add that value to the total number of containers and determine if you can then again return empty containers for a new container given m.

//       console.log(containers + Math.ceil(containers / (m - 1)) - 1);
//   }
// }

// ========== SLOT MACHINE 2.0 ========== //

// function slotWheels(history) {
//    let total = 0;
//    let sortedArray = [];
//    let splitHistory = [];

//    for (let i = 0; i < history.length; i++) {
//        splitHistory = history[i].split(''); // Split each index into a separate array
//        splitHistory.sort(); // Sort each split array
//        sortedArray.push(splitHistory);
//    }

//    let lenght = splitHistory.lenght;

//    for (let k = 0; k < lenght; k++) {
//        let maxValuesArray = [];

//        for (let j = 0; j < sortedArray.length; j++) {
//            maxValuesArray.push(sortedArray[j].pop());
//        }
//        let max = Math.max(...maxValuesArray);
//        total += max;
//    }

//    console.log(total);
//    return total;
// }

// ========== REVERSE A STRING ========== //

// let reverseString = (message) => {
//   let joinMessage = message.join('').split(' ');
//   let joinMessageLength = joinMessage.length;

//   let leftIndex = 0;
//   let rightIndex = joinMessageLength - 1;

//   while (leftIndex < rightIndex) {
//     const temp = joinMessage[leftIndex];
//     joinMessage[leftIndex] = joinMessage[rightIndex];
//     joinMessage[rightIndex] = temp;

//     leftIndex++;
//     rightIndex--;
//   }

//   let reverseWord = joinMessage.join(' ');

//   return reverseWord;
// }

// console.log(reverseString([ 'y','u','m','m','y',' ','i','s',' ','c','a','k','e',' ','b','u','n','d','t',' ','c','h','o','c','o','l','a','t','e' ]));

// ========== REVERSE A STRING IN PLACE ========== //

// function reverseWords(message) {

//   // First we reverse all the characters in the entire message
//   reverseCharacters(message, 0, message.length - 1);
//   // This gives us the right word order
//   // but with each word backward

//   // Now we'll make the words forward again
//   // by reversing each word's characters

//   // We hold the index of the *start* of the current word
//   // as we look for the *end* of the current word
//   let currentWordStartIndex = 0;
//   for (let i = 0; i <= message.length; i++) {

//     // Found the end of the current word!
//     if (i === message.length || message[i] === ' ') {

//       // If we haven't exhausted the string our
//       // next word's start is one character ahead
//       reverseCharacters(message, currentWordStartIndex, i - 1);
//       currentWordStartIndex = i + 1;
//     }
//   }
// }

// function reverseCharacters(message, leftIndex, rightIndex) {

//   // Walk towards the middle, from both sides
//   while (leftIndex < rightIndex) {

//     // Swap the left char and right char
//     const temp = message[leftIndex];
//     message[leftIndex] = message[rightIndex];
//     message[rightIndex] = temp;
//     leftIndex++;
//     rightIndex--;
//   }
// }

// console.log(reverseWords([ 'y','u','m','m','y',' ','i','s',' ','c','a','k','e',' ','b','u','n','d','t',' ','c','h','o','c','o','l','a','t','e' ]));