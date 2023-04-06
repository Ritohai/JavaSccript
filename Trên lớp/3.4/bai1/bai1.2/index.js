//Viết một đoạn mã JS cho người dùng nhập vào một chuỗi số được ngăn cách nhau bởi dấu phẩy.
// Tìm số nhỏ nhất và in số đó ra màn hình console (hoặc alert)
// let array = prompt("");
// let array1 = array.split(",");
// let min = Number(array1[0]);
// for (let i = 1; i < array1.length; i++) {
//   if (min > +array1[i]) {
//     min = +array1[i];
//   }
// }
// console.log(min);

// Tạo một mảng gồm ít nhất 5 số, sau đó cho người dùng nhập vào số cần tìm kiếm ở trong mảng.
//Thực hiện tìm kiếm và thông báo cho người dùng chỉ số (index) của phần tử đó nếu tìm thấy, nếu không cũng vẫn thông báo với người dùng.
// let a = [12, 20, -2, 0, 30];
// let n = +prompt("Nhập vào số n: ");
// let check = false;
// for (let i = 0; i < a.length; i++) {
//   if (n == a[i]) {
//     alert(n + "ở vị trí" + i);
//     check = true;
//   }
// }
// if (check) {
//   console.log("oke");
// } else {
//   alert(n + " không tồn tại trong chuỗi");
// }

// Mô phỏng ứng dụng todo list, tạo sẵn một mảng todoList có sẵn 2 phần tử
// const todoList = [“Go to bed at 11pm”, “Do homework at 8pm”];
// Sử dụng những kiến thức thao tác với mảng (C/R/U/D), hỏi người dùng command mà người dùng muốn nhập vào thông qua 4 chữ cái C/R/U/D.
/**  Cách1
// const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// let a = prompt("Nhập todo mới: ");
// todoList.push(a);
// for (let i = 0; i < todoList.length; i++) {
//   let str = i + 1 + "." + todoList[i];
//   console.log(str);
// }
// let b = prompt("Nhập vào vị trí cần thay thế: ");
// let c = prompt("Nhập nội dung thay thế: ");
// todoList[+b] = c;
// for (let i = 0; i < todoList.length; i++) {
//   let str = i + 1 + "." + todoList[i];
//   console.log(str);
// }
// let del = +prompt("Nhập vào vị trí cần thay thế: ");
// todoList.splice(del, 1);
// console.log(todoList);
 */
// Cách2;
// const todoList = ["Go to bed", "Do homework"];
// let Q =[];
// do {
//   let inputUser = prompt("vui long nhap vao CRUD de chay chuong trinh: ");
//   if (inputUser == "C") {
//     let newTodo = prompt("Nhap viec lamn cua ban: ");
//     todoList.push(newTodo);
//     for (let i = 0; i < todoList.length; i++) {
//       alert(`Viec lam: ${todoList[i]}`);
//       //   alert(`Viec lam: ${todoList}`);
//     }
//   } else if (inputUser == "R") {
//     for (let i = 0; i < todoList.length; i++) {
//       alert(`Viec lam : ${todoList[i]}`);
//     }
//   } else if (inputUser == "U") {
//     let access = parseInt(prompt("ban hay nhap vao vi tri muon ") - 1);
//     let content = prompt("ban hay nhap vao noi dung muon update");
//     todoList[access] = content;
//     for (let i = 0; i < todoList.length; i++) {
//       alert(`ds viec lam sau khi ban update la:${todoList}`);
//     }
//   } else if (inputUser == "D") {
//     let del = parseInt(prompt("ban hay nhap vao vi tri muon xoa"));
//     alert(todoList.splice(del, 1));
//   } else {
//     alert("Nhap dung CRUD");
//   }
// } while (keyboard != "Q");



//Mô phỏng quá trình mua hàng của khách tại một cửa hàng bánh bakery.
// Tạo sẵn một mảng bakery gồm các phần tử sau
// const bakery = [“chocolate”, “marshmallow”, “cookies”, “chips”];
// Tạo sẵn một mảng cart rỗng tương ứng với giỏ hàng của khách lúc mới đến cửa hàng chưa mua gì
// const cart = [  ];
// const bakery = ["chocolate", "marshmallow", "cookies", "chips"];
// for (let i = 0; i < bakery.length; i++) {
//   var str = i + 1 + ". " + bakery[i];
//   console.log(str);
// }
// let check = false;
// let str1 = prompt("Nhập vào sản phẩm muốn mua: ");
// for (let i = 0; i < bakery.length; i++) {
//   if (bakery[i] == str1) {
//     console.log("CÓ");
//     check = true;
//     {
//     }
//   }
// }
// if (check) {
// } else {
//   console.log("We don't have that item");
// }

//bai : Viết một đoạn script cho phép người dùng nhập vào 1 dãy tên ngăn cách nhau bởi dấu phẩy.
// Tạo một mảng mới gồm các phần tử con trong mảng được bọc bởi dấu <>. Sau đó sử dụng alert in ra chuỗi giống như demo bên dưới.
// let array = prompt("Nhập vào 1 dãy tên ngăn cách nhau bởi dấu phẩy: ");
// let array1 = array.split(",");
// console.log(array1);
// let array2 = array1.map(a => "<" + a + ">");
// console.log(array2);
// alert(array1 + " => " + array2);

// Viết một đoạn script cho người dùng nhập vào một dãy số ngăn cách nhau bởi dấu phẩy.
// Tạo một mảng mới chỉ chứa những phần tử lẻ có trong dãy số đó. Sau đó sử dụng câu lệnh alert để biểu diễn chuỗi giống trong demo bên dưới
// let n = prompt("Nhập vào dãy số: ");
// let array = n.split(",");
// console.log(array);
// let array1 = [];
// for (let i = 0; i < array.length; i++) {

