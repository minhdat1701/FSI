function reverse(s) {
  const arr = s.split("_");
  let res = "";
  for (let index of arr) {
    res += index.charAt(0).toUpperCase() + index.slice(1);
  }
  return res;
}

// Test the function
const str = "user_name";
const result = reverse(str);
console.log(result); // Output: 'UserName'
