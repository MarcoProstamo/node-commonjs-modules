const path = require("path");

const namesPath = path.join(__dirname, "utils", "names.js");
const hobbiesPath = path.join(__dirname, "utils", "hobbies.js");

const fullName = require(namesPath);
const hobbies = require(hobbiesPath);
