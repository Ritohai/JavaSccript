//Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần.
let str = prompt("Nhập dãy số: ");
let numberList = str.split(" ");
console.log(numberList);
for (let i = 0; i < numberList.length - 1; i++) {
  for (let j = i + 1; j < numberList.length; j++) {
    let bet;
    if (Number(numberList[i]) > Number(numberList[j])) {
      bet = Number(numberList[i]);
      numberList[i] = numberList[j];
      numberList[j] = bet;
    }
  }
}
console.log(numberList);
