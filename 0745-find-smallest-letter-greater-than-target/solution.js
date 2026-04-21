/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let tar = target.charCodeAt(0) - 97

    for(let i=0; i<letters.length; i++){
        let char = letters[i].charCodeAt(0)-97
        if(char>tar) return letters[i]
    }

    return letters[0]
};
