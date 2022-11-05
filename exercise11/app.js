
const arr= [];
for (let i = 0; i < 20; i++) {
    let number = Math.floor(Math.random()*100);
    if (number%2==1 && !arr.includes(number)){
        arr.push(number)            
        }
        else{
            i-- //20 elemanli olmasini saglamak icin index degerini dusurup yeniden sayi aliyoruz
        }
    }
    console.log(arr)