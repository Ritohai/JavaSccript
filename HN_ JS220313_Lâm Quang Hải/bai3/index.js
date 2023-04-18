let month = +prompt("Nhập vào tháng: ");
let years = +prompt("Nhập vào năm: ");
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 12:
    console.log(`Thang ${month} nam ${years} co 31 ngay`);
    break;
  case 4:
  case 6:
  case 9:
  case 10:
  case 11:
    console.log(`Thang ${month} nam ${years} co 30 ngay`);
    break;
  case 2:
    let test =
      (years % 4 === 0 && years % 100 !== 0 && years % 400 !== 0) ||
      (years % 100 === 0 && years % 400 === 0);
    if (test) {
      console.log(`Thang ${month} nam ${years} co 29 ngay`);
    } else {
      console.log(`Thang ${month} nam ${years} co 28 ngay`);
    }
    break;
  default:
    alert(`Không tồn tại tháng ${month} năm ${years}`);
    break;
}
