/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

/* EX: 
Input: nums = [2, 7, 11, 15]
Target = 9
*/

//! This is where I will try for 20 min before getting help
var twoSum = function(nums, target) {
    //Here I want to take the first number and check, which number if added, will equal the target.
    for(let i=0; i !== target; i++){
    //saying here starting at the first number as long as the number is not equal to the target continue
        if (nums[i] + nums[0] === target){
            //the above line has to be wrong because it wont always be the first number in the array 
            return nums[i]

        }
        //here im trying to come up with a way to start at the index of zero and add them together and check
        // Also IMPORTANT to note that this needs to return the indices of which numbers will add up
    }
}

//I think it may be a while loop? While nums[?] = nums[?] keep iterating until its figured out?

//! End of time limit 
// It appears I was sort of on the right track, just making it more complicated than it needed to be
// On the same token, this appears to use methods im unfamiliar with. Will be noting that below.
var twoSum = function(nums, target) {
    let mp = new Map()
    //here they made a map
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        //finding the difference was smart here.
        if (mp.has(diff)) {
            //the has() method will return a boolean if a specified value exists in this set or not
            return [i, mp.get(diff)]
            //the get() method is associated with Map(), and will give reference to a specified object, and any changes made to it-
            //will modify it inside the Map object.
        }
        
        mp.set(nums[i], i)
    }
};

// I also like the use of a nested for loop in this other example, creating another variable to check without using methods.
var twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length;j++){
            //here this person was able to complete what I had initally thought but struggled to articulate into code.
            //Using J and I as two variables to check if they added to the target then returning both I and J.
            if(nums[i] + nums[j] === target) return [i, j]
        
        }

    }
};

