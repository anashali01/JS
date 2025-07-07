let a = 3, b = 3, c = 3;
if (a == b && b == c){
    console.log("Equilateral Triangle");
}else if (a == b || b == c || a == c){
    console.log("Isosceles Triangle");
}else {
    console.log("Scalene Triangle");
}