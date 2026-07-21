const student = {
    name: "Abishek",
    age: 20,
    politics: "TVK....da"
};

console.log(student); // Full object
console.log(student.name);
console.log(student.politics);

console.log(student["name"]);
console.log("-----------------------");
console.log(student["age"]);

// Add property
student.city = "Salem";
console.log(student);

// Delete property
delete student.city;
console.log(student);


// Object Method
const user = {
    name: "Abishek",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

user.greet();


// Array of Objects
const students = [
    {
        name: "Abishek",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
];

console.log(students[0].name);

const color =["red","yellow","green"];
const [first,second,third]=color;
console.log(first);
console.log(second);
console.log(third);


const student1 ={
    name:"abishek",
    age:20,
};
const{name,age}=student1;
console.log(name);
console.log(age);

const arr1=[1,2,3];
const arr2 =[4,5,6];
const combined =[...arr1,...arr2];
console.log(combined);


const updatedUser = { ...user, age: 20 }; 
console.log(updatedUser);