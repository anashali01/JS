let sum = 0, i = 2;
do {
    let isPrime = true, j = 2;
    do {
        if (j <= Math.sqrt(i) && i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    } while (j <= Math.sqrt(i));
    if (isPrime) sum += i;
    i++;
} while (i <= 50);
console.log("Sum of primes 1-50:", sum);