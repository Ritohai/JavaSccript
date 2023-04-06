let courses = [
  {
    id: 1,
    name: "HTML",
    complete: false,
  },
  {
    id: 2,
    name: "CSS",
    complete: false,
  },
  {
    id: 3,
    name: "Node Package Manage",
    complete: false,
  },
  {
    id: 4,
    name: "Basic of Javascript",
    complete: false,
  },
  {
    id: 5,
    name: "GIT",
    complete: false,
  },
];

// Bước 1: In ra danh sách các khóa học và trạng thái
console.log("Xin chao các bạn đến với khóa học");
for (let i = 0; i < courses.length; i++) {
  console.log(
    `${i + 1}. ${courses[i].name} \n\ Complete: ${courses[i].complete}`
  );
}
console.log("---------------");

// Bước 2: CRUDC

let input = prompt("Nhập vào C/R/U/D/H và nhập Q để thoát").toUpperCase();

// Thêm mới khóa học\

if (input == "C") {
  let newCourse = prompt("Nhập khóa học muốn thêm");

  courses.push({
    id: `${courses[length + 1]}`,
    name: `${newCourse}`,
    complete: false,
  });
  console.log("Sau khi thêm mới khóa hoc");
  for (let i = 0; i < courses.length; i++) {
    console.log(
      `${i + 1}. ${courses[i].name} \n\ Complete: ${courses[i].complete}`
    );
  }
  console.log("---------------");
}
// Đọc danh sách khóa học
if (input == "R") {
  console.log("Đọc Sau khi thêm mới khóa hoc");
  for (let i = 0; i < courses.length; i++) {
    console.log(
      `${i + 1}. ${courses[i].name} \n\ Complete: ${courses[i].complete}`
    );
  }
  console.log("---------------");
}
// Update khóa học
if (input == "U") {
  let updateCourseName = prompt("Nhập tên khóa học muốn thay đổi");
  let checkCourseName = -1;

  for (let i = 0; i < courses.length; i++) {
    if (updateCourseName == courses[i].name) {
      checkCourseName = i;
      break;
    }
  }

  if (checkCourseName == -1) {
    console.log("Không tìm thấy khóa học bạn cần");
  } else if (checkCourseName != 1) {
    let input = prompt("Nhập tên khóa học muốn đổi");
    courses[checkCourseName].name = input;
    console.log("Sau khi update thì xin chao các bạn đến với khóa học");
    for (let i = 0; i < courses.length; i++) {
      console.log(
        `${i + 1}. ${courses[i].name} \n\ Complete: ${courses[i].complete}`
      );
    }
    console.log("---------------");
  }
}
// Delete anh em làm tiếp nhé
if (input == "D") {
  // Tương tự U
}
// Cập nhật trạng thái khóa học
if (input == "H") {
  // Cập nhật trạng thái hoàn thành của khóa học, tức là sẽ đổi thằng complete =true
  let statusCourseName = prompt("Nhập vào teen khóa học muốn update complete");
  checkStatusCourseName = -1;

  for (let i = 0; i < courses.length; i++) {
    if (statusCourseName == courses[i].name) {
      checkStatusCourseName = i;
    }
  }

  if (checkStatusCourseName == -1) {
    console.log("Không tìm thấy khóa học");
  } else {
    courses[checkStatusCourseName].complete = true;
console.log("Xin chao các bạn đến với khóa học sau khi đã hoàn thành");
    for (let i = 0; i < courses.length; i++) {
      console.log(
        `${i + 1}. ${courses[i].name} \n\ Complete: ${courses[i].complete}`
      );
    }
    console.log("---------------");
  }
}