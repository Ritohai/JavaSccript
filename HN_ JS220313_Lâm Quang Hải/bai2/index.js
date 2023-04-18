let str = prompt("Nhap chuoi bat ki :");
function tring(str) {
  str = str.trim();
  str = str.toLowerCase();
  const array = str.split(" ");
  let newStr = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") {
      newStr += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
    }
  }
  newStr = newStr.trimEnd();
  return newStr;
}
console.log(tring(str));
