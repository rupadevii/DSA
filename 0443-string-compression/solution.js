/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0;
    let i = 0;
    while(i<chars.length){
        let char = chars[i];
        let count = 0;
        while(i<chars.length && chars[i]===char){
            count++;
            i++
        }
        if(count === 1) chars[index++] = char;
        else{
            chars[index++] = char
            for(let i of String(count)){
                chars[index++] = i
            }
        }
    }
    return index
};
