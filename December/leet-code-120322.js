/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return x === +Array.from(String(x), Number).reverse().join("")
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
