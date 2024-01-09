//Contains Duplicate Leetcode Excersise

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
const nums = [1,2,3,1]
console.log(nums.length) /* this returns 4, the total number of items in the array */
var containsDuplicate = function(nums) {

    nums.sort((a,b) => a-b);
/* The above line is a conditional to sort the array in ascending order */

    for(let i=0; i<= nums.length-1; i++){
        /* this for loop iterates over each number in the array  */
        if(nums[i] === nums[i+1]){
            /* if the numbers are equal it returns true, meaning there is a duplicate */
            return true
        }
    }
    return false
};

