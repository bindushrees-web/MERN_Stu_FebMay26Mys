//Storing and retreiving JSON data

const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",function(){
    const user = {
        Id:101,
        Name:"Bindu",
        role:"Software developer",
        skills:["html","CSS","JS"]
    };
    localStorage.setItem("userProfile",JSON.stringify(user));
    jsonOutput.textContent = "user object saved as string to localStorage";
});

document.getElementById("readBtn").addEventListener("click",function(){
    try{
    const up = localStorage.getItem("userProfile");
    console.log(JSON.parse(up));
    console.log(up);
    jsonOutput.textContent = "userProfile" + up;
    }
    catch(err){
        jsonOutput.textContent = "JSON Parsing failed";
    }
});