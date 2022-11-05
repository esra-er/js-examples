const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

let number= Math.floor(Math.random()*ranks.length)
let random =Math.floor(Math.random()*suits.length)

console.log(`kartiniz: ${ranks[number]} of ${suits[random]}`)