let sum = 0, i = 1;
do {
 if (i % 3 !== 0) sum += i;
 i++;
} while (i <= 30);
console.log("Sum not divisible by 3:", sum);