const students = [];
const obj = {};

const tbody = document.getElementById("tbody");
let form = document.getElementById("main-form");
let saved = document.getElementById("saved");
let updateIndex = -1;

//render students
function renderStudents(students) {
  tbody.innerHTML = "";
  for (let key in students) {
    tbody.innerHTML = `<tr ${students[i].id}>
        <th scope="row">${students[key].id}</th>
        <th >${students[key].name}</th>
        <td>${students[key].email}</td>
        <td>${students[key].phonenumber}</td>
        <td>${students[key].address}</td>
        <td>${students[key].gender}</td>
        <td><button type="button" class="btn btn-primary" id="edit">edit</button> | <button
                type="button" class="btn btn-danger" id="del">delete</button></td>
        <td></td>
    </tr>`;
  }
}

renderStudents();
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let index = students.length + 1;
  let name = form.name.value;
  let email = form.email.value;
  let address = form.address.value;
  let phone = form.phone.value;
  let gender = form.gender.value;
  let obj = {
    id: index,
    name: name,
    email: email,
    mobile: mobile,
    address: address,
    gender: gender,
  };
  students.push(obj);
  renderStudent(students);
  form.name.value = "";
  form.email.value = "";
  form.mobile.value = "";
  form.address.value = "";
  form.gender.value = "";
});
