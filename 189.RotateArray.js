/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let mod = k % nums.length
  let res = []

  for (let i = nums.length - mod; i < nums.length; i++) {
    res.push(nums[i])
  }
  for (let i = 0; i < nums.length - mod; i++) {
    res.push(nums[i])
  }
  nums = res
  return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
