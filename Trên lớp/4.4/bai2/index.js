// Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
let str = prompt("Nhập vào chuỗi: ");
let array = str.split(" ");
for (let i = 0; i < array.length; i++) {
  let fname = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  console.log(fname);
}
