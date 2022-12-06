/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let results = []
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    const size = matrix.length * matrix[0].length
    console.log(size)
    while (results.length < size) {
        console.log(results)
        // Top Row (l->r)
        for (let i = left; i <= right && results.length < size; i++) {
            results.push(matrix[top][i])
        }
        top++

        //Right Column (desc)
        for (let i = top; i <= bottom && results.length < size; i++) {
            results.push(matrix[i][right])
        }
        right--

        //Next bottom row (r->l)
        for (let i = right; i >= left && results.length < size; i--) {
            results.push(matrix[bottom][i])
        }
        bottom--

        //Next left column (asc)
        for (let i = bottom; i >= top && results.length < size; i--) {
            results.push(matrix[i][left])
        }
        left++
    }

    return results
}

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
)
