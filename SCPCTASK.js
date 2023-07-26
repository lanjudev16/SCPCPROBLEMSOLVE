const reversedString=(inputString)=>{
        let reversedString =[];
        for (let i = inputString.length - 1; i >= 0; i--) {
          reversedString.push(inputString[i])
        }
        return reversedString.join('');
}
// console.log(reversedString("hello world"))
const sumOfAllPositiveNumber=(inputNumber)=>{
    let sum=0;
    for (const number of inputNumber) {
        
        if(number>0){
            sum+=number
        }
    }
    return sum
}
// console.log(sumOfAllPositiveNumber([2, -5, 10, -3, 7]))
function findMostFrequentElement(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    const frequencyMap = {};
  
    arr.forEach((element) => {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });
  
    let mostFrequentElement = arr[0];
    let highestFrequency = frequencyMap[arr[0]];
  
    for (const element in frequencyMap) {
      if (frequencyMap[element] > highestFrequency) {
        highestFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }

  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequentElement = findMostFrequentElement(inputArray);
//   console.log("The most frequent element is:", mostFrequentElement);
function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
  
      if (sum === target) {
        return [left, right]; 
      } else if (sum < target) {
        left++; 
      } else {
        right--; 
      }
    }
  
    return null; 
  }
  
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const indices = findTwoNumbersWithSum(sortedArray, targetValue);
//   console.log("Indices of two numbers that add up to the target:", indices); 

function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  const num1 = 10;
  const num2 = 5;
  const operator = '+';
  const result = calculate(num1, num2, operator);
//   console.log(`Result: ${result}`);
function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
//   console.log("Random Password:", randomPassword);
function romanToInteger(romanNumeral) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const nextNumeral = romanNumeral[i + 1];
  
      if (romanNumerals[currentNumeral] < romanNumerals[nextNumeral]) {
        result -= romanNumerals[currentNumeral];
      } else {
        result += romanNumerals[currentNumeral];
      }
    }
  
    return result;
  }
  
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
//   console.log(`${romanNumeral1} -> ${romanToInteger(romanNumeral1)}`);
//   console.log(`${romanNumeral2} -> ${romanToInteger(romanNumeral2)}`);
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    return secondSmallest;
  }
  
  const array = [5, 8, 3, 1, 10, 7, 2];
  const secondSmallest = findSecondSmallest(array);
  console.log("Second Smallest:", secondSmallest); 
  

  
  
  
  
  
  
  
