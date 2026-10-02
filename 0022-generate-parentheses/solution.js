/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = []
    const res = []
    function backtrack(open, close){
        if(open === n && close === n){
            res.push(ans.join(""))
            return
        }

        if(open<n){
            ans.push("(")
            backtrack(open+1, close)
            ans.pop()
        }

        if(close<open){
            ans.push(")")
            backtrack(open, close+1)
            ans.pop()
        }
    }

    backtrack(0, 0)
    return res
};
