/**
 * @param {number[]} nums
 * @return {number}
 */
var bowlSubarrays = function(nums) {
    let count = 0

    let lst = new Array(nums.length).fill(0)
    let st = []
    
    for(let i=0; i<nums.length; i++){
        while(nums[i]>=nums[st[st.length-1]] && st.length>0){
            st.pop()
        }

        if(st.length>0){
            lst[i] = st[st.length-1]
        }else{
            lst[i] = -1
        }

        st.push(i)
    }

    let rst = new Array(nums.length).fill(0)

    let st1 = []
    for(let i=nums.length-1; i>=0; i--){
        while(st1.length>0 && nums[i]>=nums[st1[st1.length-1]]){
            st1.pop()
        }

        if(st1.length>0){
            rst[i] = nums[st1[st1.length-1]]
        }else{
            rst[i] = -1
        }

        st1.push(i)
    }

    for(let i=0; i<nums.length; i++){
        if(lst[i]!==-1 && rst[i]!==-1) count++
    }

    // console.log(lst, rst)

    return count
};
