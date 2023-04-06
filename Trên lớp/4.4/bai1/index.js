// Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả. (1đ)
let str = prompt("Nhập vào chuỗi: ");
let array = str.split("");
// console.log(array);
let arrayReverse = "";
for (let i = array.length - 1; i >= 0; i--) {
  arrayReverse += array[i];
  arrayReverse += "";
}
console.log(arrayReverse);
