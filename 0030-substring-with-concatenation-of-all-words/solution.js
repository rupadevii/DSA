/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let map = new Map()
    let lengthOfWords = words[0].length * words.length
    let res = []

    for(let i of words){
        map.set(i, (map.get(i)||0)+1)
    }
    for(let i=0; i<s.length; i++){
        let isEqual = true
        let map2 = new Map()
        for(let j=i; j<i+lengthOfWords; j+=words[0].length){
            let str = s.substring(j, j+words[0].length)
            map2.set(str, (map2.get(str)||0)+1)
        }
        // let str = s.substring(i, i+words[0].length)
        // console.log(str)

        // if(map2.get(str)>map.get(str)){
        //     left = right+1
        // }

        if(map2.size !== map.size) isEqual = false

        for(let [key, value] of map2){
            if(map.get(key)!== value || !map.has(key)){
                isEqual = false
            }
        }

        if(isEqual){
        res.push(i)

        }
        
    }
    return res
};
