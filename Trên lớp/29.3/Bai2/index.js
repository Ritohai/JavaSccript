//bai5
/**
// let n = + prompt("Nhập n: ");
// for( let i = 1 ; i <= 10 ; i++){
//     console.log( n +' x '+  i +' =', n * i );
// }
 */
//bai6
/**
// let n = prompt("Nhập vào một số nguyên dương:");
// if (isNaN(n) || n <= 0 || !Number.isInteger(Number(n))) {
//   console.log("Bạn đã nhập vào một giá trị không hợp lệ!");
// } else {
//   console.log("Dãy số Fibonacci " + n + " phần tử là:");
//   let a = 0, b = 1;
//   for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
// }
 */

//bai6
/**
let number = + prompt('Nhập số : ');
// 0, 1 ,1 ,2 ,3, 5, 8,.....
//Khai báo các biến
let number1 = 0;
let number2 = 1;
let nextNumber = 0;
for(let i=2; i <= number; i++){
    //Nếu số nhập vào tư
    if(number ==0){
        console.log(number1);
        continue;
    }
    if(number ==0) {
        console.log(number2);
        continue;
    }
}
// Gán các giá trị cho dãy
nextNumber = number1 + number2;
number1 = number2;
number2 = nextNumber;
console.log(nextNumber);
*/

//bai7
/**
// let n = + prompt('Nhập n: ');
// if(Number.isInteger(n)) {
//     if(n > 0 ) {
//         if(n % 2 == 0){
//         console.log(n + ' Đây là số chẵn');
//     } else {
//         console.log(n + ' Đây là số lẻ');
//     }
//     } else {
//         console.log(n + ' không là số nguyên dương')
//     }
// } else {
//     console.log(n + " không là số nguyên");
// }
// for(let i=0; i <10l i++){
//     if(i%2==0){
//         console.log('in trước log ', i);
//         break;
//         //continue;
//         console.log('in sau log ', i);
//     }
//     console.log(i);
// }
 */

//bai8
/**
// let n = + prompt('Nhập n: ');
// if(Number.isInteger(n) && n > 0) {

// } else {
//     console.log("Đây không phải là số nguyên dương");
// }
 */

//bai9
/**
// let n = + prompt('Nhập n: ');
// if (n <= 9 || Number.isInteger(n) === false) {
//   if (n === 2 || n === 3 || n === 5 || n === 7) {
//     console.log("n là số nguyên tố");
//   } else {
//     console.log("Không phải số nguyên tố");
//   }
// } else {
//   if (
//     n % 2 === 0 ||
//     n % 3 === 0 ||
//     n % 5 === 0 ||
//     n % 7 === 0 ||
//     Number.isInteger(Math.sqrt(n)) === true
//   ) {
//     console.log("Không phải số nguyên tố");
//   } else {
//     console.log("Là số nguyên tố");
//   }
// }   
 */
/**
let n = +prompt("Please input number n: ");

let checked = true;

for (let i = 2; i <= Math.sqrt(n); i = i + 1) {
  if (n % i === 0) {
    checked = false;
    break;
  }
}

if (checked === false) {
  console.log("đây không phải số nguyên tố");
} else {
  console.log("đây là số nguyên tố");
}
*/

//bai10
// let str = "";
// for (let j = 1; j <= 4; j++) {
//   str = str + j;
//   console.log(str);
// }  

// for (let i = 0; i < 4; i = i + 1) {
//   let m = "";
//   for (let j = 4; j > i; j--) {
//     m = m + "*";
//   }
// console.log(m);
// }

//bai11
let money = +prompt("Nhập số tiền: ");
let a = 50000;
let b = 100000;
let c = 200000;
let d = 500000;
// for(let i = 50000 ; )