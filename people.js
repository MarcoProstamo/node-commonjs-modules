const path = require("path");

const namesPath = path.join(__dirname, "utils", "names.js");
const hobbiesPath = path.join(__dirname, "utils", "hobbies.js");

const fullName = require(namesPath);
const hobbies = require(hobbiesPath);

const name = fullName("Gino", "Paoli");
const hobby = hobbies("Hockey", "Chess", "Zapping");

function personData() {
  return {
    firstName: name.firstName,
    lastName: name.Lastname,
    hobbies: hobby.hobbies,
  };
}

console.log(personData());
