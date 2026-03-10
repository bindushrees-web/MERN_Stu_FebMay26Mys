// InnerText & TextContent 
// innerText: visible rendered text only
// textContent: all text nodes regardless of CSS
// innerHTML: allows reading or writinig HTML markup
// inside an element

const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");
const reset = document.getElementById("reset");

document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});

document.getElementById("textContentBtn").addEventListener("click",function(){
    message.textContent = "Updated using textContentBtn";
});

document.getElementById("resetBtn").addEventListener("click",function(){
    message.innerText = "Original Message";
});

const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML = "<strong> Original </strong> Content";
});
