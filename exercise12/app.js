let myFighters = ["E.Honda", "Ryu", "Ken", "Chun-Li", "M.Bison", "Guile", "Sakura", "Blanka"];

let myFighters2= myFighters.shift(0);
let myFighters3= myFighters.unshift("Dhalsim", "Sagat");

for (let index = 0; index < myFighters.length; index++) {
    myFighters[index]= myFighters[index]+`(${index})`
}


console.log(myFighters.join(`-`))