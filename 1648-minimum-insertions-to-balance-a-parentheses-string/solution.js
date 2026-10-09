/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let stack = []

    let i=0, count = 0

    while(i<s.length){
        if(s[i]==="("){
            stack.push(s[i])
        }else if((s[i]===")" && s[i+1]===")")){
            if(!stack.length){
                count++
            }else {
                stack.pop()
            }
            i++
        }else{
            if(!stack.length){
                count+=2
            }
            else{
                stack.pop()
                count++
            }
        }
        i++
    }

    return stack.length>0 ? count+=stack.length*2 : count
};
