let sum = 0, i = 1;
do {
 let fact = 1, j = 1;
 do {
   fact *= j;
   j++;
 } while (j <= i);
 sum += fact;
 i++;
} while (i <= 5);
console.log("Sum of factorials 1 to 5:", sum);