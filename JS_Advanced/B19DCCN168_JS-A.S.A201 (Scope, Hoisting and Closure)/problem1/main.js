function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

//Output: console.log(a): undefined
//        console.log(foo()): 2
/*  
    Do sự hoisting của JavaScript nên khi gọi console.log(a); phần khai báo của biến a đã được di chuyển lên đầu 
    nhưng nó không đưa phần gán giá trị cho a lên. Do đó, giá trị của a là undefined.
    Tương tự thế khi gọi console.log(foo()); hoisting sẽ đảm bảo rằng hàm foo() đã được khai báo và có thể sử dụng,
    nó trả về giá trị 2, bởi vì phần thân của hàm đã được định nghĩa trước. Do đó, console.log(foo()) sẽ hiển thị là 2 .
*/