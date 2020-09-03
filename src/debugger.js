import React, { Component } from 'react';
import './App.css';



class Debugger extends Component {

  state = {
    
  }

  componentDidMount() {
    this.powerTwo(3);
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