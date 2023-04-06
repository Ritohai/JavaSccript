// Cho hai array:
// bookStore = [“Tôi thấy hoa vàng trên cỏ xanh”, “Đắc nhân tâm”]
// cart = []
// Viết một chương trình mô phỏng quá trình mua hàng của người dùng tại cửa hàng sách book store (Create/Read/Update/Delete).
let array = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
let newCart = [];
let keyboard = "";
do {
  let inputUser = prompt("Yêu cầu nhập C/R/U/D:");
  if (inputUser == "C") {
    let newTodo = prompt("Yêu cầu nhập thêm sách");
    array.push(newTodo);
    alert(`Loại sách là: ${array}`);
  } else if (inputUser == "R") {
    // let newTodo = prompt("Yêu cầu nhập thêm sách");
    // array.push(newTodo);
    for (let i = 0; i < array.length; i++) {
      alert(`${i + 1}. ${array[i]}`);
    }
  } else if (inputUser == "U") {
    let access = prompt("Nhập vị trí cần thay thế: ");
    let content = prompt("Nhập tên sách thay thế");
    array[access] = content;
    for (let i = 0; i < array.length; i++) {
      alert(`Danh sách mới ${array}`);
    }
  } else if (inputUser == "D") {
    let vitri = prompt("Nhập vị trí cần xóa:");
    let after = array.splice(vitri, 1);
    alert(`Sách còn lại là: ${after}`);
  } else {
    alert("Yêu cầu nhập đúng C/R/U/D.");
  }
  keyboard = prompt("Bạn muốn tiếp tục không");
} while (keyboard != "no");
