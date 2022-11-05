let word="potatop"
let word2=word.split('').reverse().join('');

if (word===word2) {
    console.log(`this is a palindrom string`)
} else {
    console.log(`this is not a palindrom string`)
}


// // program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);




const myString="potataop";
let PalString=myString.split("");

console.log(PalString)

for (let index = 0; index < PalString.length; index++) {
   
 if (PalString[index]===PalString[PalString.length-1-index]) {
    let xxxx = PalString.join("")
    if (xxxx==myString) {
        
    console.log("true")
    break;
    }    
 }
 else {
    console.log("false")
 }
}