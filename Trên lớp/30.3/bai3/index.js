//bai5
// let n = "";
// for (let i = 1; i <= 4; i++) {
//     n = n + i;
//     console.log(n);
// }

// for (let i = 0; i < 4; i++) {
//   let n = "";
//   for (let j = 4; j > i; j--) {
//     n = n + j;
//   }
//   console.log(n);
// }

//bai7
// let n = 0;
// for (let i = 1; i < 100; i++) {
//   n = i;
//   if (n % 3 == 0) {
//     if (n % 5 == 0) {
//       console.log("Fizzbuzz");
//     } else {
//       console.log("Fizz");
//     }
//   } else if (n % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(n);
//   }
// }

//bai8
function myFunction() {
  let min = +prompt("Nhập giá trị min: ");
  let max = +prompt("Nhập giá trị max: ");
  let random = Math.floor(Math.random() * (max - min) + min);
  console.log(random);
  let n = +prompt("Nhập giá trị trong khoảng " + min + " đến " + max);
  while (n > random || n < random) {
    if (n > random && n < max) {
      alert("Nhập số bé hơn.");
    }
    if (n < random && n > min) {
      alert("Nhập số lớn hơn.");
    }
    n = +prompt("Nhập giá trị trong khoảng " + min + " đến " + max);
  }
  if (n === random) {
    alert("Số chính xác.");
  }
}

// n = +prompt("Yêu cầu nhập lại n");
// n = +prompt("Yêu cầu nhập lại n");
// function myFunction(){
//     let min = + prompt("Nhap khoang tu min--->max : Nhap min= ");
//     let max = + prompt("Nhap khoang tu min--->max : Nhap max= ");
//     let random = Math.floor(Math.random() * (max - min) ) + min;
//     console.log(random);
//     let user = + prompt("Nhap gia tri ngau nhien " + min + "--->" + max);
//     while(user > random || user < random){
//         if(user > random && user < max){
//             alert("Số bạn nhập lớn hơn số ngẫu nhiên. Vui lòng nhập lại:");
//             user = + prompt("Nhập giá trị ngẫu nhiên" + min + "--->" + max);
//         }
//         if(user < random && user > min){
//             alert("Số bạn nhập bé hơn số ngẫu nhiên. Vui lòng nhập lại:");
//             user = + prompt("Nhap gia tri ngau nhien" + min + "--->" + max);
//         }
//     }
//     if(user === random) {
//         alert("Chúc mừng bạn đã chọn đúng !!!")
//     }
// }
