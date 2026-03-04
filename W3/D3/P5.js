// Basics of objects 

console.log("object examples")
const person={name:'abc',age:12,city:'mysore'};
console.log("Person:",person);
console.log("Name:",person.name);
console.log("Age:",person['age']);

// Add a new property
person.isStudent=false;
console.log("Person",person);

//Modify
person.age=31;

//delete
delete person.city;
console.log("Person",person)

//object constructor
const car = new Object();
car.make = "Benz";
car.model = "A4";
car.year = 2026;
console.log("Car:",car);