let clothes = ["Shirt", "Jeans", "Jacket", "T-shirt", "Sweater"];
let EachClothes = clothes.map((items) => {
    return items.toUpperCase();
})
console.log(EachClothes);

let furniture = ["Chair", "Table", "Sofa", "Bed", "Cupboard"];
let Eachfurniture = furniture.forEach((val) => {
    console.log(val);
})

let cars = ["Toyota", "Honda", "BMW", "Tata", "Hyundai"];
let filterCar = cars.filter((val) => {
    return val.includes("o");
})
console.log(filterCar);

let groceries = ["Rice", "Wheat", "Milk", "Eggs", "Vegetables"];
let someGroceries = groceries.some((val) => {
    return val == "kaju";
})
console.log(someGroceries);

let EveryGroceries = groceries.every((val) => {
    return val == "Rice";
})
console.log(EveryGroceries);
