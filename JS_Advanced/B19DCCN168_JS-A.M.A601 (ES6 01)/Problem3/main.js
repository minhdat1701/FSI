function foo(...args) {
  return args;
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];
  var [x, ...rest1] = a1;
  var [, ...rest2] = a2;

  return foo(x, ...rest2);
}
// DO NOT MODIFY BELOW CODE
console.log(bar().join("") === "281012"); // true
