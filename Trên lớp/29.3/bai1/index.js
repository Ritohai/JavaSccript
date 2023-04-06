// Lặp với số lần biết trước
// For loop
// Ví dụ in ra màn hình 10 lần
// for(let i = 0; i < 3; i = i + 1) {
//     console.log(i, 'Hello World');
// }

// Luồng chạy của vòng lặp for loop
// Lần chạy 1 : i = 0; 0 < 3 => True => In ra " Hello World" , i =0 + 1 = 1;
// Lần chạy 2 : i = 1; 1 < 3 => True => In ra " Hello World" , i =1 + 1 = 2;
// Lần chạy 3 : i = 2; 2 < 3 => True => In ra " Hello World" , i =2 + 1 = 3;
// Lần chạy 4 : i = 3; 3 < 3  => False VÒNG LẶP DỪNG LẠI
// Biến i ( biến chạy )
// Bộ 3 điều kiện lặp
//  - Điểm bắt đầu
//  - Điểm kết thúc của vòng lặp
//  - Bước nhảy


//Tinh tổng của dãy A = 1+2+3+...+n
// let n = + prompt('Nhập số n; ');
// let Sum = 0;
// for(let i = 0; i < n ; i ++ ) {
//     console.log(Sum = Sum + i);
// }

//Tinh tích của dãy B = 1*2*3*...*n
// let n = + prompt('Nhập n: ');
// let tich = 1;
// for(let i = 1 ; i < n ; i ++) {
//     console.log(tich = tich*i);
// }

/**
// Tinh tổng của dãy C = 1/1*2 + 1/2*3 +....+1/(n-1)*n
let n = +prompt('Nhập n: ');
let ps = 0;
for(let i = 2 ; i < n ; i++) {
   ps = ps + 1/(i * (i-1));
}
console.log(ps); //Đưa ra kết quả cuối cùng.
*/


//Ex2: 
//Cho người dùng nhập vào số a và b
// Kiểm tra xem a>b hay < b
// In ra 1 dãy từ a đến b hoặc ngược lại kèm theo với
// - Chẵn nếu là số chẵn
// - Lẻ nếu là số lẻ


// let a = + prompt('Nhập a ');
// let b = + prompt('Nhập b ');
// if( a > b) {
//     for(let i = b ; i <= a; i++){
//         if( i % 2 == 0 ) {
//             console.log (i + ' đây là số chẵn' );
//         }
//         else {
//             console.log(i + " đây là số lẻ");
//         }
//     }
// } 
// else if( a == b){
//     if(  a % 2 == 0) {
//     console.log(a + " đây là số chẵn");
// } else {
//         console.log(a + ' là số lẻ');
//         }
// }
// else {
//     for(let i = a ; i <= b ; i++){
//         if( i % 2 == 0 ) {
//             console.log(i +' đây là số chẵn');
//         }
//         else {
//             console.log(i +' đây là số lẻ');
//         }
//     }
// }


// VD:
// a = 1
// b = 5
// 1 - lẻ
// 2 - chẵn
// ...
// 5 - lẻ

/********    WHILE ********/
// while (condition) {
//     logic
//     Trong tương lai gần
//     lần lặp thứ 100
//     1 điều kiện nào đó thảo mãn
//     DỪNG VÒNG LẶP
//     condition biến thành sai
//     }

// Cho người dùng nhập vào số n
// Tiến hành xây dựng 1 ứng dumnjg AI
//Kiểm tra xem số n có trùng với số result ở trong
// code hay kkhoong

// Nếu trùng => BINGO
//Nếu lớn hơn => Giảm đi
// Nếu nhỏ hơn => Tăng lên

// let result = 30;
// let loop = true;
// while (loop) {
//     let n = + prompt('Đoán số đi : ');
//     if( n === result) {
//     console.log("BINGO");
//     loop = false;
//     } else if( n > result) {
//     console.log("Giảm đi");
//     } else {
//     console.log("Tăng lên");
//     }
// }