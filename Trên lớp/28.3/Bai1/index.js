/**
 * 1. Mệnh đề so sánh
 *   - So sánh hai giá trị, giá trị cụ thể là 
 */

// console.log('true or false', 1>4); //flase

/**
 * if - else :
 *  condition : Đầu vào là boolean ( Mệnh đề so sánh)
 *  nhận bất kì kiểu dữ liệu nào và chuyển nó về kiểu boolean.
 * 
 */
// if ( 4 > 6) {
//     console.log('ahsa');
// } else {
//     doSomeThing('nmnjkl');
// }

/**
 * 
 */

// if ( 1 > 4) {
//     console.log('kết quả sai');
// } elseif (3 > 5) {
//     console.log('kết quả sai');
// }
//     console.log('kết quả sai');
//  elseif (2 > 5) { 
//     console.log('kết quả sai');
// }
//  else (3 > 5) {
//     console.log('Kết quả gần đúng');
// }

let result = 42;
let answer = prompt('Đoán số, từ khoảng 1 - 100');
if ( result > answer) {
    console.log("số lớn hơn");
}
else if ( result < answer) {
    console.log("số bé lại");
}
else {
    console.log('bingo');
}
