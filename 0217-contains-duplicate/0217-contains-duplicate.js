/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let memory = new Set();

    for(let num of nums){
      if(memory.has(num)){
         return true;
        }
        memory.add(num);
    }
         return false;
};