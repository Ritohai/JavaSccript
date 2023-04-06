// Bai 1
// let a = 5;
// let b = prompt('Enter a number');
// if ( a > b) {
//     alert('Lower half of 9');
// }
// else {
//     alert('Hight half of 9');
// }


//bai2
// let n = prompt('n');
// let x = prompt('x');
// if ( n > x) {
//     alert(n + ' is in higher half of 14');
// }
// else {
//     alert(n + ' is in lower half of 14');
// }


//bai3
// let x =prompt('x');
// if ( x % 2 == 0 ) {
//     alert(x + ' is an even number');
// }
// else {
//     alert(x + ' is an odd number');
// }


//bai4
// let w = Number(prompt('Your weight in kg?'));
// let h = Number(prompt('Your height in cm?'));
// let BMI = w / ((h/100) * (h/100));
// alert('Your is '+ BMI)
// if (BMI < 16) {
//     alert('Mày gầy VL');
// }
// else if (16 < BMI && BMI <18.5) {
//     alert('Trung bình');
// }
// else if ( 18.5 <= BMI && BMI < 25) {
//     alert('Dáng chuẩn người mẫu');
// }
// else if ( 25 <= BMI && BMI < 30) {
//     alert('Sắp béo rồi');
// }
// else {
//     alert('Béo phì rồi');
// }


//bai5
// let Toan = Number(prompt('Điểm Toán'));
// let Li = Number(prompt('Điểm Lí'));
// let Hoa = Number(prompt('Điểm Hóa'));
// let Van = Number(prompt('Điểm Văn'));
// let Anh = Number(prompt('Điểm Anh'));
// let advant = (Toan + Li + Hoa + Van + Anh)/5;
// let Percentage = advant/10*100;
// alert('Điểm trung bình: ' + advant);
// alert('Điểm trung bình: ' + Percentage + '%');
// if ( Percentage >= 90 ) {
//     alert('Grade A');
// } else if ( Percentage >=80 && Percentage <90){
//     alert('Grade B');
// }
//  else if ( Percentage >=70 && Percentage < 80){
//     alert('Grade C');
//  }
//  else if ( Percentage >=60 && Percentage <70){
//     alert('Grade D');
// }
//  else if ( Percentage >=40 && Percentage <60){
//     alert('Grade E');
// }
//  else {
//     alert('Grade F');
// }


//bai6
// let year = Number(prompt('Nhập vào năm bất kì: '));
// if (Number.isInteger(year) && year > 0) {
//     alert('Năm hợp lệ');
// }
// else {
//     alert('Năm không hợp lệ');
// }
// if ( year % 100 ==0 ) {
//     if (year % 400 ==0 ) {
//         alert('Đây là năm nhuận.');
//     } else {
//         alert('Đây không là năm nhuận.');
//     }
// } else if(year % 4 == 0 ) {
//     alert('Đây là năm nhuận');
// }
// else {
//     alert("Đây không là năm nhuận.")
// }


//bai8
// let a = + prompt('Nhập số a: ');
// let b = + prompt('Nhập số b: ');
// if(a>b) {
//     console.log(a + ' là số lớn hơn '+ b);
// }
// else {
//     console.log(b + ' là số lớn hơn ' + a);
// }


//bai9
// let a = + prompt('Nhập số a: ');
// let b = + prompt('Nhập số b: ');
// let operator = prompt('Nhập vào toán tử +, - , * , / ');
// switch (operator) {
//     case ('+'):
//         console.log( a + b);
//         break;
//     case ('-'):
//         console.log( a - b);
//         break;
//     case ('*'):
//         console.log( a * b);
//         break;
//     case ('/'):
//         console.log( a / b);
//         break;
//     default:
//         console.log(' Nhập lại.')
//         break;
// }


//bai10
// let a = + prompt('Nhập a: ');
// let b = + prompt('Nhập b: ');
// let c = + prompt('Nhập c: ');
// if( a > b && a > c) {
//     if( b> c){
//         console.log('Max là '+a, 'Min là '+ c);
//     }
//     else {
//         console.log('Max là '+a, 'Min là '+b);
//     }
// } 
// else if( b > a && b > c) {
//     if( a > c){
//         console.log('Max là '+b, 'Min là '+ c);
//     }
//     else {
//         console.log('Max là '+b, 'Min là '+a);
//     }
// } 
// else {
//     if( b > a){
//         console.log('Max là '+c, 'Min là '+ a);
//     }
//     else {
//         console.log('Max là '+c, 'Min là '+b);
//     }
// } 


