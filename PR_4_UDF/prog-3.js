function isPrime(num){
    let i = 1;
    let count = 0;
    if (num <= 1) return false;
    while (i <= num) {
        if (num % i === 0) {
            count++;
        }
        i++;
    }
    if (count == 2) return true;
    return false;
}
let num = 7;
if(isPrime(num)) console.log(`Number ${num} is Prime Number !`);
else console.log(`Number ${num} is not Prime Number !`);

