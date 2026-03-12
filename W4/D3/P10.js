//async fetch group using slice

const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");

asyncFetchBtn.addEventListener("click",async function(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error("HTTP error: " + response.status);
        const users = await response.json();
        const firstThree = users.slice(0,2);
        output.textContent = JSON.stringify(firstThree,null,2);
    } 
    catch(error){
        output.textContent = "Error: " + error.message;
    }
});