function empty(o) {
  o = null;
}

var x = [];
empty(x);
console.log(x);

// Output: []
/*
  Vì JavaScript truyền tham trị cho các giá trị đối số nên giá trị null chỉ tồn tại 
  trong phạm vi của hàm empty và không ảnh hưởng đến biến x bên ngoài. 
  Vì thế giá trị của x vẫn là mảng rỗng [] vì nó không bị thay đổi bởi hàm empty()
*/ 