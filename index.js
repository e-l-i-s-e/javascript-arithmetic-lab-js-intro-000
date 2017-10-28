

function add(){
  var a = Math.floor(Math.random() * 1000)
  var b = Math.floor(Math.random() * 1000)
  return a += b;
}

function subtract() {
  var a = Math.floor(Math.random() * 1000)
  var b = Math.floor(Math.random() * 1000)
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
