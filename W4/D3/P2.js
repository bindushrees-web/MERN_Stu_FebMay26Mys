//saving and reading the local storage

const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("userName","Bindu");
    localStorage.setItem("loggedIn","true");
    console.log("Saved theme: ",themeInput.value);
    output.textContent = "Successfully stored to local Storage";
    output.style.color = "green";
});

document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    output.textContent = "Theme is: " + theme;
    output.style.color = "green";
});

document.getElementById("removeBtn").addEventListener("click",function(){
    localStorage.removeItem("loggedIn");
    output.textContent = "Removed 'loggedIn' ";
    output.style.color = "green";
});

document.getElementById("clearBtn").addEventListener("click",function(){
    localStorage.clear();
    output.textContent = "Deleted localStorage";
    output.style.color = "red";
});