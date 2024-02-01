function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

//Output: 5
/*  
    Đầu tiên, firstResult trở thành hàm otherFunction từ việc gọi someFunction(9).
    Hàm otherFunction(input) được định nghĩa bên trong hàm someFunction(), nhưng không thực sự được gọi trong bước này.
    Tiếp theo, firstResult(2) được gọi với tham số 2 cũng tức là gọi hàm otherFunction(2).
    Trong hàm otherFunction(), biến a được gán giá trị 5 và trở thành một biến toàn cục vì nó chưa được khai báo bằng từ khóa var.
    Vì thế hàm otherFunction() trả về giá trị của biến a, tức là 5.
*/
