// String Manipulation 

// a function that reverses a given string.

startString = "Start the engine by 8pm, today";
function ReverseString(startString) {
    let arr = startString.split("");

    arr.reverse();

    let reversedString = arr.join();

    return reversedString;
    
}   
let reversedString = ReverseString(startString)
console.log(reversedString)


// a function that counts the number of characters in a string.

characString = ("I like to be alone and contemplate, sometimes ")
function countCharac(characString) {
    return characString.length; // returns 46
}
let characCount = countCharac(characString) // inputting the function in a variable
console.log("Character Count: ", characCount)

// a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetter(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}

let testSentence = "burna boy just shut down london!";
let capitalizedSentence = capitalizeFirstLetter(testSentence);
console.log(capitalizedSentence);  // Output: "Burna Boy Just Shut Down London."

// Array Functions

// Write functions to find the maximum and minimum values in an array of numbers.

// let numbers = [2, 20, 200, 2000];

let array = [2, 20, 200, 2000];
function findMaxValue(array) {
    if (array.length === 0) {
        return null
    } else {
        return Math.max(...array);
    }
}

let maxValue = findMaxValue(array);
console.log("Max Value:", maxValue); // Output: Max Value: 2000 

function findMinValue(array) {
    if (array.length === 0) {
        return null
    } else {
        return Math.min(...array);
    }
}
let minValue = findMinValue(array);
console.log("Min Value:", minValue); // Output: Min Value: 2


// Sum of Array: Create a function that calculates the sum of all elements in an array.

let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
function SumArrayOne(arrayOne){
    for (i = 0; i < arrayOne.length; i++) {
        sum += arrayOne[i];
    }

    return sum;
}
let SummedArray = SumArrayOne(arrayOne);
console.log("Sum: ", SummedArray)

// Filter Array: Implement a function that filters out elements from an array based on a given condition.

let numbers = Array(100).fill(1).map((n, i) => n + i);
function filterArray(numbers, condition) {
    return numbers.filter(condition);
}
// Condition function to filter multiples of 5.
const isMulOf5 = num => num % 5 === 0;

let evenNumbers = filterArray(numbers, isMulOf5);
console.log(evenNumbers); // Output: [5, 10, 15, ...100]

// Condition function to filter strings longer than 3 characters
const isLongerThan3 = str => str.length > 3;

let strings = ["a", "ab", "abc", "abcd", "abcde"];
let longStrings = filterArray(strings, isLongerThan3);
console.log(longStrings); // Output: ["abcd", "abcde"]

// Condition function to filter objects based on a property
const isOlderThan30 = person => person.age > 30;

let people = [
    { name: "Solomon", age: 25 },
    { name: "Collins", age: 30 },
    { name: "Godwin", age: 35 },
    { name: "Jamaal", age: 40 }
];

let olderPeople = filterArray(people, isOlderThan30);
console.log(olderPeople); // Output: [{ name: "Godwin", age: 35 }, { name: "Jamaal", age: 40 }]



// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // result = result * 1;
    }
    return result;
}

console.log(factorial(0)); // Output: 1
console.log(factorial(6)); // Output: 720
console.log(factorial(-5));// Output: undefined

// Prime Number Check: Create a function to check if a number is prime or not.

function primeNumber(n){

    if (n < 2 ) return `${n} is not a prime.`;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number.`;
        }
    }
    return `${n} is a prime number.` // returns if its a prime number.

}

// testing of prime numbers: 

console.log(primeNumber(123));
console.log(primeNumber(12));
console.log(primeNumber(3));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(1));  // Output: [0]
console.log(fibonacci(0));  // Output: []











