let month = 2;
let year= 2015;

const months=["January","Feburary","March","April","May","June","July","August","September","October","November","December",]

if (year%400==0 || year%4==0 && year%100!=0) {

    if (month== 1 || month== 3 || month== 5 || month== 7 || month== 8 || month== 10 || month== 12) {
        console.log("31 days")
    } else if (month==2){
        console.log("29 days")
    } else{
        console.log("30 days")
    }
    
} else{
    if (month== 1 || month== 3 || month== 5 || month== 7 || month== 8 || month== 10 || month== 12) {
        console.log("31 days")
    } else if (month==2){
        console.log("28 days")
    } else{
        console.log("30 days")
    }
}
