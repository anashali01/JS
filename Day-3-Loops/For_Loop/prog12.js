let sum = 0;
for (let i = 1; i <= 50; i++) {
 let num = i;
 while (num > 0) {
 sum += num % 10;
 num = Math.floor(num / 10);
 }
}
console.log("Sum of all digits 1-50:", sum);