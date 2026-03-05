// Filter method
let marks = [75,67,81,78,95];
let passed = marks.filter(mark => mark >=70);

console.log(marks);
console.log(passed);

let student=[
    {name:"nisarga",marks:75},
    {name:"lakshmi",marks:67},
    {name:"ajith",marks:81},
    {name:"anju",marks:48},
    {name:"pinki",marks:95},
];
let passedStudents = student.filter(student =>student.marks>70);
console.log("name:",passedStudents);
let qualifiedStudntsName = student.map(student =>student.name);
console.log("name:",qualifiedStudntsName);