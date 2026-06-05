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

    // function reverse(str){
    //     let chars = str.split("")
    //     let left = 0
    //     let right = str.length-1

    //     while(left<=right){
    //         [chars[left], chars[right]] = [chars[right], chars[left]]
    //         left++
    //         right--
    //     }

    //     return chars.join("")
    // }

    return res
};
