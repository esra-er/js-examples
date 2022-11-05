
let myArr="";  // degisen degisken let kullan. sabit degisken kullanamyiz

counter=0;
for (let index = 100; index < 1000; index++) {
   
    if (index%5===0 && index%6===0) {
        
        counter++;
        if (counter%10===0) {
            myArr+= index +"\n";
        
        }
        else{
            myArr+= index +" ";
        }
    }
}
console.log(myArr)