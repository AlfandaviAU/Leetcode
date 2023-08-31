var nextGreaterElement = function(nums1, nums2) {
    const map = new Map()
    let stack = []

    for (let num of nums2){
        while (stack[stack.length-1] < num){
            map.set(stack.pop(), num)
        }
        stack.push(num)
    }
    stack.length = 0
    for (let num of nums1){
        if (map.has(num)){
            stack.push(map.get(num))
        }else{
            stack.push(-1)
        }
    }
    return stack
}

nums1 = [4,1,2]
nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums1, nums2))

nums1 = [2,4]
nums2 = [1,2,3,4]
console.log(nextGreaterElement(nums1, nums2))