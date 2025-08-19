class Person {
    constructor(name , age ) {
        console.log(`First Constructor !`);
        this.name = name;
        this.age = age;
    };
    eat(){
        console.log(`Person Is Eating Right Now.`);
    }
    walk(){
        console.log(`Person Is Walking Right Now.`);
    }
};
class Student extends Person{
    constructor(name , age , std){
        super(name , age);
        console.log(`Second Constructor !`);
        this.std = std;
    }
};

let p1 = new Student('Anash' , 21 , 8);
console.log(p1);
