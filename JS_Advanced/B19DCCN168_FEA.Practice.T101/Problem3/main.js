function makeDigitZero(n) {
    var tp = Array(n + 1).fill(1000000000);
    tp[0] = 0;
    for (var i = 0; i <= n; i++){
        for (var j = 0; j < i.toString().length; j++){
            tp[i] = Math.min(tp[i], tp[i - (i.toString()[j] - '0')] + 1);
        }
    }
    return tp[n];
}

var n = 27;
console.log(makeDigitZero(n));