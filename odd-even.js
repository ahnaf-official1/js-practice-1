// Even check

function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 1600;
const isMyNumberEven = isEven(myNumber);
console.log('Is my number even? Ans: ', isMyNumberEven);

// Odd check

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
} 

const isMyNumberOdd = isOdd(myNumber);
console.log('Is my number Odd? Ans: ', isMyNumberOdd);