const numbers = {
  *[Symbol.iterator]() {
    let start = 0;
    let step = 1;
    while (start <= 100) {
      yield start;
      start += step;
    }
  },
};

console.log("0..100 by step 1:");
for (let num of numbers) {
  console.log(num);
}

console.log("6..30 by step 4:");
const numbersStep4 = {
  *[Symbol.iterator]() {
    let start = 6;
    let step = 4;
    while (start <= 30) {
      yield start;
      start += step;
    }
  },
};

for (let num of numbersStep4) {
  console.log(num);
}
