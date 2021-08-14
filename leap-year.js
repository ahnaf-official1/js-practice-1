// Leap year check 

function leapYearCheck(year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2420;
const isThisLeapYear = leapYearCheck(myYear);
console.log(isThisLeapYear);



