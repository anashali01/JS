let name = "Alex Marshall";
let salary = 50000;
let HRA = salary * 0.1;
let DA = salary * 0.05;
let TA = salary * 0.07;
let PF = salary * 0.12;
let PT = salary * 0.02;
let exp = 5;
let bonus = 0;
let grossSalary = salary + HRA + DA + TA;
let netsalary = grossSalary - (PF + PT);

if(exp > 5 && salary > 50000){
    bonus = 0.1 * grossSalary;
}
else if(exp > 3 && salary > 30000){
    bonus = 0.05 * grossSalary;
}
else{
    bonus = 0;
}

console.log(`Salary slip of ${name}`);
console.log(`HRA: ${HRA}`);
console.log(`DA: ${DA}`);
console.log(`TA: ${TA}`);
console.log(`PF: ${PF}`);
console.log(`PT: ${PT}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Bonus: ${bonus}`);




