let sum = 0, i = 1;
do {
 if (i % 10 === 7) sum += i;
 i++;
} while (i <= 100);
console.log("Sum ending with 7:", sum);