function fibonacci(n, temp = new Map()) {
  if (temp.has(n)) {
    return temp.get(n);
  }

  if (n <= 1) {
    temp.set(n, 1);
    return 1;
  }

  const result = fibonacci(n - 1, temp) + fibonacci(n - 2, temp);
  temp.set(n, result);
  return result;
}

console.log(fibonacci(10)); 
