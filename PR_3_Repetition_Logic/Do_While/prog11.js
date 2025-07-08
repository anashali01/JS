let i = 100, sum = 0;
do {
 if (i % 2 !== 0) sum += i;
 i++;
} while (i <= 150);
console.log("Sum of odd numbers 100-150:", sum);