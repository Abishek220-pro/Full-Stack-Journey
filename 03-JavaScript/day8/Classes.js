class Student{
    constructor(){
        console.log("ima student of the mec");
    }
}
    const student1 = new Student();

class Student2{
    constructor(name,age,collegename){
        this.name = name;
        this.age=age;
        this.collegename=collegename;
    }
}
const Student3 = new Student2("Abishek",20,"MEC");
console.log(Student3.age);
console.log(Student3.collegename);



class place{
    constructor(name,id,year){
        this.name=name;
        this.id=id;
        this.year=year;
    }
}
const place1 = new place("ramash",2332,2026);
console.log(place1.name);
console.log(place1.year);
console.log(place1.id);