/*
 Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

*/
//it looks like its asking for the most frequent integer, then the value of K to be returned? kind of confusing question layout
//! 20 Minutes to work here before I get help.

var topKFrequent = function(nums, k) {
    let frequentArray = []
//Here I'm setting an empty array to put numbers in
    for(i = 0; i < nums.length; i++){
        //here is where i plan to iterate through each number in "nums" and then put whatever matches into the frequent array
        
        if(nums[i]=== nums[i - 1]){
            //this if statement is saying if nums at the index of i is equal to the previous number at the index of i --->
            nums[i].pop("").push(frequentArray)
        }
        //pop it out and push it into frequentArray
        return [frequentArray, k]
    }

};
//Expected output was [1,2].     My answer gave back [0 , 2]

//!--------------------------------------------------------------------------------------------------------

var topKFrequent = function(nums, k) {
    let result = []
    let numbers = {}
    for(let i = 0; i < nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]]++
        } else {
            numbers[nums[i]] = 1
        }
    }
    let array = Object.entries(numbers).sort((a,b) => {
        return a[1] - b[1]
    })
    while(result.length != k) {
        let curr = array.pop()
        result.push(curr[0])
    }
    return result
};

//It appears I was on the right track, but this entry uses sort and Object.entries 
//I had the right idea to pop and push it into a seperate array
//need to do some extra research on Object.entries