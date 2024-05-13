
/*function reverseString(myString) {
    var characters = myString.split('');
   
    var reversedCharacters = characters.reverse();
    
  
    var reversedString = reversedCharacters.join('');
   
    return reversedString;
}
var originalString = "je m'appelle slim";
var reversedString = reverseString(originalString);
console.log(reversedString);**/
/*function countCharacters(originalString) {
    return originalString.length;
}
var String = "je m'appelle slim";
console.log(countCharacters(String));**/
/*function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1); 
        capitalizedWords.push(capitalizedWord);
    }

    const capitalizedSentence = capitalizedWords.join(' ');

    
    return capitalizedSentence;
}
const sentence = "hello world";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);**/
/**function findMaximum(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

function findMinimum(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    return min;
}


const numbers = [5, 3, 8, 2, 7, 1, 10];
console.log("Maximum value:", findMaximum(numbers));
console.log("Minimum value:", findMinimum(numbers));**/


/**function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const arr = [5, 3, 8, 2, 7, 1, 10];
console.log(sumOfArray(arr));**/ 

/**function filterArray(array, condition) {
    
    const filteredArray = [];

    
    for (let i = 0; i < array.length; i++) {
        
        if (condition(array[i])) {
            
            filteredArray.push(array[i]);
        }
    }

    
    return filteredArray;
}


const numbers = [5, 3, 8, 2, 7, 1, 10];


const evenNumbers = filterArray(numbers, number => number % 2 === 0);
console.log(evenNumbers); 


function factorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    
    let result = 1;

    
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    
    return result;
}


const number = 5;
console.log(factorial(number)); **/



/**function isPrime(number) {
    
    if (number <= 1) {
        return false;
    }
    
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            
            return false;
        }
    }
    
    
    return true;
}


const number1 = 17;
const number2 = 15;

console.log(isPrime(number1)); 
console.log(isPrime(number2)); **/

function generateFibonacciSequence(numTerms) {
    
    const fibonacciSequence = [0, 1];

    
    for (let i = 2; i < numTerms; i++) {
        const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    
    return fibonacciSequence;
}


const numTerms = 10;
console.log(generateFibonacciSequence(numTerms)); 






