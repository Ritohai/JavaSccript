//bai1:
// let n = "";
// for (let i = 0; i < 200; i++) {
//   console.log((n = i));
//   if (n == 99) {
//     console.log("Hoàn thành");
//     break;
//   }
// }

//bai2
// let nhiet = +prompt('Nhập nhiệt độ vào: ');
// if(nhiet > 100) {
//     console.log('Giảm nhiệt độ.');
// } else if(nhiet < 20) {
//     console.log('Tăng nhiệt độ.');
// }  else {
//     console.log('Nhiệt độ OK.');
// }


//bai3
let number = prompt("Nhập số : ");
// 0, 1 ,1 ,2 ,3, 5, 8,.....
//Khai báo các biến
let number1 = 0;
let number2 = 1;
let nextNumber = 0;
for (let i = 1; i <= number; i++) {
  console.log(number1);
  nextNumber = number1 + number2;
  number1 = number2;
  number2 = nextNumber;
  // Nếu số nhập vào tư
  if (number == 0) {
    console.log(number1);
    continue;
  }
  if (number == 0) {
    console.log(number2);
    continue;
  }
}
