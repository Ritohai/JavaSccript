/**
// Cách khai báo mảng
//Cách :
let array1 = ["number", 0321, false];
console.log('array1 ===> ',array1);
//Lấy ra phần tử đâu tiên trong mảng
console.log('Phần tử đầu tiên của mảng: ',array1[0]);
//Lấy ra độ dài của mảng: length
console.log('Độ dài của mảng : ', array1.length);

//Cách 2:
let array2 = new Array("number", 21);
console.log("array2: " + array2);
//Cách 3:
let array3 = [];
array3[0] = "ki";
console.log("array3 ===> " + array3);
 */
/**
let array1 = [2, 3, 6, 9, 2];
// truy cập phần tử mảng, tên mảng[index]
// In ra giá trị phần tử có chỉ số là 2
console.log(("Phần  tử có chỉ số là 2: ", array1[3]));
//Duyệt mảng ---> VÒng lặp
//In ra các phần tử của mảng
console.log("Độ dài của mảng --->", array1.length);
console.log("Các phần tử trong mảng : ");
for (let index = 0; index < array1.length; index++) {
  console.log(array1[index]);
}
//In ra các phần tử của mảng từ phần tử cuối
console.log("Các phần tử của mảng từ phần tử cuối: ");
for (let index = array1.length - 1; index >= 0; index--) {
  console.log(array1[index]);
}
//Khai báo mảng và khởi tạo giá trị cho mảng 5 phần tử
//và in ra các phần tử là số chẵn trong mảng
//Khai báo mảng và khởi tạo
let a = [3, 4, 65, 7, 10];
//In ra các phần tử là số chẵn trong mảng
for (let index = 0; index < a.length; index++) {
  //a[index] là chẵn
  if (a[index] % 2 == 0) {
    console.log(a[index]);
  }
}

// Phương thức split : tách chuỗi thành các phần tử của mảng dựa vào đối số của nó
let name = "ShowMaker";
console.log(name.split(""));

// Phương thức push() để thêm phần tử vào cuối hàng
// Dựa theo nguyên lý của ngăn xếp (stack) - vào trước ra sau
let oldArray = [1, 2, 3, 4];
let newArray = oldArray.push("5"); //thêm phần tử 5 vào cuối mảng
console.log("Mảng của: ", oldArray); //Trả về các phần tử trong mảng
console.log("Mảng mới: ", newArray); //Trả về phần tử được thêm vào mảng

//Phương thức dùng để xóa phần tử ở cuối mảng
let newArray1 = oldArray.pop();
console.log("Mảng sau khi sử dụng pop() ", newArray1); //Trả về phần tử được xóa
console.log("Mảng hiện tại: ", oldArray); // Mảng mới
//Nếu xóa quá số phần tử của mảng thì sẽ trả về undifined


//Phương thức unshift sử dụng để thêm phần tử vào đầu mảng
let newArray2 = oldArray.unshift(6);
console.log('Giá trị trả về sau khi dùng unshift: ',newArray2);
//Trả về độ dài của mảng sau khi được thêm
console.log('Các phần tử hiện tại của mảng: ', oldArray);


//Phương thức shift sử dụng để xóa phần tử vào đầu mảng
let newArray2 = oldArray.shift(6);
console.log('Giá trị trả về sau khi dùng shift: ',newArray2);
//Trả về độ dài của mảng sau khi được thêm
console.log('Các phần tử hiện tại của mảng: ', oldArray);
// Các phương thức có sẵn trong javascript
 */

let listNumber = [2, 4, 6, 7];

let listNumber2 = "Đây là array";

console.log("listNumber có phải array không: ", Array.isArray(listNumber));
console.log("listNumber2 có phải array không: ", Array.isArray(listNumber2));

//Array.from()
console.log(Array.from("Faker war Chovy"));

//
let array = [2, 5, 7, 9, 8];
//Kiểm tra trong mảng tồn tại số 8 không

//Method splice dùng để thêm, xóa, phần tử :
let array1 = [3, 3, 54, 6, 78, 89];
array1.splice(2, 2, 23, 11, 36, 41);
console.log(array1);

//map : DÙng để biến đổi mảng
const intList = [3, 5, 7, 8, 4, 6];
//let khai báo thì có thể gán lại
//const kiểu hằng số vì vậy không thể gán lại
let mapList = intList.map((element) => {
  return element * 2;
});
console.log(mapList);
