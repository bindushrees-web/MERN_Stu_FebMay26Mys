// Nested Object
const student = {
    firstName:"Swamy",
    lastName:"Gowda",
    scores:{
        kannada:85,
        math:80
    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstName + " "+this.lastName;
    },
    greet(){
        console.log("Hi, ",this.fullname());
    }
};
console.log(student.fullname());
console.log("Kannada:",student.scores.kannada);