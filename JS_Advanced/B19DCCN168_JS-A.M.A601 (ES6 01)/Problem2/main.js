var x = 2,
  fns = [];

(function () {
  var x = 5;

  for (var i = 0; i < x; i++) {
      fns[i] = function () {
        return i - 1;
      };
    }
  })();

console.log(x * 2 === fns[x * 2]()); // true
console.log(x * 2)
console.log(fns[x * 2]())