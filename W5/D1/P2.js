//Array destructuring
const items = {
    item1: "Laptop",
    item2: "Server",
    item3: "CloudAPI"
};

for(const [item,itemName] of Object.entries(items)){
    console.log(`${item}:${itemName}`);
}