// Function(hàm) : là tập hợp các câu lệch để thực hiện 1 chức năng nào đó
// Vai trò : giúp code dễ nhìn với người code, dễ quản lí và dễ bảo trì

// 1. Declation function
//1.1 Cú pháp của bạn
//1.2 Quy tắc đặt tên hàm:
//+ Sử dụng động từ để đặt tên cho hàm và bằng tiếng anh:
//+ Quy tắc cammel case: Nếu hàm có 2 tuwff trở lên thì viết thường từ đầu tiên và viết hoa chữ cái đầu của từ thứ 2

getData();
function getData() {
  console.log("Lấy dữ liệu1");
}
function getData() {
  console.log("Lấy dữ liệu2");
}
function getData() {
  console.log("Lấy dữ liệu3");
}
//Hàm chỉ đc thực thi khi nó được gọi
getData();
// Nếu đặt tên hàm trùng nhau
//Nếu đặt trùng tên nhiều hàm thì nó sẽ lấy hàm gần nhất.
//Lưu ý: Nó có thể được gọi trước khi khai báo

//2. Expresion function
//Cú pháp:
let updateDate = function () {
  console.log("Hàm update dữ liệu");
};

updateDate();
// Lưu ý : Expresion function không thể được gọi trước khi khai báo

//3 Tham số và đối số trong hàm
//3.1: Tham số: là những giá trị được truyền vào khi hàm được cải tạo
//3.2  : Đối số: là những hàm được truyền vào khi gọi hàm

// function sum(a, b) {
//   console.log(a + "" + b);
// }
// sum(2, 3);

//4. Từ khóa return trong hàm
// return trả về kết quả của hàm
//Hàm không có return thì trả về undifiend
// Khi gặp từ khóa return thì hàm sẽ bị dừng
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));
//5. Phạm vi của biến trong 1 function
// biến được khởi tạo trong functiont thì chỉ có phạm vi trong function đó

let lname = "FK";
function scop() {
  let fname = "FAKER";
  console.log(lname);
  return fname;
}
// console.log(fname);
console.log(scop());

let age = prompt("Nhập số tuổi: ");
function checkAge(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(checkAge);

//Nếu như số lượng 'tham số' lớn hơn số lượng 'đối số' thì

//Tính tổng các số trong khoảng 0 -> 10.
//Từ 3 đến 6 và 2 đến 7
function tinhTong(start, end) {
  let sum1 = 0;

  for (let i = start; i <= end; i++) {
    sum1 = sum1 + i;
  }
  return sum1;
}
console.log("Tổng các số từ 0 - 10: ", tinhTong(0, 10));
console.log("Tổng các số từ 3 - 6: ", tinhTong(3, 6));
console.log("Tổng các số từ 2 - 7: ", tinhTong(2, 7));
