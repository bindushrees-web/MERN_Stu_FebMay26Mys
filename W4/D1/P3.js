// Throw custom errors
function divide(a,b){
    if(b===0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}
try{
    console.log(divide(4,2));
    console.log(divide(4,0));
}
catch(err){
    console.log("Caught:",err.message);
}

function checkAge(age){
    if(age<18){
        throw new Error("Age must be 18 and above");
    }
    console.log("You can vote");
    return age;
}
try{
    console.log(checkAge(20));
    console.log(checkAge(5));
}
catch(err){
    console.log("Caught:",err.message);
}

//Create a custom error class to handle the error
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function createUser(name){
    if(!name){
        throw new ValidationError("Name is required"); 
    }
    console.log("Hi,"+name+"Welcome");
    return {name};
}
try{
    createUser("Bindu ");
    createUser();
}
catch (err){
    console.log(err.name+":"+err.message);
}