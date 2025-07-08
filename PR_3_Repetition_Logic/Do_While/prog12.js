let sum = 0, i = 1;
do {
 let num = i;
 do {
   sum += num % 10;
   num = Math.floor(num / 10);
 } while (num > 0);
 i++;
} while (i <= 50);
console.log("Sum of all digits 1-50:", sum);