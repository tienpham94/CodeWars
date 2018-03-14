// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

function solution(string) {
    return string.split("").map(word => {
      return word.charCodeAt() >= 65 && word.charCodeAt() <= 90 
            ?  ` ${word}` : word
    }).join("")  
  }