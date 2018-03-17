// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

function solution(string) {
    return string.split("").map(word => {
      return word.charCodeAt() >= 65 && word.charCodeAt() <= 90 
            ?  ` ${word}` : word
    }).join("")  
  }


// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

// Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// Input will always be a positive integer.

// For example, start with 87:

// 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

// 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4

var palindromeChainLength = function(n, step = 0) {
  if(n.toString().split("").reverse().join("") == n){
      return step
  }

  return palindromeChainLength(parseInt(n.toString().split("").reverse().join("")) + n, step+1 );
  
};
  
// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"


function rot13(str) {
  return str.split("").map(char => {
    if((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 109)|| (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 77)){
      return String.fromCharCode(char.charCodeAt(0) +13) 
    } 
    if((char.charCodeAt(0) >= 110 && char.charCodeAt(0) <= 122)|| (char.charCodeAt(0) >= 78 && char.charCodeAt(0) <= 90)){
      return String.fromCharCode(char.charCodeAt(0) -13) 
    } 

    return char
  }).join("")
}

  