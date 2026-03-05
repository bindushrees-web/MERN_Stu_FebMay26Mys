//Reduce method

let numbers = [2,4,6,8,10];
let sum = numbers.reduce((intermediateSum,current)=>intermediateSum+current,0);
console.log(sum);
let avg = numbers.reduce((intermediateSum,current)=>intermediateSum+current,0)/numbers.length;
console.log(avg);

//Reduce to object count by category
let items = ["book","pen","pencil","eraser","pen"];
let count = items.reduce((intermediateVal,item)=>{
    intermediateVal[item] = (intermediateVal[item] || 0) + 1;
    return intermediateVal;
},{});
console.log("Item count:",count);