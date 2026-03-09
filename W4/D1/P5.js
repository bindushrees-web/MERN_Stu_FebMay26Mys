// Breakpoint 
// Inspect variable values
// View the call stack
// Step through code line by line
// Evaluate expressions in the console
// Watch how variables change during the execution
// To find logical errors
//Browserm

function calculateTotal(prices){
    let total = 0;
    for(let i = 0; i < prices.length; i++){
        let price = prices[i];
        debugger;
        total += price;
    }
    return total;
}

let cart = [100,200,2400,4000];
calculateTotal(cart);
console.log("Total:",calculateTotal(cart));