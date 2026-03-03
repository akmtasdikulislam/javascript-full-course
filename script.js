// words vs keywords
// var, let, const - line-by-line comparison

a = 12; // bad ❌
var a;
var a = 12;
let a = 12;
const a = 12;

function abcd() {
  if (true) {
    var a = 12;
  }
  // Accessing 'a' from outside of if...else block
  console.log(a); // 12
}