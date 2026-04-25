/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length)

    let st = []

    for(let i=temperatures.length-1; i>=0; i--){
        while(st.length>0 && temperatures[st[st.length-1]]<=temperatures[i]){
            st.pop()
        }
        if(st.length>0){
            res[i] = st[st.length-1]-i
        }
        else{
            res[i] = 0
        }
        st.push(i)
    }

    return res
};
