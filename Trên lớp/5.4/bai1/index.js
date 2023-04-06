// Khởi tạo một object để mô phỏng một cuốn từ điển (dictionary) của developer,
//  những thuộc tính với những cặp key — value được mô tả ở dưới đây.

let check = "";
let dictionary = {
  agile:
    "Agile is an iterative approach to project management and software development",
  scrum:
    "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.",
  aws: "Aws stands for Amazon web services, a cloud solution for web development",
  pm: "The short version of Project Manager, the person in charge of the final result of a project",
  "ui/ux":
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
do {
  alert("Hi there, this is dev dictionary");
  let n = prompt("Enter a keyboard");
  if (dictionary[n]) {
    alert(dictionary[n]);
  } else {
    alert(`We could not find your word: ${n}`);
  }
  let m = prompt("Nhập từ cần thêm: ");
  let str = prompt("Nhập ý nghĩa của nó : ");
  dictionary[m] = str;
  alert("done");
  console.log(dictionary);
  check = prompt("Bạn muốn tiếp tục không");
} while (check != "no");
