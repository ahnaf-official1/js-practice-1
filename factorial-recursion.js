// Function using recursion
/*
Here every time n n return is calling the fuction by decreasing its value
as long it doesn't goes with the condition. 
*/

function factorial(n){
    if (n == 1){
        return 1;
    }
    return n * factorial (n-1);
}

const myFactorial = factorial(5);
console.log(myFactorial)