//TNRN
const TNSN=()=>{
    console.log("Take Noting Return Notting!");    
}
TNSN();
//TSRN
let num=5;
const TSRN=(num)=>{
    console.log(num); 
    console.log("Take Someting Return Notting!");   
}
TSRN(num);
//TSRS
let num1=15;
const TSRS=(num1)=>{
    console.log("Take Someting Return Someting!");
    return num1
}
let func=TSRS(num1);
console.log(func);
//TNRS
const TNRS=()=>{
    let num2=25;
    console.log("Take Notting Return Someting!");
    return num2;
}
let func1=TNRS();
console.log(func1);