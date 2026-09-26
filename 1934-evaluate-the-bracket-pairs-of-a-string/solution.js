/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let map = new Map()

    for(let i of knowledge){
        map.set(i[0], i[1])
    }

    let res = []
    let word = ""

    for(let i of s){
        if(i===")"){
            let value = map.has(word) ? map.get(word) : "?"

            res.push(value)
            word = ''
        }else if(i!== "("){
            word += i
        }else{
            res.push(word)
            word = ''
        }
    }

    res.push(word)

    return res.join("")
};
