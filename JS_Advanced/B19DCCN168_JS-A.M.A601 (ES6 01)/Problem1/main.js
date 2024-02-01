(() => {
  const foo = (x) => {
    const y = x * 2;
    const baz = (v) => {
      if (v > 3) return v + y;
      return baz(v * 4);
    };

    return (z, W) => {
      const w = W?.w;
      if (z.length > 3) {
        return z.map((v) => baz(v));
      } else {
        const obj = [];

        setTimeout(() => {
          obj.length = 1;
          obj[0] = w;
        }, 100);
        return obj;
      }
    };
  };

  const p = foo(2);
  let list1 = [1, 3, 4];
  let list2 = [...list1, 6];

  list1 = p(list1, { w: 42 });
  list2 = p(list2);

  setTimeout(() => {
    console.log(list1[0] === list2.reduce((s, v) => s + v, 0));
  }, 200);
})();
