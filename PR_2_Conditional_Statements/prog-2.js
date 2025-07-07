let name = "Leo";
let rollNo = 69;
let sub1 = 85;
let sub2 = 90;
let sub3 = 10;
let totalMarks = sub1 + sub2 + sub3;
let averageMarks = totalMarks / 3;
console.log(`Name: ${name}`);
console.log(`RollNo: ${rollNo}`);
console.log(`Subject 1 Marks : ${sub1}`);
console.log(`Subject 2 Marks : ${sub2}`);
console.log(`Subject 3 Marks : ${sub3}`);

if(averageMarks >= 90){
    console.log(`${name} (Roll No: ${rollNo}) has achieved an A+ grade.`);  
}else if(averageMarks >= 80){
    console.log(`${name} (Roll No: ${rollNo}) has achieved an A grade.`);
}else if(averageMarks >= 70){
    console.log(`${name} (Roll No: ${rollNo}) has achieved an B+ grade.`);
}else if(averageMarks >= 60){
    console.log(`${name} (Roll No: ${rollNo}) has achieved an B grade.`);
}else if(averageMarks >= 50){
    console.log(`${name} (Roll No: ${rollNo}) has achieved an C grade.`);
}else{
    console.log(`${name} (Roll No: ${rollNo}) has achieved an F grade.`);
}