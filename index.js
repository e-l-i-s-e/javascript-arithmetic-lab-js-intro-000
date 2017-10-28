
var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)
function add(a, b){
  return a += b;
}

var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)
function subtract(a, b) {
  return a -= b;
}

function multiply(){
 return a *= b;
}

function divide(){
 return a /= b;
}

function inc(n) {
 return a++;
}

function dec(n) {
 return a --;
}

function makeInt (n) {
  return parseInt (n, 10);
}

function preserveDecimal(n){
 return parseFloat (n, 10);
}
