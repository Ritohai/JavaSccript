// Khởi tạo một biến có tên là cars bao gồm các thuộc tính brand, price,
//  color và category có các giá trị được trình bày như ở bảng dưới đây.

let cars = {
  1: {
    name: "Tesla model 3",
    brand: "Tesla",
    price: 142800,
    color: "White",
    category: "SUV",
  },
  2: {
    name: "Audi A8",
    brand: "Audi",
    price: 184870,
    color: "Black",
    category: "SUV",
  },
  3: {
    name: "Vinfast lux 2.0",
    brand: "Vin",
    price: 21490,
    color: "Gray",
    category: "SUV",
  },
  4: {
    name: "Honda CRV",
    brand: "Honda",
    price: 84900,
    color: "Blue",
    category: "Hatchback",
  },
};
// console.log(cars);
// for (let key in cars) {
//   console.log(`Name: ${cars[key].name}`);
//   console.log(`Price : ${cars[key].price}`);
// }
// let n = prompt("Nhập vị trí muốn : ");
// if (cars[n]) {
//   console.log(cars[n]);
// } else {
//   alert("Nhập sai");
// }

// let gory = prompt("Nhập category: ");
// for (let key in cars) {
//   if (gory == cars[key].category) {
//     console.log(cars[key]);
//   }
// }

cars[1].providers = ["ZeroAuto", "VhStore"];
cars[2].providers = ["HAauto", "VhStore"];
cars[3].providers = "HAauto";
cars[4].providers = "HAauto";
console.log(cars);

let viders = prompt("Nhập providers vào: ");
for (let key in cars) {
  if (
    viders == cars[key].providers ||
    cars[key].providers.includes(viders) == true //includes:'true' nếu giá trị được tìm thấy, nếu không thì 'false'.
  ) {
    console.log(cars[key]);
  }
}
