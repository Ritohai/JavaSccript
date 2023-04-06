// Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên).
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).
let array = ["Nguyen Van A", "Nguyen Van B"];
let inputUser = "";
let keyboard = "";
do {
  let inputUser = prompt("Vui lòng nhập CRUD để thao tác: ");
  if (inputUser == "C") {
    let newTodo = prompt("Nhập thêm tên nhân viên: ");
    array.push(newTodo);
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      alert("Tên nhân viên: " + array[i]);
    }
  } else if (inputUser == "R") {
    for (let i = 0; i < array.length; i++) {
      alert(`Tên nhân viên. ${array[i]}`);
    }
  } else if (inputUser == "U") {
    let access = +prompt("Nhập vào vị trí muốn thay thế: ");
    let content = prompt("Nhập tên muốn thay thế");
    array[access] = content;
    for (let i = 0; i < array.length; i++) {
      alert(`Danh sách nhân viên cần thêm  ${array}`);
    }
  } else if (inputUser == "D") {
    alert("Yêu cần nhập đúng C/R/U/R");
  }
  keyboard = prompt("Bạn có muốn tiếp tục không?");
} while (keyboard != "no");
