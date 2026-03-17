//Writing custom callback functions

function processStudent(name,score,callback,a){
    console.log("Student name:",name);
    console.log("Score:",score);

    callback(name,score);
    a(name,score);
}
function showResult(name,score){
    if(score >= 70){
        console.log(name+"has passed.");
    }
    else{
        console.log(name+"has failed.");
    }
}
function showGrade(name,score){
    if(score >= 85){
        console.log("Grade: A+");
    }
    else if(score >= 75){
        console.log("Grade: A");
    }
    else if(score >= 70){
        console.log("Grade: B");
    }
    else{
        console.log("Grade: Fail");
    }
}
// processStudent("Guna ",90,showResult);
processStudent("Guna ",90,showResult,showGrade);