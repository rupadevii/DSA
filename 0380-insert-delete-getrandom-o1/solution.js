
var RandomizedSet = function() {
    // this.set = new Set()
    this.arr = []
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // if(!this.set.has(val)){
    //     this.set.add(val)
    //     return true
    // }
    // else{
    //     return false
    // }
    if(this.map.has(val)) return false
    this.arr.push(val)
    this.map.set(val, this.arr.length-1)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // if(!this.set.has(val)) return false
    // else{
    //     this.set.delete(val)
    //     return true
    // }
    if(!this.map.has(val)) return false

    let index = this.map.get(val)
    // [this.arr[index], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[index]]
    this.map.set(this.arr[this.arr.length-1], index)
    this.arr[index] = this.arr[this.arr.length-1]
    this.arr.pop()

    this.map.delete(val)
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    // const randomNum = Math.floor(Math.random()*this.set.size)
    // let arr = [...this.set]
    // return arr[randomNum]
    const randomNum = Math.floor(Math.random()*this.arr.length)
    return this.arr[randomNum]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
