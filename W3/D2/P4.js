// Conditional Statements
let age = 17;
if(age < 15){
    console.log("Child");
}
else if(age < 18){
    console.log("Teenager");
}
else{
    console.log("Adult");
}

// Switch Statements
console.log("Switch Statements");
let day = 'C'; // day can be charecter, number, String
switch(day) {
    case 22:
        console.log("Start of the week");
        break;
    case 'C':
        console.log("Mid of the week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    default:
        console.log("Some day in the week");
        break;
}

// Type Conversion
let n = Number("ABC");
console.log("n: ",n,"Type of n:",typeof n,"isNaN",isNaN(n));