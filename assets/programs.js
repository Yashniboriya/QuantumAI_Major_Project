const mockPrograms = [
  {
    name: "Fibonacci Series",
    description: `
function fibonacciSeries(n) {
    let fibSeries = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    
    return fibSeries;
}

// Example usage:
const n = 10; // Change n to generate Fibonacci series of different lengths
console.log(\`Fibonacci series of length \${n}:\`, fibonacciSeries(n));
    `,
  },
  {
    name: "Prime Number",
    description: `
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
const num = 11; // Change num to check for different numbers
console.log(num + " is prime:", isPrime(num));
    `,
  },
  {
    name: "Even or Odd",
    description: `
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
const num = 7; // Change num to check for different numbers
console.log(num + " is:", isEvenOrOdd(num));
    `,
  },
  {
    name: "Reverse String",
    description: `
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage:
const str = "hello"; // Change str to reverse a different string
console.log("Reversed string:", reverseString(str));
    `,
  },
  {
    name: "Factorial",
    description: `
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
const num = 5; // Change num to calculate factorial for a different number
console.log("Factorial of", num + ":", factorial(num));
    `,
  },
  {
    name: "Palindrome",
    description: `
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

// Example usage:
const str = "radar"; // Change str to check for a different palindrome
console.log(str + " is a palindrome:", isPalindrome(str));
    `,
  },
  // Add more mock programs as needed
  {
    name: "String Capitalization",
    description: `
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
const str = "hello world"; // Change str to capitalize a different string
console.log("Capitalized string:", capitalizeString(str));
    `,
  },
  {
    name: "Array Sum",
    description: `
function arraySum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Example usage:
const arr = [1, 2, 3, 4, 5]; // Change arr to sum a different array
console.log("Sum of array elements:", arraySum(arr));
    `,
  },
  {
    name: "Array Average",
    description: `
function arrayAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// Example usage:
const arr = [1, 2, 3, 4, 5]; // Change arr to find average of a different array
console.log("Average of array elements:", arrayAverage(arr));
    `,
  },
  {
    name: "Random Number Generator",
    description: `
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const min = 1; // Change min and max to generate random numbers within a different range
const max = 100;
console.log("Random number between", min, "and", max + ":", generateRandomNumber(min, max));
    `,
  },
  {
    name: "Remove Duplicates from Array",
    description: `
  function removeDuplicates(arr) {
      return [...new Set(arr)];
  }
  
  // Example usage:
  const arr = [1, 2, 2, 3, 4, 4, 5]; // Change arr to remove duplicates from a different array
  console.log("Array with duplicates removed:", removeDuplicates(arr));
      `,
  },
  {
    name: "Calculate Exponentiation",
    description: `
  function power(base, exponent) {
      return Math.pow(base, exponent);
  }
  
  // Example usage:
  const base = 2; // Change base and exponent to calculate different powers
  const exponent = 3;
  console.log(base + " raised to the power of " + exponent + ":", power(base, exponent));
      `,
  },
  {
    name: "Generate Multiplication Table",
    description: `
  function multiplicationTable(n) {
      for (let i = 1; i <= 10; i++) {
          console.log(n + " x " + i + " =", n * i);
      }
  }
  
  // Example usage:
  const num = 5; // Change num to generate multiplication table for a different number
  console.log("Multiplication table for", num + ":");
  multiplicationTable(num);
      `,
  },
  {
    name: "Find Maximum Element in Array",
    description: `
  function findMax(arr) {
      return Math.max(...arr);
  }
  
  // Example usage:
  const arr = [5, 3, 9, 1, 7]; // Change arr to find maximum element in a different array
  console.log("Maximum element in array:", findMax(arr));
      `,
  },
  {
    name: "Find Minimum Element in Array",
    description: `
  function findMin(arr) {
      return Math.min(...arr);
  }
  
  // Example usage:
  const arr = [5, 3, 9, 1, 7]; // Change arr to find minimum element in a different array
  console.log("Minimum element in array:", findMin(arr));
      `,
  },
  {
    name: "Check Leap Year",
    description: `
  function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Example usage:
  const year = 2024; // Change year to check for leap year status of a different year
  console.log(year + " is a leap year:", isLeapYear(year));
      `,
  },
  {
    name: "Generate Random Password",
    description: `
  function generateRandomPassword(length) {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
      let password = "";
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
      }
      return password;
  }
  
  // Example usage:
  const length = 12; // Change length to generate a password of different length
  console.log("Random password:", generateRandomPassword(length));
      `,
  },
  {
    name: "Count Vowels in String",
    description: `
  function countVowels(str) {
      const vowels = "aeiouAEIOU";
      let count = 0;
      for (let char of str) {
          if (vowels.includes(char)) {
              count++;
          }
      }
      return count;
  }
  
  // Example usage:
  const str = "hello world"; // Change str to count vowels in a different string
  console.log("Number of vowels in string:", countVowels(str));
      `,
  },
  {
    name: "Check Armstrong Number",
    description: `
  function isArmstrongNumber(num) {
      const numString = num.toString();
      const power = numString.length;
      let sum = 0;
      for (let digit of numString) {
          sum += Math.pow(parseInt(digit), power);
      }
      return sum === num;
  }
  
  // Example usage:
  const num = 153; // Change num to check for a different Armstrong number
  console.log(num + " is an Armstrong number:", isArmstrongNumber(num));
      `,
  },
  {
    name: "Calculate Area of Circle",
    description: `
  function calculateCircleArea(radius) {
      return Math.PI * radius ** 2;
  }
  
  // Example usage:
  const radius = 5; // Change radius to calculate area for a circle with different radius
  console.log("Area of circle with radius", radius + ":", calculateCircleArea(radius));
      `,
  },
  {
    name: "Calculate Area of Triangle",
    description: `
  function calculateTriangleArea(base, height) {
      return 0.5 * base * height;
  }
  
  // Example usage:
  const base = 4; // Change base and height to calculate area for a triangle with different dimensions
  const height = 3;
  console.log("Area of triangle with base", base, "and height", height + ":", calculateTriangleArea(base, height));
      `,
  },
  {
    name: "Check Perfect Number",
    description: `
  function isPerfectNumber(num) {
      let sum = 0;
      for (let i = 1; i < num; i++) {
          if (num % i === 0) {
              sum += i;
          }
      }
      return sum === num;
  }
  
  // Example usage:
  const num = 28; // Change num to check for a different perfect number
  console.log(num + " is a perfect number:", isPerfectNumber(num));
      `,
  },
  {
    name: "Calculate GCD (Greatest Common Divisor)",
    description: `
  function calculateGCD(a, b) {
      if (b === 0) {
          return a;
      }
      return calculateGCD(b, a % b);
  }
  
  // Example usage:
  const num1 = 20; // Change num1 and num2 to calculate GCD for different numbers
  const num2 = 30;
  console.log("GCD of", num1, "and", num2 + ":", calculateGCD(num1, num2));
      `,
  },

  {
    name: "Find Median of Array",
    description: `
  function findMedian(arr) {
      const sortedArr = arr.sort((a, b) => a - b);
      const mid = Math.floor(sortedArr.length / 2);
      return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  }
  
  // Example usage:
  const arr = [5, 2, 7, 1, 9]; // Change arr to find median of a different array
  console.log("Median of array:", findMedian(arr));
      `,
  },
  {
    name: "Check Happy Number",
    description: `
  function isHappyNumber(num) {
      let seen = new Set();
      while (num !== 1 && !seen.has(num)) {
          seen.add(num);
          num = num.toString().split("").reduce((sum, digit) => sum + parseInt(digit) ** 2, 0);
      }
      return num === 1;
  }
  
  // Example usage:
  const num = 19; // Change num to check for a different happy number
  console.log(num + " is a happy number:", isHappyNumber(num));
      `,
  },
  {
    name: "Calculate LCM (Least Common Multiple)",
    description: `
  function calculateLCM(a, b) {
      return (a * b) / calculateGCD(a, b);
  }
  
  // Example usage:
  const num1 = 12; // Change num1 and num2 to calculate LCM for different numbers
  const num2 = 18;
  console.log("LCM of", num1, "and", num2 + ":", calculateLCM(num1, num2));
      `,
  },
  {
    name: "Check Disarium Number",
    description: `
  function isDisariumNumber(num) {
      let sum = 0;
      let temp = num;
      let length = num.toString().length;
      while (temp > 0) {
          sum += Math.pow(temp % 10, length);
          temp = Math.floor(temp / 10);
          length--;
      }
      return sum === num;
  }
  
  // Example usage:
  const num = 89; // Change num to check for a different Disarium number
  console.log(num + " is a Disarium number:", isDisariumNumber(num));
      `,
  },
  {
    name: "Check Strong Number",
    description: `
  function isStrongNumber(num) {
      let sum = 0;
      let temp = num;
      while (temp > 0) {
          let digit = temp % 10;
          let factorial = 1;
          for (let i = 1; i <= digit; i++) {
              factorial *= i;
          }
          sum += factorial;
          temp = Math.floor(temp / 10);
      }
      return sum === num;
  }
  
  // Example usage:
  const num = 145; // Change num to check for a different strong number
  console.log(num + " is a strong number:", isStrongNumber(num));
      `,
  },
  {
    name: "Calculate Compound Interest",
    description: `
  function calculateCompoundInterest(principal, rate, time) {
      return principal * Math.pow((1 + rate / 100), time);
  }
  
  // Example usage:
  const principal = 1000; // Change principal, rate, and time to calculate compound interest for different values
  const rate = 5;
  const time = 2;
  console.log("Compound interest:", calculateCompoundInterest(principal, rate, time));
      `,
  },
  {
    name: "Check Neon Number",
    description: `
  function isNeonNumber(num) {
      const square = num * num;
      let sum = 0;
      while (square > 0) {
          sum += square % 10;
          square = Math.floor(square / 10);
      }
      return sum === num;
  }
  
  // Example usage:
  const num = 9; // Change num to check for a different neon number
  console.log(num + " is a neon number:", isNeonNumber(num));
      `,
  },
  {
    name: "Calculate Area of Rectangle",
    description: `
  function calculateRectangleArea(length, width) {
      return length * width;
  }
  
  // Example usage:
  const length = 5; // Change length and width to calculate area for a rectangle with different dimensions
  const width = 3;
  console.log("Area of rectangle:", calculateRectangleArea(length, width));
      `,
  },
  {
    name: "Calculate Perimeter of Rectangle",
    description: `
  function calculateRectanglePerimeter(length, width) {
      return 2 * (length + width);
  }
  
  // Example usage:
  const length = 5; // Change length and width to calculate perimeter for a rectangle with different dimensions
  const width = 3;
  console.log("Perimeter of rectangle:", calculateRectanglePerimeter(length, width));
      `,
  },
  {
    name: "Check Pronic Number",
    description: `
  function isPronicNumber(num) {
      for (let i = 0; i <= Math.sqrt(num); i++) {
          if (i * (i + 1) === num) {
              return true;
          }
      }
      return false;
  }
  
  // Example usage:
  const num = 6; // Change num to check for a different pronic number
  console.log(num + " is a pronic number:", isPronicNumber(num));
      `,
  },
  {
    name: "Calculate Perimeter of Square",
    description: `
  function calculateSquarePerimeter(side) {
      return 4 * side;
  }
  
  // Example usage:
  const side = 4; // Change side to calculate perimeter for a square with different side length
  console.log("Perimeter of square:", calculateSquarePerimeter(side));
      `,
  },
  {
    name: "Check Perfect Square",
    description: `
  function isPerfectSquare(num) {
      return Math.sqrt(num) % 1 === 0;
  }
  
  // Example usage:
  const num = 16; // Change num to check for a different perfect square
  console.log(num + " is a perfect square:", isPerfectSquare(num));
      `,
  },
  {
    name: "Check Automorphic Number",
    description: `
  function isAutomorphicNumber(num) {
      const square = num * num;
      return square.toString().endsWith(num.toString());
  }
  
  // Example usage:
  const num = 25; // Change num to check for a different automorphic number
  console.log(num + " is an automorphic number:", isAutomorphicNumber(num));
      `,
  },
  {
    name: "Check Kaprekar Number",
    description: `
  function isKaprekarNumber(num) {
      const square = num * num;
      const squareStr = square.toString();
      for (let i = 1; i < squareStr.length; i++) {
          const left = parseInt(squareStr.substring(0, i));
          const right = parseInt(squareStr.substring(i));
          if (left + right === num && left > 0 && right > 0) {
              return true;
          }
      }
      return false;
  }
  
  // Example usage:
  const num = 297; // Change num to check for a different Kaprekar number
  console.log(num + " is a Kaprekar number:", isKaprekarNumber(num));
      `,
  },
  {
    name: "Calculate Area of Square",
    description: `
  function calculateSquareArea(side) {
      return side * side;
  }
  
  // Example usage:
  const side = 4; // Change side to calculate area for a square with different side length
  console.log("Area of square:", calculateSquareArea(side));
      `,
  },
  {
    name: "Check Triangular Number",
    description: `
  function isTriangularNumber(num) {
      let sum = 0;
      let n = 1;
      while (sum < num) {
          sum += n;
          if (sum === num) {
              return true;
          }
          n++;
      }
      return false;
  }
  
  // Example usage:
  const num = 10; // Change num to check for a different triangular number
  console.log(num + " is a triangular number:", isTriangularNumber(num));
      `,
  },
  {
    name: "Calculate Factorial of Large Numbers",
    description: `
  function factorialBigInt(n) {
      let result = BigInt(1);
      for (let i = BigInt(2); i <= n; i++) {
          result *= i;
      }
      return result.toString();
  }
  
  // Example usage:
  const num = BigInt(100); // Change num to calculate factorial for a different large number
  console.log("Factorial of", num + ":", factorialBigInt(num));
      `,
  },
  {
    name: "Calculate Fibonacci Number",
    description: `
  function fibonacci(n) {
      let a = 0, b = 1, temp;
      if (n === 0) return a;
      for (let i = 2; i <= n; i++) {
          temp = a + b;
          a = b;
          b = temp;
      }
      return b;
  }
  
  // Example usage:
  const n = 10; // Change n to calculate a different Fibonacci number
  console.log("Fibonacci number at position", n + ":", fibonacci(n));
      `,
  },
  {
    name: "Check Duck Number",
    description: `
  function isDuckNumber(num) {
      return num.toString().slice(1).includes('0');
  }
  
  // Example usage:
  const num = 1023; // Change num to check for a different duck number
  console.log(num + " is a duck number:", isDuckNumber(num));
      `,
  },
  {
    name: "Calculate Area of Parallelogram",
    description: `
  function calculateParallelogramArea(base, height) {
      return base * height;
  }
  
  // Example usage:
  const base = 5; // Change base and height to calculate area for a parallelogram with different dimensions
  const height = 8;
  console.log("Area of parallelogram:", calculateParallelogramArea(base, height));
      `,
  },
  {
    name: "Check Happy Prime Number",
    description: `
  function isHappyPrime(num) {
      return isPrime(num) && isHappyNumber(num);
  }
  
  // Example usage:
  const num = 7; // Change num to check for a different happy prime number
  console.log(num + " is a happy prime number:", isHappyPrime(num));
      `,
  },
  {
    name: "Calculate Natural Logarithm",
    description: `
  function calculateNaturalLogarithm(num) {
      return Math.log(num);
  }
  
  // Example usage:
  const num = 10; // Change num to calculate natural logarithm for a different number
  console.log("Natural logarithm of", num + ":", calculateNaturalLogarithm(num));
      `,
  },
  {
    name: "Check Smith Number",
    description: `
  function isSmithNumber(num) {
      const primeFactors = factorize(num).flatMap(factors => factors.toString().split('')).map(Number);
      const digitSum = primeFactors.reduce((sum, digit) => sum + digit, 0);
      const digitSumOfNum = num.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
      return digitSum === digitSumOfNum;
  }
  
  function factorize(num) {
      const factors = [];
      let divisor = 2;
      while (num >= 2) {
          if (num % divisor === 0) {
              factors.push(divisor);
              num /= divisor;
          } else {
              divisor++;
          }
      }
      return factors;
  }
  
  // Example usage:
  const num = 666; // Change num to check for a different Smith number
  console.log(num + " is a Smith number:", isSmithNumber(num));
      `,
  },

  {
    name: "Calculate Catalan Number",
    description: `
  function calculateCatalanNumber(n) {
      if (n <= 1) return 1;
      let result = 0;
      for (let i = 0; i < n; i++) {
          result += calculateCatalanNumber(i) * calculateCatalanNumber(n - i - 1);
      }
      return result;
  }
  
  // Example usage:
  const n = 5; // Change n to calculate a different Catalan number
  console.log("Catalan number at position", n + ":", calculateCatalanNumber(n));
      `,
  },

  {
    name: "Calculate Fibonacci Sequence",
    description: `
  function fibonacciSequence(n) {
      let sequence = [0, 1];
      for (let i = 2; i <= n; i++) {
          sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      return sequence.slice(0, n + 1);
  }
  
  // Example usage:
  const n = 10; // Change n to calculate Fibonacci sequence up to a different position
  console.log("Fibonacci sequence up to position", n + ":", fibonacciSequence(n));
      `,
  },
  {
    name: "Calculate Greatest Common Divisor (GCD)",
    description: `
  function calculateGCD(a, b) {
      while (b !== 0) {
          const temp = b;
          b = a % b;
          a = temp;
      }
      return a;
  }
  
  // Example usage:
  const num1 = 48; // Change num1 and num2 to calculate GCD for different numbers
  const num2 = 60;
  console.log("GCD of", num1, "and", num2 + ":", calculateGCD(num1, num2));
      `,
  },
  {
    name: "Check Vampire Number",
    description: `
  function isVampireNumber(num) {
      const numDigits = num.toString().split('');
      const numLength = numDigits.length;
      const numPermutations = permute(numDigits, numLength);
      for (const [x, y] of numPermutations) {
          if (x * y === num && !(x % 10 === 0 && y % 10 === 0)) {
              return true;
          }
      }
      return false;
  }
  
  function permute(digits, numLength) {
      if (numLength === 1) return [[digits.join(''), '']];
      const result = [];
      for (let i = 0; i < numLength; i++) {
          const subDigits = [...digits];
          const removed = subDigits.splice(i, 1)[0];
          const subPermutations = permute(subDigits, numLength - 1);
          for (const [x, y] of subPermutations) {
              result.push([removed + x, y]);
              result.push([x, removed + y]);
          }
      }
      return result;
  }
  
  // Example usage:
  const num = 1260; // Change num to check for a different Vampire number
  console.log(num + " is a Vampire number:", isVampireNumber(num));
      `,
  },
  {
    name: "Check Armstong Number",
    description: `
  function isArmstrongNumber(num) {
      const numStr = num.toString();
      const power = numStr.length;
      let sum = 0;
      for (let digit of numStr) {
          sum += Math.pow(parseInt(digit), power);
      }
      return sum === num;
  }
  
  // Example usage:
  const num = 153; // Change num to check for a different Armstrong number
  console.log(num + " is an Armstrong number:", isArmstrongNumber(num));
      `,
  },
  {
    name: "Check Perfect Cube",
    description: `
  function isPerfectCube(num) {
      const cubeRoot = Math.round(Math.pow(num, 1/3));
      return Math.pow(cubeRoot, 3) === num;
  }
  
  // Example usage:
  const num = 27; // Change num to check for a different perfect cube
  console.log(num + " is a perfect cube:", isPerfectCube(num));
      `,
  },
  {
    name: "Check Pronic Number",
    description: `
  function isPronicNumber(num) {
      const sqrt = Math.sqrt(num);
      return Math.floor(sqrt) * Math.ceil(sqrt) === num;
  }
  
  // Example usage:
  const num = 6; // Change num to check for a different pronic number
  console.log(num + " is a pronic number:", isPronicNumber(num));
      `,
  },
  {
    name: "Calculate Harmonic Mean",
    description: `
  function calculateHarmonicMean(arr) {
      return arr.length / arr.reduce((acc, val) => acc + 1 / val, 0);
  }
  
  // Example usage:
  const arr = [2, 4, 6]; // Change arr to calculate harmonic mean for a different set of numbers
  console.log("Harmonic mean:", calculateHarmonicMean(arr));
      `,
  },
  {
    name: "Check Harshad Number",
    description: `
  function isHarshadNumber(num) {
      const sumOfDigits = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      return num % sumOfDigits === 0;
  }
  
  // Example usage:
  const num = 18; // Change num to check for a different Harshad number
  console.log(num + " is a Harshad number:", isHarshadNumber(num));
      `,
  },
  {
    name: "Check Untouchable Number",
    description: `
  function isUntouchableNumber(num) {
      for (let i = 2; i <= num + 1; i++) {
          if (sumOfProperDivisors(i) === num) {
              return false;
          }
      }
      return true;
  }
  
  function sumOfProperDivisors(num) {
      let sum = 0;
      for (let i = 1; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              sum += i;
              if (i !== 1 && num / i !== i) {
                  sum += num / i;
              }
          }
      }
      return sum;
  }
  
  // Example usage:
  const num = 2; // Change num to check for a different untouchable number
  console.log(num + " is an untouchable number:", isUntouchableNumber(num));
      `,
  },

  {
    name: "Check Powerful Number",
    description: `
  function isPowerfulNumber(num) {
      const primeFactors = factorize(num);
      const uniqueFactors = [...new Set(primeFactors)];
      return uniqueFactors.every(factor => {
          let count = 0;
          let temp = num;
          while (temp % factor === 0) {
              temp /= factor;
              count++;
          }
          return count > 1;
      });
  }
  
  function factorize(num) {
      const factors = [];
      for (let i = 2; i <= Math.sqrt(num); i++) {
          while (num % i === 0) {
              factors.push(i);
              num /= i;
          }
      }
      if (num > 1) {
          factors.push(num);
      }
      return factors;
  }
  
  // Example usage:
  const num = 36; // Change num to check for a different powerful number
  console.log(num + " is a powerful number:", isPowerfulNumber(num));
      `,
  },
  {
    name: "Calculate Exponential Function",
    description: `
  function exponentialFunction(base, exponent) {
      return Math.pow(base, exponent);
  }
  
  // Example usage:
  const base = 2; // Change base and exponent to calculate different exponential functions
  const exponent = 3;
  console.log(base + " raised to the power of " + exponent + ":", exponentialFunction(base, exponent));
      `,
  },
  {
    name: "Two Sum",
    description: `
  function twoSum(nums, target) {
      const numMap = new Map();
      for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];
          if (numMap.has(complement)) {
              return [numMap.get(complement), i];
          }
          numMap.set(nums[i], i);
      }
      return [];
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15]; // Change nums and target for different inputs
  const target = 9;
  console.log("Indices of the two numbers that add up to target:", twoSum(nums, target));
      `,
  },
  {
    name: "Add Two Numbers",
    description: `
  function addTwoNumbers(l1, l2) {
      let dummyHead = new ListNode(0);
      let p = l1, q = l2, curr = dummyHead;
      let carry = 0;
      while (p !== null || q !== null) {
          const x = p ? p.val : 0;
          const y = q ? q.val : 0;
          const sum = x + y + carry;
          carry = Math.floor(sum / 10);
          curr.next = new ListNode(sum % 10);
          curr = curr.next;
          if (p) p = p.next;
          if (q) q = q.next;
      }
      if (carry > 0) {
          curr.next = new ListNode(carry);
      }
      return dummyHead.next;
  }
  
  // Example usage:
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Change l1 and l2 for different inputs
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  console.log("Sum of two numbers represented by the linked lists:", addTwoNumbers(l1, l2));
      `,
  },
  {
    name: "Longest Substring Without Repeating Characters",
    description: `
  function lengthOfLongestSubstring(s) {
      const charMap = new Map();
      let maxLength = 0;
      let start = 0;
      for (let i = 0; i < s.length; i++) {
          const char = s[i];
          if (charMap.has(char) && charMap.get(char) >= start) {
              start = charMap.get(char) + 1;
          }
          charMap.set(char, i);
          maxLength = Math.max(maxLength, i - start + 1);
      }
      return maxLength;
  }
  
  // Example usage:
  const s = "abcabcbb"; // Change s for different input strings
  console.log("Length of the longest substring without repeating characters:", lengthOfLongestSubstring(s));
      `,
  },
  {
    name: "Median of Two Sorted Arrays",
    description: `
  function findMedianSortedArrays(nums1, nums2) {
      const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
      const length = mergedArray.length;
      if (length % 2 === 0) {
          const mid = length / 2;
          return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
      } else {
          return mergedArray[Math.floor(length / 2)];
      }
  }
  
  // Example usage:
  const nums1 = [1, 3];
  const nums2 = [2];
  console.log("Median of the two sorted arrays:", findMedianSortedArrays(nums1, nums2));
      `,
  },
  {
    name: "Longest Palindromic Substring",
    description: `
  function longestPalindrome(s) {
      let longest = '';
      for (let i = 0; i < s.length; i++) {
          for (let j = i + 1; j <= s.length; j++) {
              const substr = s.substring(i, j);
              if (isPalindrome(substr) && substr.length > longest.length) {
                  longest = substr;
              }
          }
      }
      return longest;
  }
  
  function isPalindrome(s) {
      return s === s.split('').reverse().join('');
  }
  
  // Example usage:
  const s = "babad"; // Change s for different input strings
  console.log("Longest palindromic substring:", longestPalindrome(s));
      `,
  },
  {
    name: "ZigZag Conversion",
    description: `
  function convert(s, numRows) {
      if (numRows === 1) return s;
      const rows = new Array(numRows).fill('');
      let direction = -1;
      let row = 0;
      for (let i = 0; i < s.length; i++) {
          rows[row] += s[i];
          if (row === 0 || row === numRows - 1) {
              direction *= -1;
          }
          row += direction;
      }
      return rows.join('');
  }
  
  // Example usage:
  const s = "PAYPALISHIRING"; // Change s and numRows for different inputs
  const numRows = 3;
  console.log("Zigzag conversion:", convert(s, numRows));
      `,
  },
  {
    name: "Reverse Integer",
    description: `
  function reverse(x) {
      let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
      if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
          return 0;
      }
      return reversed;
  }
  
  // Example usage:
  const x = 123; // Change x for different inputs
  console.log("Reversed integer:", reverse(x));
      `,
  },
  {
    name: "String to Integer (atoi)",
    description: `
  function myAtoi(s) {
      const num = parseInt(s, 10);
      if (isNaN(num)) return 0;
      const INT_MIN = -(2 ** 31);
      const INT_MAX = 2 ** 31 - 1;
      if (num < INT_MIN) return INT_MIN;
      if (num > INT_MAX) return INT_MAX;
      return num;
  }
  
  // Example usage:
  const s = "   -42"; // Change s for different inputs
  console.log("String to integer:", myAtoi(s));
      `,
  },
  {
    name: "Regular Expression Matching",
    description: `
  function isMatch(s, p) {
      const dp = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(false));
      dp[0][0] = true;
      for (let j = 1; j < dp[0].length; j++) {
          if (p[j - 1] === '*') {
              dp[0][j] = dp[0][j - 2];
          }
      }
      for (let i = 1; i < dp.length; i++) {
          for (let j = 1; j < dp[0].length; j++) {
              if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                  dp[i][j] = dp[i - 1][j - 1];
              } else if (p[j - 1] === '*') {
                  dp[i][j] = dp[i][j - 2];
                  if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                      dp[i][j] = dp[i][j] || dp[i - 1][j];
                  }
              }
          }
      }
      return dp[s.length][p.length];
  }
  
  // Example usage:
  const s = "aab"; // Change s and p for different inputs
  const p = "c*a*b";
  console.log("Regular expression matching:", isMatch(s, p));
      `,
  },
  {
    name: "Container With Most Water",
    description: `
  function maxArea(height) {
      let maxArea = 0;
      let left = 0, right = height.length - 1;
      while (left < right) {
          maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
          if (height[left] < height[right]) {
              left++;
          } else {
              right--;
          }
      }
      return maxArea;
  }
  
  // Example usage:
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // Change height for different inputs
  console.log("Maximum area:", maxArea(height));
      `,
  },
  {
    name: "Longest Common Prefix",
    description: `
  function longestCommonPrefix(strs) {
      if (strs.length === 0) return '';
      let prefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
          while (strs[i].indexOf(prefix) !== 0) {
              prefix = prefix.substring(0, prefix.length - 1);
              if (prefix === '') return '';
          }
      }
      return prefix;
  }
  
  // Example usage:
  const strs = ["flower", "flow", "flight"]; // Change strs for different inputs
  console.log("Longest common prefix:", longestCommonPrefix(strs));
      `,
  },
  {
    name: "Reverse Integer",
    description: `
    function reverseInteger(x) {
        const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
        return reversed >= Math.pow(-2, 31) && reversed <= Math.pow(2, 31) - 1 ? reversed : 0;
    }
    
    // Example usage:
    const x = 123; // Change x for different input integers
    console.log("Reversed integer:", reverseInteger(x));
        `,
  },
  {
    name: "Palindrome Number",
    description: `
    function isPalindrome(x) {
        if (x < 0) return false;
        const reversed = parseInt(x.toString().split('').reverse().join(''));
        return x === reversed;
    }
    
    // Example usage:
    const x = 121; // Change x for different input integers
    console.log("Is palindrome:", isPalindrome(x));
        `,
  },
  {
    name: "Roman to Integer",
    description: `
    function romanToInt(s) {
        const romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            const currentValue = romanValues[s[i]];
            const nextValue = romanValues[s[i + 1]];
            if (nextValue && currentValue < nextValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
        }
        return result;
    }
    
    // Example usage:
    const s = "III"; // Change s for different input strings
    console.log("Integer value of the Roman numeral:", romanToInt(s));
        `,
  },
  {
    name: "Valid Parentheses",
    description: `
    function isValid(s) {
        const stack = [];
        const pairs = { '(': ')', '{': '}', '[': ']' };
        for (let char of s) {
            if (pairs[char]) {
                stack.push(char);
            } else {
                const top = stack.pop();
                if (pairs[top] !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    
    // Example usage:
    const s = "()[]{}"; // Change s for different input strings
    console.log("Are the parentheses valid:", isValid(s));
        `,
  },
  {
    name: "Container With Most Water",
    description: `
    function maxArea(height) {
        let maxArea = 0;
        let left = 0, right = height.length - 1;
        while (left < right) {
            maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
    
    // Example usage:
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // Change height for different input arrays
    console.log("Maximum area of water:", maxArea(height));
        `,
  },
  {
    name: "Three Sum",
    description: `
    function threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
                let low = i + 1, high = nums.length - 1, sum = -nums[i];
                while (low < high) {
                    if (nums[low] + nums[high] === sum) {
                        result.push([nums[i], nums[low], nums[high]]);
                        while (low < high && nums[low] === nums[low + 1]) low++;
                        while (low < high && nums[high] === nums[high - 1]) high--;
                        low++;
                        high--;
                    } else if (nums[low] + nums[high] < sum) {
                        low++;
                    } else {
                        high--;
                    }
                }
            }
        }
        return result;
    }
    
    // Example usage:
    const nums = [-1, 0, 1, 2, -1, -4]; // Change nums for different input arrays
    console.log("Triplets that sum up to zero:", threeSum(nums));
        `,
  },
  {
    name: "Add Binary",
    description: `
    function addBinary(a, b) {
        let result = '';
        let carry = 0;
        let i = a.length - 1, j = b.length - 1;
        while (i >= 0 || j >= 0 || carry > 0) {
            const sum = (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0) + carry;
            result = (sum % 2) + result;
            carry = Math.floor(sum / 2);
        }
        return result;
    }
    
    // Example usage:
    const a = "11"; // Change a and b for different input binary strings
    const b = "1";
    console.log("Sum of two binary numbers:", addBinary(a, b));
        `,
  },
  {
    name: "Merge Two Sorted Lists",
    description: `
    function mergeTwoLists(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;
        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
    
    // Example usage:
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4))); // Change l1 and l2 for different inputs
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    console.log("Merged sorted linked list:", mergeTwoLists(l1, l2));
        `,
  },
  {
    name: "Subsets",
    description: `
      function subsets(nums) {
          const result = [[]];
          for (const num of nums) {
              const subsetsWithNum = [];
              for (const subset of result) {
                  subsetsWithNum.push([...subset, num]);
              }
              result.push(...subsetsWithNum);
          }
          return result;
      }
      
      // Example usage:
      const nums = [1, 2, 3]; // Change nums for different input arrays
      console.log("Subsets of the given array:", subsets(nums));
          `,
  },
  {
    name: "Word Search",
    description: `
      function exist(board, word) {
          const m = board.length, n = board[0].length;
          const dfs = (i, j, index) => {
              if (index === word.length) return true;
              if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) return false;
              const temp = board[i][j];
              board[i][j] = '*';
              const found = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) || dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1);
              board[i][j] = temp;
              return found;
          };
          for (let i = 0; i < m; i++) {
              for (let j = 0; j < n; j++) {
                  if (board[i][j] === word[0] && dfs(i, j, 0)) return true;
              }
          }
          return false;
      }
      
      // Example usage:
      const board = [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E']
      ]; // Change board and word for different inputs
      const word = "ABCCED";
      console.log("Does the word exist in the board:", exist(board, word));
          `,
  },
  {
    name: "Combination Sum",
    description: `
      function combinationSum(candidates, target) {
          const result = [];
          const backtrack = (start, target, path) => {
              if (target === 0) {
                  result.push([...path]);
                  return;
              }
              if (target < 0) return;
              for (let i = start; i < candidates.length; i++) {
                  path.push(candidates[i]);
                  backtrack(i, target - candidates[i], path);
                  path.pop();
              }
          };
          backtrack(0, target, []);
          return result;
      }
      
      // Example usage:
      const candidates = [2, 3, 6, 7]; // Change candidates and target for different inputs
      const target = 7;
      console.log("Combinations that sum up to target:", combinationSum(candidates, target));
          `,
  },
  {
    name: "Combination Sum II",
    description: `
      function combinationSum2(candidates, target) {
          const result = [];
          candidates.sort((a, b) => a - b);
          const backtrack = (start, target, path) => {
              if (target === 0) {
                  result.push([...path]);
                  return;
              }
              if (target < 0) return;
              for (let i = start; i < candidates.length; i++) {
                  if (i > start && candidates[i] === candidates[i - 1]) continue;
                  path.push(candidates[i]);
                  backtrack(i + 1, target - candidates[i], path);
                  path.pop();
              }
          };
          backtrack(0, target, []);
          return result;
      }
      
      // Example usage:
      const candidates = [10, 1, 2, 7, 6, 1, 5]; // Change candidates and target for different inputs
      const target = 8;
      console.log("Combinations that sum up to target (unique combinations):", combinationSum2(candidates, target));
          `,
  },
  {
    name: "Set Matrix Zeroes",
    description: `
function setZeroes(matrix) {
    const rows = new Set();
    const columns = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                columns.add(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rows.has(i) || columns.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}

// Example usage:
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]; // Change matrix for different inputs
setZeroes(matrix);
console.log("Matrix with zeroes set:", matrix);
    `,
  },
  {
    name: "Search in Rotated Sorted Array",
    description: `
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2]; // Change nums and target for different inputs
const target = 0;
console.log("Index of the target in the rotated sorted array:", search(nums, target));
    `,
  },
  {
    name: "Permutations",
    description: `
function permute(nums) {
    const result = [];
    backtrack(nums, []);
    return result;

    function backtrack(nums, path) {
        if (nums.length === 0) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            const newNums = nums.filter((_, index) => index !== i);
            path.push(nums[i]);
            backtrack(newNums, path);
            path.pop();
        }
    }
}

// Example usage:
const nums = [1, 2, 3]; // Change nums for different inputs
console.log("Permutations of the given array:", permute(nums));
    `,
  },
  {
    name: "Combination Sum",
    description: `
function combinationSum(candidates, target) {
    const result = [];
    backtrack(candidates, target, [], 0);
    return result;

    function backtrack(candidates, target, current, start) {
        if (target < 0) return;
        if (target === 0) {
            result.push([...current]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(candidates, target - candidates[i], current, i);
            current.pop();
        }
    }
}

// Example usage:
const candidates = [2, 3, 6, 7]; // Change candidates and target for different inputs
const target = 7;
console.log("Combination sum combinations:", combinationSum(candidates, target));
    `,
  },
  {
    name: "Next Permutation",
    description: `
function nextPermutation(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i + 1);
}

function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    `,
  },
  {
    name: "Minimum Cost Path Problem",
    description: `
        function minCostPath(cost) {
            let m = cost.length;
            let n = cost[0].length;
            let dp = Array.from({ length: m }, () => Array(n).fill(0));

            dp[0][0] = cost[0][0];

            for (let i = 1; i < m; i++)
                dp[i][0] = dp[i - 1][0] + cost[i][0];

            for (let j = 1; j < n; j++)
                dp[0][j] = dp[0][j - 1] + cost[0][j];

            for (let i = 1; i < m; i++) {
                for (let j = 1; j < n; j++) {
                    dp[i][j] = cost[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                }
            }
            return dp[m - 1][n - 1];
        }
    `,
  },
  {
    name: "Word Break Problem",
    description: `
        function wordBreak(s, wordDict) {
            let dp = new Array(s.length + 1).fill(false);
            dp[0] = true;

            for (let i = 1; i <= s.length; i++) {
                for (let j = 0; j < i; j++) {
                    if (dp[j] && wordDict.includes(s.slice(j, i))) {
                        dp[i] = true;
                        break;
                    }
                }
            }
            return dp[s.length];
        }
    `,
  },
  {
    name: "Merge Intervals",
    description: `
        function mergeIntervals(intervals) {
            intervals.sort((a, b) => a[0] - b[0]);
            let merged = [intervals[0]];
            for (let i = 1; i < intervals.length; i++) {
                let currentInterval = intervals[i];
                let lastMergedInterval = merged[merged.length - 1];
                if (currentInterval[0] <= lastMergedInterval[1]) {
                    lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
                } else {
                    merged.push(currentInterval);
                }
            }
            return merged;
        }
    `,
  },
  {
    name: "Count Inversions in an Array",
    description: `
        function countInversions(arr) {
            let count = 0;
            mergeSort(arr);
            return count;

            function mergeSort(arr) {
                if (arr.length <= 1) return arr;
                let mid = Math.floor(arr.length / 2);
                let left = arr.slice(0, mid);
                let right = arr.slice(mid);
                return merge(mergeSort(left), mergeSort(right));
            }

            function merge(left, right) {
                let result = [];
                let i = 0, j = 0;
                while (i < left.length && j < right.length) {
                    if (left[i] <= right[j]) {
                        result.push(left[i]);
                        i++;
                    } else {
                        result.push(right[j]);
                        count += left.length - i;
                        j++;
                    }
                }
                return result.concat(left.slice(i)).concat(right.slice(j));
            }
        }
    `,
  },
  {
    name: "Longest Common Substring",
    description: `
        function longestCommonSubstring(str1, str2) {
            let m = str1.length;
            let n = str2.length;
            let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
            let maxLength = 0;
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (str1[i - 1] === str2[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                        maxLength = Math.max(maxLength, dp[i][j]);
                    } else {
                        dp[i][j] = 0;
                    }
                }
            }
            return maxLength;
        }
    `,
  },
  {
    name: "Subset Sum Problem",
    description: `
        function subsetSum(arr, sum) {
            let n = arr.length;
            let dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(false));

            for (let i = 0; i <= n; i++)
                dp[i][0] = true;

            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= sum; j++) {
                    if (arr[i - 1] <= j) {
                        dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
                    } else {
                        dp[i][j] = dp[i - 1][j];
                    }
                }
            }
            return dp[n][sum];
        }
    `,
  },
  {
    name: "Longest Increasing Subsequence",
    description: `
        function longestIncreasingSubsequence(arr) {
            let dp = new Array(arr.length).fill(1);
            for (let i = 1; i < arr.length; i++) {
                for (let j = 0; j < i; j++) {
                    if (arr[i] > arr[j]) {
                        dp[i] = Math.max(dp[i], dp[j] + 1);
                    }
                }
            }
            return Math.max(...dp);
        }
    `,
  },
  {
    name: "Maximum Subarray Sum (Kadane's Algorithm)",
    description: `
        function maxSubArraySum(arr) {
            let maxEndingHere = arr[0];
            let maxSoFar = arr[0];
            for (let i = 1; i < arr.length; i++) {
                maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
                maxSoFar = Math.max(maxSoFar, maxEndingHere);
            }
            return maxSoFar;
        }
    `,
  },
  {
    name: "Rotate Array",
    description: `
        function rotateArray(arr, k) {
            k = k % arr.length;
            reverse(arr, 0, arr.length - 1);
            reverse(arr, 0, k - 1);
            reverse(arr, k, arr.length - 1);
        }

        function reverse(arr, start, end) {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
    `,
  },
  {
    name: "Find the Missing Number",
    description: `
        function findMissingNumber(arr) {
            let n = arr.length + 1;
            let total = (n * (n + 1)) / 2;
            let sum = arr.reduce((acc, curr) => acc + curr, 0);
            return total - sum;
        }
    `,
  },
  {
    name: "Reverse a String",
    description: `
        function reverseString(str) {
            return str.split('').reverse().join('');
        }
    `,
  },
  {
    name: "Binary Search",
    description: `
        function binarySearch(arr, target) {
            let left = 0, right = arr.length - 1;
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                if (arr[mid] === target) return mid;
                else if (arr[mid] < target) left = mid + 1;
                else right = mid - 1;
            }
            return -1;
        }
    `,
  },
  {
    name: "Find the Closest Pair from Two Sorted Arrays",
    description: `
        function closestPair(arr1, arr2, x) {
            let m = arr1.length;
            let n = arr2.length;
            let diff = Number.MAX_VALUE;
            let res_l, res_r;
            let l = 0, r = n - 1;
            while (l < m && r >= 0) {
                if (Math.abs(arr1[l] + arr2[r] - x) < diff) {
                    res_l = l;
                    res_r = r;
                    diff = Math.abs(arr1[l] + arr2[r] - x);
                }
                if (arr1[l] + arr2[r] > x) r--;
                else l++;
            }
            return [arr1[res_l], arr2[res_r]];
        }
    `,
  },
  {
    name: "Check for Balanced Parantheses",
    description: `
        function isBalanced(expression) {
            let stack = [];
            let map = {
                '(': ')',
                '[': ']',
                '{': '}'
            };
            for (let i = 0; i < expression.length; i++) {
                let char = expression[i];
                if (char === '(' || char === '[' || char === '{') {
                    stack.push(char);
                } else {
                    if (stack.length === 0) {
                        return false;
                    }
                    let top = stack.pop();
                    if (map[top] !== char) {
                        return false;
                    }
                }
            }
            return stack.length === 0;
        }
    `,
  },
  {
    name: "Find the Missing Number in a Sorted Array",
    description: `
        function missingNumber(arr) {
            let n = arr.length;
            let total = (n + 1) * (n + 2) / 2;
            for (let i = 0; i < n; i++) {
                total -= arr[i];
            }
            return total;
        }
    `,
  },
  {
    name: "Quick Sort",
    description: `
        function quickSort(arr, left = 0, right = arr.length - 1) {
            if (left >= right) return;
            let pivot = arr[Math.floor((left + right) / 2)];
            let index = partition(arr, left, right, pivot);
            quickSort(arr, left, index - 1);
            quickSort(arr, index, right);
        }

        function partition(arr, left, right, pivot) {
            while (left <= right) {
                while (arr[left] < pivot) left++;
                while (arr[right] > pivot) right--;
                if (left <= right) {
                    [arr[left], arr[right]] = [arr[right], arr[left]];
                    left++;
                    right--;
                }
            }
            return left;
        }
    `,
  },
  {
    name: "Merge Sort",
    description: `
        function mergeSort(arr) {
            if (arr.length <= 1) return arr;
            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);
            return merge(mergeSort(left), mergeSort(right));
        }

        function merge(left, right) {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }
            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        }
    `,
  },
  {
    name: "Bubble Sort",
    description: `
        function bubbleSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }
    `,
  },
  {
    name: "Insertion Sort",
    description: `
        function insertionSort(arr) {
            const n = arr.length;
            for (let i = 1; i < n; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            return arr;
        }
    `,
  },
  {
    name: "Selection Sort",
    description: `
        function selectionSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < n; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
            return arr;
        }
    `,
  },
];

module.exports = mockPrograms;
