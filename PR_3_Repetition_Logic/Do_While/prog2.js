let sum = 0;
let i = 1;
do{
    if(i % 2 == 0) sum += i;
    i++;
}while(i <= 20);
console.log(`Sum of even number 1-20: ${sum}`);