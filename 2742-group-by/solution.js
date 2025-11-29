/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {};
    for(let i of this){
        if(obj[fn(i)]){
            obj[fn(i)].push(i)
        }
        else obj[fn(i)] = [i]
    }
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
