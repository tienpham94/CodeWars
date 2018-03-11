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
