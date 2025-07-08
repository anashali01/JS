let sum = 0 , i = 1;
do{
    if(i % 5 === 0) sum += i;
    i++;
}while(i <= 50);
console.log("Sum of multiples of 5 (1-50):", sum);