let sum = 0;
for (let i = 1; i <= 100; i++) {
 if (i % 3 === 0 && i % 7 === 0) sum += i;
}
console.log("Sum of numbers divisible by 3 and 7:", sum);