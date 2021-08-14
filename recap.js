// moon up function
function isMoonUP(time){
    if(time >19 && time <= 5){
        return true;
    }
    return false;
}
var status = isMoonUP(21);
console.log(status);


