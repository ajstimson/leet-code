function longestPalindrome(s: string) {
    if (s.length < 1) return ""
    let maxSubStart = 0
    let maxSubLength = 0
    for (let i = 0; i < s.length; i++) {
        const lengthCenteredAtChar = expandAroundCenter(s, i, i)
        const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1)
        const longestSubAtChar = Math.max(
            lengthCenteredAtChar,
            lengthCenteredAtSpace
        )
        if (longestSubAtChar > maxSubLength) {
            maxSubLength = longestSubAtChar
            maxSubStart = i - Math.floor((maxSubLength - 1) / 2)
        }
    }
    return s.substr(maxSubStart, maxSubLength)
}

function expandAroundCenter(s: string, left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
    return right - left - 1
}
const string =
    "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
console.log(longestPalindrome(string))
