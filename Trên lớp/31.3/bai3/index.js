//bai1 Tạo một mảng gồm các số nguyên ngẫu nhiên từ 1 đến 100 và in ra các số nguyên chẵn trong mảng
// let array = [];
// let sum = 0;
// for (let index = 1; index <= 100; index++) {
//   sum = + [index];
//   if (sum % 2 == 0) {
//     console.log(sum);
//   }
// }

/*//bai2 Tạo một mảng gồm các chuỗi ngẫu nhiên và đảo ngược chuỗi đó 

// let array = [" 35 ", " que ", " toi "];
// let array1 = " ";
// for (let index = array.length - 1; index >= 0; index--) {
//   array1 += array[index];
// }
// console.log(array1);
 */

// bai3 Tạo một mảng gồm các số nguyên ngẫu nhiên và tìm các cặp số có tổng là 10

// let a = [];
// for (let i = 0; i < 15; i++) {
//   a[i] = Math.floor(Math.random() * 10) + 1;
// }
// console.log("mảng các số nguyên ngẫu nhiên là :", a);
// let i = 0;
// for (let j = 1; j < a.length; j++) {
//   if (a[i] + a[j] === 10) {
//     console.log("các cặp số có tổng bằng 10 là :");
//   }
// }
// for (i = 0; i < a.length; i++) {
//   for (let j = 0; j < a.length; j++) {
//     if ((a[i] == a[j]) == 5) {
//       continue;
//     }
//     if (a[i] + a[j] === 10) {
//       console.log("các cặp số có tổng bằng 10 trong dãy là :", a[i], a[j]);
//     }
//   }
// }

//bai4 Tạo một mảng gồm các số nguyên ngẫu nhiên và sắp xếp các số theo thứ tự tăng dần
// let a = [];
// for (let i = 0; i <= 15; i++) {
//   a[i] = Math.floor(Math.random() * 10) + 1;
// }
// console.log("mảng tạo ngẫu nhiên chưa sắp xếp là:", a);
// for (i = 0; i < a.length - 1; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       hd = a[i];
//       a[i] = a[j];
//       a[j] = hd;
//     }
//   }
// }
// console.log("mảng sau khi sắp xếp là", a);

//bai5 Tạo một mảng gồm các chuỗi ngẫu nhiên và tìm các chuỗi có độ dài lớn nhất và độ dài nhỏ nhất
let a = ["123", "1234", "12", "1234567", "12345", "123456"];
let min = a[0].length;
let mini = 0;
let maxi = 0;
let max = a[0].length;
for (let i = 1; i < a.length; i++) {
  if (min > a[i].length) {
    mini = i;
    mini = a[i].length;
  }
  if (max < a[i].length) {
    maxi = i;
    max = a[i].length;
  }
}
console.log("mảng gồm các chuỗi có độ dài khác nhau là:", a);
console.log(
  `mảng có chuỗi lài nhất gồm ${a[maxi].length} kí tự là: ${a[maxi]}`
);
console.log(
  `mảng có chuỗi lài nhất gồm ${a[mini].length} kí tự là: ${a[mini]}`
);
