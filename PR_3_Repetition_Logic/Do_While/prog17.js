let sum = 0, i = 10;
do {
 if (i % 2 !== 0 && i % 3 !== 0) sum += i;
 i++;
} while (i <= 30);
console.log("Sum not divisible by 2 or 3:", sum);