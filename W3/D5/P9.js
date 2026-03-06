//Advanced Event Pattern
const  onceBtn = document.getElementById("onceBtn");

//Limiting listener to once only for event 
onceBtn.addEventListener("click",function(){
    console.log("This click listener works only once.");
},{once:true});

document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLowerCase()==="s"){
        event.preventDefault();
        console.log("Custom ctrl+s shortcut triggered");
    }
});
