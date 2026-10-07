/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a-b)

    // 5 4 3 3
    // 1 2 4 5
    //2 2 2 3 3
    let left = 0
    let right = people.length-1, count = 0

    while(left<=right){
        let sum = people[left]+people[right]

        if(sum <= limit){
            left++
            right--
        }else {
            right--
        }
        count++
    }

    return count
};
