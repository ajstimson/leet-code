function longestPalindrome(s: string): string {
    const isPalindrome = (s: string) => {
        return Array.from(String(s)).reverse().join("") === s
    }
    for (let i = s.length; i > 0; i--) {
        for (let j = 0; j < s.length; j++) {
            if (j + i > s.length) {
                break
            }
            const sub = s.substr(j, i)
            if (isPalindrome(sub)) {
                return sub
            }
        }
    }
    return ""
}

console.log(longestPalindrome("babad"))
