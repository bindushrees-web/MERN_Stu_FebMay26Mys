// getElementById
console.log("Document Object:", document);
console.log("Page title", document.title);

// const heading = document.getElementById("mainHeading");
// console.log("Heading text",heading.textContent);

// getElementByClassName
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

// getElementByTagName
const spanTag = document.getElementsByTagName("span");
run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "purple";
    }

    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "pink";
    }
    //Query Selector:returns the first element matching a CSS selector
    const mainFirstHeading = document.querySelector(".mainHeading");
    mainFirstHeading.style.color = "red";
});

//Query Selector all:returns all the elements matching the selector
const tasks = document.querySelectorAll(".task");
// task.style.color = "green";
tasks.forEach(function(task){
    task.style.color = "green";
})

