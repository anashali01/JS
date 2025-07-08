let sum = 0, i = 1;
do {
 if (i % 3 === 0 && i % 7 === 0) sum += i;
 i++;
} while (i <= 100);
console.log("Sum of numbers divisible by 3 and 7:", sum);