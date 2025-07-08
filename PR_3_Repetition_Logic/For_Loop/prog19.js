let sum = 0;
for (let i = 1; i <= 50; i++) {
 if (i % 4 === 0 && i % 8 !== 0) sum += i;
}
console.log("Divisible by 4 but not 8:", sum);
