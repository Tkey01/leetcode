/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let mem = {}
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in mem)) {
      res.push(nums[i])
      mem[nums[i]] = true
      // console.log('in', res, mem)
    }
  }
  return res
}

console.log(removeDuplicates([1, 1, 2]))
