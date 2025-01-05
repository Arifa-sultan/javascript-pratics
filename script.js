
// sync example 
// let a = prompt("what is your name");
// let b= prompt("what is your age");
// let c=prompt("what is your favorite color");
// console.log(a+ "is "+ "year old and has " +c+"favorite color");
// // async 
// console.log("i am fine");
// setTimeout(function(){
//     console.log("hey i am good")
// },2000);
// console.log("i am pretty good");
// callbacks
// function add(a, b, callback) {
//     const sum = a + b;
//     callback(sum); // Callback function ko result ke saath call karna
//   }
  
//   function displaySum(result) {
//     console.log("Sum hai: " + result);
//   }
  
//   add(5, 10, displaySum);
// function fetchData(callback) {
//     console.log("Data fetch ho raha hai...");
//     setTimeout(() => {
//       const data = { name: "Arifa", age: 22 };
//       callback(data);  // Callback ko data ke saath call karna
//     }, 2000);  // 2 seconds baad data fetch hoga
//   }
  
//   function processData(data) {
//     console.log("Data process ho raha hai: ", data);
//   }
  
//   fetchData(processData);
// callbackhell 
// function firstTask(callback) {
//     console.log("First task completed!");
//     callback();
//   }
  
//   function secondTask(callback) {
//     console.log("Second task completed!");
//     callback();
//   }
  
//   function thirdTask(callback) {
//     console.log("Third task completed!");
//     callback();
//   }
  
//   firstTask(function() {
//     secondTask(function() {
//       thirdTask(function() {
//         console.log("All tasks are completed!");
//       });
//     });
//   });
  
//   promises 
// function firstTask() {
//     return new Promise(resolve => {
//       console.log("First task completed!");
//       resolve();
//     });
//   }
  
//   function secondTask() {
//     return new Promise(resolve => {
//       console.log("Second task completed!");
//       resolve();
//     });
//   }
  
//   function thirdTask() {
//     return new Promise(resolve => {
//       console.log("Third task completed!");
//       resolve();
//     });
//   }
  
//   firstTask()
//     .then(() => secondTask())
//     .then(() => thirdTask())
//     .then(() => {
//       console.log("All tasks are completed!");
//     });
// promises
let myPromise = new Promise(function(resolve, reject) {
    let success = true; // Assume we are checking if some task was successful
    
    if (success) {
      resolve("Task completed successfully!");  // Operation successful
    } else {
      reject("Task failed!");  // Operation failed
    }
  });
  
  myPromise
    .then(function(result) {
      console.log(result);  // If resolved, result will be passed here
    })
    .catch(function(error) {
      console.log(error);  // If rejected, error will be passed here
    });
  
  
  