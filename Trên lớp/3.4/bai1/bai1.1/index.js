//Viết một đoạn mã JS cho người dùng nhập vào một chuỗi số ngăn cách nhau bởi dấu phẩy.
// Tính tổng của các số đó và in ra ngoài màn hình console (hoặc alert)

let array = prompt("");
let array1 = array.split(",");
console.log(array1);
let sum = 0;
for (let i = 0; i < array1.length; i++) {
  sum = sum + Number(array1[i]) ;
}
console.log(sum);