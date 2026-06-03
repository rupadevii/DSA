/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let st = []
    let st2 = []

    for(let i of s){
        i==="#" ? st.pop() : st.push(i)
    }

    for(let i of t){
        i==="#" ? st2.pop() : st2.push(i)
    }

    return st.join("")===st2.join("")
};
