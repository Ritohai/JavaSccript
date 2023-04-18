let array = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    let box = [];
    if (array[i] > array[j]) {
      box = array[i];
      array[i] = array[j];
      array[j] = box;
    }
  }
}
console.log(array.pop());
