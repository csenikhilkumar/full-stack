"use strict";
function SayName(user) {
    return "welcome user " + user.name;
}
const user = {
    name: "nikhil"
};
const admin1 = {
    name: "hitesh"
};
console.log(SayName(user));
