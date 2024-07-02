function primeNumber(a) {
    if (a <= 1) {
        return "NO";
    }
    if (a == 2) {
        return "YES";
    }
    else {
        for (var index = 2; index < a; index++) {
            if (a % index == 0) {
                return "NO";
            }
            else {
                return "YES";
            }
        }
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
// ศุภกร บูรณะชาติ 660610798