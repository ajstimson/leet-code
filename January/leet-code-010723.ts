/*  
The function longestPalindrome returns the longest palindromic substring in the 
input string s. It does this by iterating through each character in s and finding 
the longest palindromic substring centered at that character. The length of this 
substring is determined by calling the helper function searchFromCenter, which 
expands the substring outwards from the center until it is no longer a palindrome. 
It then returns the length of this substring.

longestPalindrome keeps track of the maximum length palindromic substring it has 
seen so far and the start index of that substring. It updates these values if it 
finds a longer palindromic substring. At the end, it returns the substring with the 
maximum length by using the start index and length stored in maxSubStart and 
maxSubLength.
*/

function longestPalindrome(s: string): string {
    if (s.length < 1) return ""
    let start = 0
    let strLength = 0
    for (let i = 0; i < s.length; i++) {
        const longest = Math.max(
            searchFromCenter(s, i, i),
            searchFromCenter(s, i, i + 1)
        )
        if (longest > strLength) {
            strLength = longest
            start = i - Math.floor((strLength - 1) / 2)
        }
    }
    return s.slice(start, start + strLength)
}

function searchFromCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
    return right - left - 1
}
const string =
    "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
console.log(longestPalindrome(string))
