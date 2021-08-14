// Factorial using while loop 

function getFactorial (number){
    let factorial =1;
    let i =1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(7);
console.log(myFactorial);

// Factorial by decrementing loop

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while (i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);