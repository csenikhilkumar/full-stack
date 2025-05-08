"use strict";
function isValid(usr) {
    for (let i = 0; i < usr.age.length; i++) {
        if (usr.age[i] <= 15) {
            console.log(usr.name[i], "  is not valid ");
        }
        else {
            console.log(usr.name[i], "  user is valid because users age is greater then 18");
        }
    }
}
const ur = {
    name: ["nikhil", "hitesh", "shachin"],
    lastname: ["kumar", "kumar", "kumar"],
    age: [12, 34, 45]
};
console.log(isValid(ur));
