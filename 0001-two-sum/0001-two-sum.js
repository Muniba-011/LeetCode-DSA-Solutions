/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        
        let neededNum = target - currentNum;

        if (neededNum in numMap) {

            return [numMap[neededNum], i];
        }

        numMap[currentNum] = i;
    }
    
};