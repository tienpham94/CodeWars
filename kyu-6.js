// Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
//
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
// You can assume that you will only get positive integers as inputs.


function divisors(integer) {
  let result_arr = [];

  for(let i=2; i < integer; i++){
    if(integer%i === 0){
      result_arr.push(i)
    }
  }

  if(result_arr.length){
    return result_arr
  }
  return `${integer} is prime`
};

// Your goal in this kata is to implement an difference function, which subtracts one list from another.
//
// It should remove all values from list a, which are present in list b.
//
// array_diff([1,2],[1]) == [2]
//
// If a value is present in b, all of its occurrences must be removed from the other:
//
// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  return a.filter(num => b.indexOf(num) == -1)
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//
// Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(word){
  //TODO Have fun :)
  const words = word.split(" ");
  for(let i=0; i< words.length; i++) {
    if(words[i].length >= 5){
      words[i] = words[i].split("").reverse().join("");
    }
  }

  return words.join(" ")

}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


function findOutlier(integers){
  //your code here
  return integers.filter(int => int%2 === 0).length === 1
    ?
    integers.filter(int => int%2 === 0)[0]
    :
    integers.filter(int => int%2 !== 0)[0]
}

// Complete the solution so that it reverses all of the words within the string passed in.
//
// Example:
//
// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}


// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
  return string.split(" ")
          .map(word => word.split("").map((word, ind) => ind%2 == 0 ? word.toUpperCase() : word).join(""))
          . join(" ")
}

// Return the count of characters in the given string.

// For example, for the string 'aba' the result should be: {'a': 2, 'b': 1}

// What if the string is empty ? Then the result should be empty as well: { }

// Note for C#: Use a Dictionary<char, int> for this kata!

function count (string) {  
    // The function code should be here
    const obj = {}
    if(!string){
      return obj
    }
    string.split("").map((letter) => {
      obj[letter] ? obj[letter] = obj[letter] + 1 : obj[letter] = 1
      
    })
    return obj
  }
  
  console.log(count("aba"))
  
  