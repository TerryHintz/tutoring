import React, { Component } from 'react';
import './App.css';



class Debugger extends Component {

  state = {
    
  }

  componentDidMount() {
    let rectangles = [[5,8],[3,9],[5,12],[16,5]];
    this.maxLength(rectangles)
  }

  maxLength=(rectangles)=>{
    let sideLength=[];
    let largest=0;
    let count=0;
    for(let i=0;i<rectangles.length;i++){
      if(rectangles[i][0]<rectangles[i][1]){
        sideLength.push(rectangles[i][0])
      }
      else{
        sideLength.push(rectangles[i][1])
      }
    }
    for(let i=0;i<sideLength.length;i++){
      if(sideLength[i]>largest){
        largest=sideLength[i]
        count=0
      }
      else if(sideLength[i]==largest){
        count++
      }
    }
    console.log(count)
  }

  countConsistentStrings = (allowed, words) => {
    let dict = {};
    let res = words.length;
    for(let i=0; i<allowed.length; i++){
        dict[allowed[i]] = true;
    }
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            const letter = words[i][j]
            if(!dict[letter]){
                res--;
                break;
            }
        }
    }
    return res;
  }

  vowelSplit = (s) => {
    let i=0;
    let count = 0;
    for(i=0; i<s.length/2; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
            count++;
        }
    }
    for(i; i<s.length; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
            count--;
        }
    }
    return count === 0;
  }

  clock = (min) => {
    let count = 0;
    let minutes = [1,2,0,0];
    while(min > 0){
      const copy = minutes.slice();
      if(this.isArithmetic(copy)){
        count++;
      }
      if(minutes[2] === 5 && minutes[3] === 9){
        minutes[2] = 0;
        minutes[3] = 0;
        if(minutes[0] === 1 && minutes[1] === 2){
          minutes[0] = 0;
          minutes[1] = 1;
        } else if(minutes[0] === 0 && minutes[1] === 9){
          minutes[0] = 1;
          minutes[1] = 0;
        } else {
          minutes[1]++;
        }
      } else if(minutes[3] === 9) {
        minutes[3] = 0;
        minutes[2]++;
      } else {
        minutes[3]++;
      }
      min--;
    }
    console.log(count);
  }

  isArithmetic = (arr) => {
    if(arr[0] === 0){
      arr.shift();
    }
    if(arr.length < 2){
      console.error('Sequence is less than 2 numbers long');
      return true;
    }
    let diff = arr[1]-arr[0];
    for(let i=1; i<arr.length-1; i++){
      if(arr[i+1]-arr[i] != diff){
        return false;
      }
    }
    return true;
  }

  electric = (x1, y1, x2, y2, charge) => {
    const needed = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    if(charge >= needed){
      const leftover = charge - needed;
      if(leftover%2 == 0){
        console.log('Y')
        return
      }
    }
    console.log('N')
  }

  boring = (arr1, arr2) => {
    let dict = {
      '0,-1': true,
      '0,-2': true,
      '0,-3': true,
      '1,-3': true,
      '2,-3': true,
      '3,-3': true,
      '3,-4': true,
      '3,-5': true,
      '4,-5': true,
      '5,-5': true,
      '5,-4': true,
      '5,-3': true,
      '6,-3': true,
      '7,-3': true,
      '7,-4': true,
      '7,-5': true,
      '7,-6': true,
      '7,-7': true,
      '6,-7': true,
      '5,-7': true,
      '4,-7': true,
      '3,-7': true,
      '2,-7': true,
      '1,-7': true,
      '0,-7': true,
      '-1,-7': true,
      '-1,-6': true,
      '-1,-5': true,
    };

    let x = -1;
    let y = -5;

    for(let i=0; i<arr1.length; i++){
      let status = 'safe';
      const command = arr1[i];
      const steps = arr2[i];
      if(command === 'q'){
        return;
      } else if (command === 'r'){
        for(let j=0; j<steps; j++){
          x += 1;
          const key = x + ',' + y;
          // console.log(key);
          if(dict[key] == true){
            status = 'DANGER';
          } else {
            dict[key] = true;
          }
        }
      } else if (command === 'u'){
        for(let j=0; j<steps; j++){
          y += 1;
          const key = x + ',' + y;
          // console.log(key);
          if(dict[key] == true){
            status = 'DANGER';
          } else {
            dict[key] = true;
          }
        }
      } else if (command === 'l'){
        for(let j=0; j<steps; j++){
          x -= 1;
          const key = x + ',' + y;
          // console.log(key);
          if(dict[key] == true){
            status = 'DANGER';
          } else {
            dict[key] = true;
          }
        }
      } else if (command === 'd'){
        for(let j=0; j<steps; j++){
          y -= 1;
          const key = x + ',' + y;
          // console.log(key);
          if(dict[key] == true){
            status = 'DANGER';
          } else {
            dict[key] = true;
          }
        }
      }
      console.log(x + ' ' + y + ' ' + status);
      if(status === 'DANGER'){
        return;
      }
    }
  }

  // 120 71 49 22 27
  sumac = (first, second) => {
    let count = 2;
    while(first >= second){
      const diff = first - second;
      first = second;
      second = diff;
      count++;
    }
    console.log(count)
  }

  // rush 7 - 10
  // rush 15 - 19
  rushHour = (start) => {
    const hours = parseInt(start.substring(0, 2));
    const minutes = parseInt(start.substring(3, 5));
    
    let time = hours + minutes/60;
    
    if((time >= 7 && time < 10) || time >= 15 && time < 19){
      // in rush hour to start
      if(time == 15){
        // end in rush hour
        console.log((hours + 4) + ':' + minutes);
      } else {
        // not ending in rush hour
        let timeInRush;
        if(time < 10){
          timeInRush = (10 - time)/2;
        } else {
          timeInRush = (19 - time)/2;
        }
        let timeOutRush = 2 - timeInRush;
        let total = 2*timeInRush + timeOutRush;
        console.log(time + total);
      }
    } else {
      // not in rush hour start
      if((time + 2 > 7 && time + 2 <= 10) || (time + 2 > 15 && time + 2 <= 19)){
        let timeOutRush;
        if(time < 7){
          timeOutRush = 7 - time;
        } else {
          timeOutRush = 15 - time;
        }
        let timeInRush = (2-timeOutRush) * 2;
        let total = timeOutRush + timeInRush;
        console.log(time + total);
        // end in rush hour
      } else {
        // not ending in rush hour
        console.log((hours + 2) + ':' + minutes);
      }
    }
    
  }

  palindrome = (str) => {
    
  }

  magic = (arr) => {
    let sum = 34;
    for(let j=0; j<4; j++){
      let newSum = 0;
      for(let i=0; i<arr[0].length; i++){
        newSum += arr[j][i];
      }
      if(sum != newSum){
        console.log("not magic")
        return
      }
    }
    

    
  }

  party = (guests, arr) => {
    let guestsArr = [];
    for(let i=1; i<=guests; i++){
      guestsArr.push(i);
    }

    for(let i=0; i<arr.length; i++){
      let newArr = [];
      for(let j=0; j<guestsArr.length; j++){
        if((j+1)%arr[i] != 0){
          newArr.push(guestsArr[j]);
        }
      }
      guestsArr = newArr;
    }
    console.log(guestsArr);
  }

  doubleDice = (arr1, arr2) => {
    let score1 = 100;
    let score2 = 100;
    for(let i=0; i<arr1.length; i++){
      if(arr1[i] > arr2[i]){
        score2 -= arr1[i];
      } else if (arr2[i] > arr1[i]){
        score1 -= arr2[i]
      }
    }
    console.log(score1);
    console.log(score2);
  }

  triangle = () => {
    
  }

  tasks = (time, arr) => {
    arr.sort(function(a, b) {
      return a - b;
    });

  }

  hot = (arr) => {
    for(let i =0; i<arr.length; i++){
      if(this.isHot(arr[i])){
        return arr[i];
      }
    }
    return false;
  }

  isHot = (t) => {
    // temperatures greater than 20 degrees is hot
    if(t > 20){
      return true;
    } else {
      return false;
    }
  }

  rotate = (word) => {
    const letters = ['I', 'O', 'S', 'H', 'Z', 'X', 'N']
    for(let i=0; i<word.length; i++){
      for(let j=0; j<letters.length; j++){
        if(word[i] != letters[j]){
          console.log('NO');
          return;
        }
      }
    }
    console.log('YES')
  }
  
  speeding = (limit, carSpd) => {

  }
  
  fishy = () => {

  }

  iconScailing = (n) => {
    let star = ""
    let space = ""
    let x = ""

    for(let i=0; i<n; i++){
      star += '*';
      space += ' ';
      x += 'X';
    }

    for(let i=0; i<n; i++){
      console.log(star + x + star)
    }
    for(let i=0; i<n; i++){
      console.log(space + x + x)
    }
    for(let i=0; i<n; i++){
      console.log(star + space + star)
    }
  }

  mergeSort(arr1, arr2){
    const res = [];
    let i=0;
    let j=0;
    while(i < arr1.length && j < arr2.length){
      if(arr1[i] <= arr2[j]){
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    }
    if(i == arr1.length){
      for(j; j<arr2.length; j++){
        res.push(arr2[j]);
      }
    } else {
      for(i; i<arr1.length; i++){
        res.push(arr1[i]);
      }
    }
    console.log(res);
    return res;
  }

  createMaxtrix(x, y){
    const mat = [];
    for(let i=0; i<x; i++){
      const inner = [];
      for(let j=0; j<y; j++){
        const rand = Math.floor(Math.random() * 10);
        inner.push(rand);
      }
      mat.push(inner);
    }
    return mat;
  }

  smallerMatrix(mat){
    const res = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    for(let i=0; i<9; i++){
      for(let j=0; j<9; j++){
        res[Math.floor(i/3)][Math.floor(j/3)] += mat[i][j]/9;
      }
    }
    console.log(res);
  }

  threeOdds = (arr) => {
    
  }

  unique = (arr) => {
    
  }

  missing = (arr) => {

  }

  powerTwo = (n) => {

  }

  pyramid = (n) => {

  }

  isDuplicate = (arr) => {
    
  }

  shortenString = (str) => {
    
  }

  shortenStringStack = (str) => {

  }

  runningSum = (arr) => {
    
  }

  klatz = (n) => {

  }

  greater = (arr) => {

  }

  median = (arr) => {

  }

  mines = (arr) => {
    let res = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];



    return arr;
  }

  buyingHouses = (arr, m) => {
    // code
    arr.sort(function(a, b){return a - b});
    let count = 0;
  }

  add = (n) => {

  }

  factorial = (n) => {
    
  }

  smaller = (arr) => {
    // put all values in dictionary

    // go through array again and check dictionary
  }

