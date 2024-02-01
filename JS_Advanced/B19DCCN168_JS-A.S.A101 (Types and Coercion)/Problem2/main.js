function swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
}

var x = 1;
var y = 2;

swap(x, y);
console.log(x); // ??

//Output: 1
/*
  Khi gọi hàm swap(x, y) thì chỉ có các tham số được gán lại, không ảnh hưởng đến giá trị của x và y bên ngoài hàm.
  Do đó, khi kết thúc hàm swap, giá trị của x và y không bị thay đổi và vẫn giữ nguyên là 1 và 2.
 */