//   if (Number(array[i] % 2 != 0)) {
//     alert(array[i]);
//   }
// }

// Cho mảng số tự nhiên bất kỳ
// const numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
// Tìm số lớn nhất có ở trong mảng và in ra màn hình console
// Tìm số bé nhất có ở trong mảng và in ra màn hình console
// Tính tổng toàn bộ phần tử có ở trong mảng và in ra màn hình console
// Tính tích toàn bộ phần tử có ở trong mảng và in ra màn hình console
// Tính trung bình cộng toàn bộ phần tử có trong mảng và in ra màn hình console
// In ra toàn bộ số có ở trong mảng theo chiều thuận và nghịch
// Sắp xếp toàn bộ các phần tử trong mảng theo thứ tự tăng dần (Google search “Array sort in JS”)
// const numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
// let box;
// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       box = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = box;
//     }
//   }
//   console.log(numbers);
// }
// // console.log(numbers.pop());
// // console.log(numbers.shift());
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);
// let core = 1;
// for (let i = 0; i < numbers.length; i++) {
//   core = core * numbers[i];
// }
// console.log(core);
// let tb = sum / 2;
// console.log(tb);
// let arrReverse;
// for (let i = numbers.length - 1; i >= 0; i--) {
//   arrReverse += numbers[i];
//   arrReverse += "";
// }
// console.log(arrReverse);


//Viết một đoạn mã JS cho người dùng nhập vào một chuỗi bất kỳ. In ra chuỗi đảo ngược của chuỗi người dùng nhập vào
// let array = prompt("Nhap vao chuoi bat ki: ");
// let array1 = array.split(" ");
// console.log(array1);
// let arrayReverse = "";
// for (let i = array1.length - 1; i >= 0; i--) {
//   arrayReverse += array1[i];
//   arrayReverse += ",";
// }
// console.log(arrayReverse);


// Viết một đoạn mã JS cho người dùng nhập vào một chuỗi bất kỳ.
// In ra chuỗi viết hoa toàn bộ ký tự đầu tiên của từng từ trong chuỗi đó.
// let n = prompt("Nhập vào 1 chuỗi: ");
// let e = n.split(" ");
// for (let i = 0; i < e.length; i++) {
//   let name = e[i].charAt(0).toUpperCase() + e[i].slice(1);
//   console.log(name);
// }


//Viết một đoạn mã JS cho người dùng nhập vào một chuỗi bất kỳ.
// Tìm và in ra màn hình console từ có độ dài lớn nhất trong chuỗi đó.
// let m = prompt("Nhập vào 1 chuỗi: ");
// let word = m.split(" ");
// console.log(m);
// let maxLen = 0;
// for (let i = 1; i < word.length; i++) {
//   if (word[i].length > maxLen) {
//     maxLen = word[i].length;
//   }
// }
// console.log(maxLen);


//Cho người dùng nhập vào một chuỗi số có 3 chữ số bất kỳ (100 — 999). 
// Viết chương trình đọc số này và in ra màn hình console (hoặc alert).


//Mô phỏng quá trình mua hàng của khách tại một cửa hàng bánh bakery.
// Tạo sẵn một mảng bakery gồm các phần tử sau
// const bakery = [“chocolate”, “marshmallow”, “cookies”, “chips”];
// Tạo sẵn một mảng cart rỗng tương ứng với giỏ hàng của khách lúc mới đến cửa hàng chưa mua gì
const bakery = ["chocolate", "marshmallow", "cookies", "chips"];
const cart = [];
const newCart = [
  ["chocolate", 0],
  ["marshmallow", 0],
  ["cookies", 0],
  ["chips", 0],
];

//Bước 1:
// In ra toàn bộ sản phẩm có trong bakery theo dạng
// 1. chocolate
// 2. marshmallow
// …
while (confirm) {
  for (let i = 0; i < bakery.length; i++) {
    console.log(`${i + 1}. ${bakery[i]}`);
  }

  // Bước 2:
  // Cho người dùng nhập vào sản phẩm muốn mua thông qua tên sản phẩm

  let add = prompt("ban muon mua gi? nhap vao di");

  let findIndex = -1;
  for (let i = 0; i < bakery.length; i++) {
    if (add === bakery[i]) {
      findIndex = i;
    }
  }

  let checkCart = -1;
  if (findIndex == -1) {
    alert("san pham deo co may oi");
  } else {
    for (let i = 0; i < newCart.length; i++) {
      console.log(`${i + 1}. ${newCart[i]}`);
      if (add == newCart[i][0]) {
        checkCart = i;
      }
    }
  }

  if (checkCart != -1) {
    newCart[checkCart][1] = newCart[checkCart][1] + 1;
    for (let i = 0; i < newCart.length; i++) {
      console.log(`${i + 1}. ${newCart[i]}`);
    }
  }

  let confirm = prompt(
    "BAN CO MUON MUA HANG TIEP KHONG SAY NO VA YES!!"
  ).toUpperCase();

  if (confirm == "NO") {
    alert("Goodbye may nho tra tien mien thieu");
    break;
  }
}


//xóa số trùng nhau
const numberList = [2, 3, 4, 6, 5, 2, 4, 4];

//thay la co nhung phan tu trung nhau la: 2, 4

let duplicate = [];
let result = [];

for (let i = 0; i < numberList.length; i++) {
  for (let j = i + 1; j < numberList.length; j++) {
    if (numberList[i] == numberList[j] && !duplicate.includes(numberList[j])) {
      duplicate.push(numberList[i]);
    }
  }
}

for (let k = 0; k < numberList.length; k++) {
  const isCheck = duplicate.indexOf(numberList[k]);
  if (isCheck == -1) {
    result.push(numberList[k]);
  }
}
console.log("mang result", result);