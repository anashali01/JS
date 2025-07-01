let name = "Leo";
let rollNo = 69;
let sub1 = 85;
let sub2 = 90;
let sub3 = 1;
console.log(`Name: ${name}`);
console.log(`RollNo: ${rollNo}`);
console.log(`Subject 1 Marks : ${sub1}`);
console.log(`Subject 2 Marks : ${sub2}`);
console.log(`Subject 3 Marks : ${sub3}`);

if(sub1 >= 35 && sub2 >= 35 && sub3 >= 35){
    console.log(`${name} (Roll No: ${rollNo}) has passed the exam.`);
}else{
    console.log(`${name} (Roll No: ${rollNo}) has not passed the exam.`);
}