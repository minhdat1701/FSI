var a = 1;

function b() {
  a = 10;
  return;
  function a() {}
}
b();

console.log(a);

//  Output: 1
/*
    Trong hàm b(), khi gán giá trị 10 cho biến a trong phạm vi của hàm b(),
    nó chỉ thay đổi giá trị của biến a trong hàm b() chứ không phải biến a ngoài hàm.
    Nên khi hàm b() kết thúc, giá trị của biến a bên ngoài vẫn giữ nguyên là 1.
*/
