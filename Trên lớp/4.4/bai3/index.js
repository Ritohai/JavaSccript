// Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
// const numberList = [2, 3, 4, 6, 5, 2, 4, 4];
// let duplicate = [];
// let result = [];
// for (let i = 0; i < numberList.length; i++) {
//   for (let j = i + 1; j < numberList.length; j++) {
//     if (numberList[i] == numberList[j] && !duplicate.includes(numberList[j])) {
//       duplicate.push(numberList[i]);
//     }
//   }
// }
// for (let k = 0; k < numberList.length; k++) {
//   const isCheck = duplicate.indexOf(numberList[k]);
//   if (isCheck == -1) {
//     result.push(numberList[k]);
//   }
// }
// result.concat(duplicate);
// console.log(result.concat(duplicate));

//cách2
// let str = prompt("Nhập số vào: ");
// let num = str.split(" ");
// let numberList = new Set(num);
// console.log(numberList);

//cách3
// let array = [1, 2, 3, 5, 21, 4, 2, 5, 21];
// let result = [];
// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] == array[j]) {
//       array[j] = 0;
//     }
//   }
// }
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//   if (array[i] != 0) {
//     result.push(array[i]);
//   }
// }
// console.log(result);
