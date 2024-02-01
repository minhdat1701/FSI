function mul(a, b) {
    const result = BigInt(a) * BigInt(b);
    return result.toString();
}

// Test the function
const result = mul(12345678910111213, 89);
console.log(result);    // Output: '1098765422999897957'
