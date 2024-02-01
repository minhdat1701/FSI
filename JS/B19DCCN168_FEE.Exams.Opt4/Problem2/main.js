const input = document.querySelector(".input");
const output = document.querySelector(".output");
const btn = document.querySelector("button");

input.textContent = "Input Array = [3, 4, 2, 1, 7, 7, 4]";

const inputArray = [3, 4, 2, 1, 7, 7, 4];
const min = Math.min(...inputArray);
const max = Math.max(...inputArray);
console.log(inputArray)
btn.addEventListener("click", function () {
    const result = [];

    for (let i = min; i < max; i++ ) {
        if (!inputArray.includes(i)) {
            result.push(i);
        }
    }
    const array = result.join(', ');
    output.textContent = `Output Array: [${array}]`;
});
