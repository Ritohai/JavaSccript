/*
Xử Lý Mảng với việc tính tổng: 

1. Tính Tổng các số chẵn mà nó lớn hơn số trước đó.

2. Tổng của các chữ số trong mảng

3.Tính Tổng các chữ số nhỏ nhất của số trong mảng
*/

//1.
// let array = [];
// for (let i = 0; i <= 10; i++) {
//   array[i] = Math.floor(Math.random() * 20);
// }
// console.log("mảng vừa được tạo ngẫu nhiên là:", array);
// let array1 = [];
// for (let index = 0; index < array.length; index++) {
//   if (array[index] % 2 == 0) {
//     array1 = array[index] + 2;
//     console.log(array1);
//     let sum;
//     for (let j = 0; j < array1.length; j++) {
//       sum += array1[j];
//       console.log(sum);
//   }
// }
// console.log(array1);
// if (array[index] % 2 != 0) {
//   array2 = array[index] + 1;
//   console.log(array2);
// }
// }

//bai2
// let a = [];
// for (let i = 0; i < 15; i++) {
//   a[i] = Math.floor(Math.random() * 10) + 1;
// }
// console.log("mảng các số nguyên ngẫu nhiên là :", a);
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }
// console.log(sum);

//bai3

// let a = [];
// for (let i = 0; i <= 10; i++) {
//   a[i] = Math.floor(Math.random() * 20);
// }
// console.log("mảng vừa được tạo ngẫu nhiên là:", a);
// let tong = 0;
// let tong2 = a[0];
// for (i = 1; i < a.length; i++) {
//   tong2 = tong2 + a[i];
//   if (a[i - 1] < a[i] && a[i] % 2 == 0) {
//     tong = tong + a[i];
//   }
// }
// console.log("Tổng các số chẵn lớn hơn số trước đó trong dãy là: ", tong);

// console.log("Tổng các chữ số trong mảng là: ", tong2);

// let min = a[0];
// let tongmin = 0;
// for (i = 0; i < a.length; i++) {
//   if (a[i] == min) {
//     tongmin = tongmin + a[i];
//   } else if (a[i] < min) {
//     tongmin = 0;
//     tongmin = a[i];
//     min = a[i];
//   }
// }
// console.log("tổng các phần tử nhỏ nhất trong mảng là:", tongmin);

// 1. Tính Tổng các số chẵn mà nó lớn hơn số trước đó.
// let array = [];
// for (let i = 0; i < 15; i++) {
//   array[i] = Math.floor(Math.random() * 20);
// }
// console.log(array);
// let array1 = [];
// for(let i = 0; i < array.length ; i++) {
//   if( array[i] )

//sắp xếp các số trong mảng
// let a = [2, 6, 3, 4, 2, 9];
// for (let i = 0; i < a.length - 1; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       let b = a[i];
//       a[i] = a[j];
//       a[j] = b;
//     }
//   }
// }
// console.log(a);
