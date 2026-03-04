// JSON Parse and Stringify

//JSON Stringify
const employee ={
    id:101,
    name:"Rahul Gowda",
    dept:"CSE",
    isActive:true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

//JSON Parsing
const ParsedObject = JSON.parse(jsonString);
console.log(ParsedObject);