//bai11
// let fefe = + prompt('Nhập số ');
// let chinh = Math.sqrt(fefe,2);
// if (Number.isInteger(chinh) && fefe > 0){
//     alert('Đây là số chính phương.');
// }
// else {
//     alert('Đây không là số chính phương.');
// }


//bai12
// let day = + prompt('Nhập vào ngày sinh');
// let month = + prompt('Nhập vào tháng sinh');
// switch ( month ) {
//     case (1):
//         if ( day >= 20){
//             console.log("Bảo Bình")
//         }
//         else {
//             console.log("Ma Kết")
//         }
//     break;  
//     case (2):
//         if(day > 18){
//             console.log("Song Ngư");
//         } else {
//             console.log("Bảo Bình");
//         }
//     break;
//     case (3):
//         if(day >= 21){
//             console.log("Bạch Dương");
//         } else {
//             console.log("Song Ngư");
//         }
//     break;
//     case (4):
//         if(day >= 20){
//             console.log("Kim Ngưu");
//         } else {
//             console.log("Bạch Dương");
//         }
//     break;
//     case (5):
//         if(day > 21){
//             console.log("Song tử");
//         } else {
//             console.log("Kim Ngưu");
//         }
//     break;
//     case (6):
//         if(day >=22){
//             console.log("Cự Giải");
//         } else {
//             console.log("Song tử");
//         }
//     break;
//     case (7):
//         if(day >= 23){
//             console.log("Sư Tử");
//         } else {
//             console.log("Cự Giải");
//         }
//     break;
//     case (8):
//         if(day >=23 ){
//             console.log("Xử Nữ");
//         } else {
//             console.log("Sư Tử");
//         }
//     break;
//     case (9):
//         if(day >=23 ){
//             console.log("Thiên Bình");
//         } else {
//             console.log("Xử Nữ");
//         }
//     break;
//     case (10):
//         if(day >=24 ){
//             console.log("Hổ Cáp");
//         } else {
//             console.log("Thiên Bình");
//         }
//     break;
//     case (11):
//         if(day >= 22){
//             console.log("Nhân Mã");
//         } else {
//             console.log("Hổ Cáp");
//         }
//     break;
//     case (12):
//         if(day >= 22){
//             console.log("Ma Kết");
//         } else {
//             console.log("Nhân Mã");
//         }
//     break;
//     default:
//         break;
// }


//bai13
// let a = + prompt('Nhập a: ');
// let b = + prompt('Nhập b: ');
// let c = + prompt('Nhập c: ');
// let delta = (Math.pow(b,2)) - (4*a*c);
// let x1 = ( - b - Math.sqrt(delta))/(2*a);
// let x2 = ( - b + Math.sqrt(delta))/(2*a);
// let x = -b / (2*a);
// if ( a==0){
//     alert('PT có 1 nghiệm duy nhất: ' + -c/b);
// } else {
// if (delta > 0) {
//     console.log('Phương trình có 2 nghiệm: x1 = '+ x1 + ',x2 = ' + x2 ) ;
// }
// else if( delta == 0) {
//     console.log('Phương trình có nghiệm kép:x= ' + x);
// }
// else {
//     console.log('Phương trình vô nghiệm.');
// }
// }


// bai14
// let a = + prompt('Nhập a : ');
// let b = + prompt('Nhập b : ');
// let c = + prompt('Nhập c : ');
// if (( a + b) > c && (b +c) > a && (a + c) > b){
//     console.log("Đây là 1 tam giác.");
// }
// else {
//     console.log("Đây không phải tam giác.");
// }


//Số nguyên tố
// let n = + prompt('nhập n : ');
// if(Number.isInteger(n)) {
//     console('Đây là số tự nhiên');
//     if ( n > 1){
//         if( n % 1 == 0 && n%n ==0) {

//         } else {
//             console('Đây không phải số nguyên tố')
//         }
//     }
//     else {
//         console('Đây không phải số nguyên tố');
//     }
// }
// else {
//     console('Đây không phải số tự nhiên')
// }

