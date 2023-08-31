var removeDuplicates = function(nums) {
    let idx = 1
       
    for (let i = 1; i < nums.length; i++){
        if (nums[i] != nums[i-1]){
            nums[idx] = nums[i]
            idx++
        }
    }
    return idx
}

// TIME COMPLEXITY O(N)
nums = [1,1,2]
console.log(removeDuplicates(nums))

nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))