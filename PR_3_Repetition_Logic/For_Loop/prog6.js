let num = 12345, sum = 0;
while (num > 0) {
 sum += num % 10;
 num = Math.floor(num / 10);
}
console.log("Sum of digits:", sum);