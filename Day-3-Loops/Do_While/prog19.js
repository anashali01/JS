let sum = 0, i = 1;
do {
 if (i % 4 === 0 && i % 8 !== 0) sum += i;
 i++;
} while (i <= 50);
console.log("Divisible by 4 but not 8:", sum);