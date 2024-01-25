// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// jest structure
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// function structure
// const greeter = () => {
//   return "Hello, LEARN student!"
// }

// pseudocode structure
// Function Signature
// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// input: 45
// output: "Buckle up, let's ride"

// input: "yolo"
// output: "error"

// Process
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error


// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// Research of fibonacci sequence: 
// always start with two values, to get the next value add the previous two
// For example [1, 1, 2, 3, 5, 8]
// starts with 1, 1
// to get the next value add 1 + 1 = 2



// a) Create a test with expect statements for each of the variables provided.


describe("fibbing", () => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
    const fibonacciLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibonacciLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    expect(fibbing(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibbing(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Good failure
// FAIL  ./code-challenges.test.js
// fibbing
//   ✕ takes in a number (greater than 2) and returns an array containing the Fibonacci sequence (1 ms)

// b) Create the function that makes the test pass.

// Pseudo code:
// Process (pseudocode)
// ensure there are two values in the array: [1, 1]
// then add those values, therefore iterate across the values to grab the values at the previous two indexes 
// push that sum to the end of the array
// return the mutated array

// create a function called fibbing
// input: a number (greater than 2)
// output: an array containing the Fibonacci sequence and its length is determined by the input

const fibbing = ( number ) => {
  let fibArray = [ 1, 1 ]
  for(i = 2; i < number; i++) {
    let nextValue = fibArray[i - 2] + fibArray[i - 1]
    fibArray.push(nextValue)
    console.log("inside for loop:", fibArray)
  }
  console.log("outside for loop:", fibArray)
  return fibArray
}

// Success
// PASS  ./code-challenges.test.js
// fibbing

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
