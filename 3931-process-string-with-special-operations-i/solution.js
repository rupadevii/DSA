/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let st = []

    for(let i of s){
        if(i!=="#" && i!=="%" && i!=="*"){
            st.push(i)
        }else if(i==="*"){
            st.pop()
        }else if(i==="#"){
            if(st.length>0) st.push(...st)
        }else{
            let arr = []
            while(st.length>0){
                arr.push(st.pop())
            }

            for(let i of arr){
                st.push(i)
            }
        }
        // console.log(st)
    }

    return st.join("")
};
