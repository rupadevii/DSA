/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    // let st = []
    // let count = 0
    // let rem = 0

    // for(let i=0; i<s.length; i++){
    //     if(s[i]===")"){
    //         if(st.length>0) st.pop()
    //         else rem++
    //     }
    //     else if(s[i] === "("){
    //         st.push(s[i])
    //     }else{
    //         count++
    //     }
    // }

    // if(st.length===0 && rem<=count) return true

    // if(st.length>0 && st.length<=rem && rem-st.length<=count) return true

    let stack = []
    let star = []

    for(let i=0; i<s.length; i++){
        if(s[i]==="("){
            stack.push(i)
        }else if(s[i]==="*"){
            star.push(i)
        }else{
            if(stack.length>0) stack.pop()
            else if(star.length>0) star.pop()
            else return false
        }
    }

    while(stack.length>0 && star.length>0){
        if(stack[stack.length-1]>star[star.length-1]) return false
        stack.pop()
        star.pop()
    }

    return stack.length===0 
};
