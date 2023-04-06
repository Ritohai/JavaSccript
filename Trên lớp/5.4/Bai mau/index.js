let person = {
  name: "faker",
  age: 29,
  school: "LOL",
  hair: false,
};
console.log(person);

// Read - Đọc
let name = person.name;
console.log(name);
console.log(person.hair);
console.log(person["school"]);

// Read all
for (let key in person) {
  console.log(`${key} --- ${person[key]}`);
}

// Create
person.kid = true;
console.log(person);

// Update
person.kid = undefined;
console.log(person);

//Delete
delete person.name;
console.log(person);
