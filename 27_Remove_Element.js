var removeElement = function(nums, val) {
    let idx = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != val){
            nums[idx] = nums[i]
            idx++
        }
    }
    return idx
}

// TIME COMPLEXITY O(N)
nums = [3,2,2,3]
val = 3
console.log(removeElement(nums, val))

nums = [0,1,2,2,3,0,4,2]
val = 2
console.log(removeElement(nums, val))