/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    const chars = new Map()

    let left = 0
    let right = 0

    let result = 0
    while (right < s.length) {
        const currentR = s[right]
        if (chars.has(currentR)) {
            chars.set(currentR, chars.get(currentR) + 1)
        } else {
            chars.set(currentR, 1)
        }

        while (chars.get(currentR) > 1) {
            const currentL = s[left]
            chars.set(currentL, chars.get(currentL) - 1)
            left++
        }

        result = Math.max(result, right - left + 1)

        right++
    }

    return result
}
