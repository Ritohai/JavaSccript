// Cách 1: Không sử dụng hàm sort
let array = [3, 25, 38, 49, 12];
for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] < array[j]) {
      box = array[i];
      array[i] = array[j];
      array[j] = box;
    }
  }
}
console.log(array);

// Cách 2: Sử dụng hàm sort
let array1 = [3, 25, 38, 49, 12];
function compareNumbers(a, b) {
  return b - a;
}
let sortArray = array1.sort(compareNumbers);
console.log(sortArray);