// How Many Numbers Are Smaller Than the Current Number

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]



  // arr.sort(function(a, b){return a - b});

//   // Return factorial of n
//   public static int factorial(int n) {
//     if(n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// // done
// // Fibonacci
// public static int fibonacci(int n) {
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// // We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on.
// // Total blocks?
// public static int triangle(int rows) {
//     if(rows == 0){
//         return 0;
//     }

//     return triangle(rows-1) + rows;
// }

// Given a non-negative int n, return the sum of its digits recursively

// public int sumDigits(int n) {
//   if(n==0){
//     return 0;
//   }
//   return n%10 + sumDigits(n/10);
// }

// powerN(3, 2) -> 9
// public int powerN(int base, int n) {
//   if(n == 0){
//     return 1;
//   }
//   return base * powerN(base, n-1);
// }

  anagram = (w1, w2) => {
    if(w1.length != w2.length){
      console.log(false);
      return false;
    }
    let dict = {};
    for(let i=0; i<w1.length; i++){
      const letter = w1[i];
      if(dict[letter]){
        dict[letter]++;
      } else {
        dict[letter] = 1;
      }
    }
    for(let i=0; i<w2.length; i++){
      const letter = w2[i];
      if(dict[letter] && dict[letter] > 0){
        dict[letter]--;
      } else {
        console.log(false);
        return;
      }
    }
    console.log(true);
    return;
  }

  duplicateNum = (arr) => {
    // your code here
  }

  missingNum = (arr) => {
    // your code here
  }

  commonString = (w1, w2) => {
    // your code here
    let mySet = {};
    let ans = [];
    for(let i=0; i<w1.length; i++){
      
    }
    for(let i=0; i<w2.length; i++){
      
    }
  }

  singleNumber = (arr) => {
    let mySet = {};
    for(let i=0; i<arr.length; i++){
      const val = arr[i];
      if(mySet[val]){
        mySet[val] = false;
      } else {
        mySet[val] = true;
      }
    }
    for(let i=0; i<arr.length; i++){
      const val = arr[i];
      if(mySet[val] == true){
        console.log(val);
      }
    }
  }

  randomArray = (nums) => {
    let arr = [];
    for(let i=0; i<nums; i++){
      const random = Math.floor(Math.random() * 100) + 1; 
      arr.push(random);
    }
    console.log(arr);
    return arr;
  }

  insertionSort = (arr) => {
    const nums = arr.length;
    for(let i=1; i<nums; i++){
      const val = arr[i];
      let j = i - 1;
      while(val < arr[j] && j >= 0){
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = val;
    }
    console.log(arr);
  }

  bubbleSort = (arr) => {
    const nums = arr.length;
    for(let i=0; i<nums-1; i++){
      for(let j=0; j<nums-1-i; j++){
        if(arr[j] > arr[j+1]){
          const temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    console.log(arr);
  }

  reverse = (arr, start, end) => {
    const mid = Math.floor((start+end+1)/2);
    for(let i=0; i<mid; i++){
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    console.log(arr);
  }

  rotate = (arr, times) => {
    const nums = arr.length;
    const actualTimes = times%nums;

    
  }

  makeBars = (small, big, goal) => {
    let ans = 0;

    // your code here

    console.log(ans)
  }

  sum = (a, b, c) => {
    let sum = 0;

    // your code here

    return sum;
  }
  
  render() {
    return (
      <div>
          Debug
      </div>
    );
  }
}

export default Debugger;