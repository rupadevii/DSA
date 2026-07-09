/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let st = []

    for(let i of asteroids){
        if(st.length>0 && st[st.length-1]>0 && i<0){
            while(st.length>0 && st[st.length-1]>0 && st[st.length-1]<Math.abs(i)){
                st.pop()
            }
            if(st.length===0 ||st[st.length-1]<0) st.push(i)
            if(st[st.length-1]===Math.abs(i)) st.pop()
        }else{
            st.push(i)
        }
    }

    return st
};
