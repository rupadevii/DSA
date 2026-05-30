/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // s = s.trim()
    // let str = "";
    // let index = s.length
    // for(let i=s.length-1; i>=0; i--){
    //     if((s[i] !== " " && s[i-1] === " ")){
    //         str += s.substring(i, index) + " ";
    //         index = i
    //     }  
    //     else if(s[i] === " "){
    //         index--
    //     }
    // }
    // str += s.substring(0, index)
    // return str
    // let str = []
    // s = s.split(" ")
    // for(let i=s.length-1; i>=0; i--){
    //     if(s[i]){
    //         str.push(s[i].trim())
    //     }
    // }
    // return str.join(" ")

    let arr = s.split(" ").filter(item => item!=="")
    let left = 0
    let right = arr.length-1

    while(left<=right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    // console.log(arr)

    return arr.join(" ")
    
};

