let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};
console.log(car);

for(let key in car){
    console.log(key);
}
for(let val in car){
    console.log(car[val]);
}