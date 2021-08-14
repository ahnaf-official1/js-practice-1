// inch to feet
function inchTofeet(inches){
    var feet = inches/ 12;
    return feet;
}

var myInches = 144;
var feet = inchTofeet(myInches);
console.log(feet);

var abbuInches = 312;
var feet = inchTofeet(abbuInches);
console.log(feet);

var ammuInches = 354;
var feet = inchTofeet(ammuInches);
console.log(feet);

var daduInches = 232;
var feet = inchTofeet(daduInches);
console.log(feet);

var naniInches = 232;
var feet = inchTofeet(naniInches);
console.log(feet);



// nautical mile to mile converter

function nmiletomile(nmiles){
    var miles = nmiles * 1.15078;
    return miles;
}

var totalNmiles = 87;  // Enter your value
var miles = nmiletomile(totalNmiles);
console.log(miles);