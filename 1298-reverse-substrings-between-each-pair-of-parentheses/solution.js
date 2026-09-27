/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let st = []

    for(let i=0; i<s.length; i++){
        if(s[i]===")"){
            let arr = []
            while(st[st.length-1]!="("){
                arr.push(st.pop())
            }
            st.pop()
            for(let i of arr){
                st.push(i)
            }
        }else{
            st.push(s[i])
        }
    }

    let res = st.join("")

    return res
};
