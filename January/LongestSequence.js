/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
  */
//! This was a guided exercise.
if (!nums.length) {
    return 0;
}
// this is for in the event there are no numbers in the array
let numSet = new Set(nums);
//create a new set for the numbers
let maxLength = 1;

for (let num of numSet) {
    if (!numSet.has(num - 1)) {
        /*
         the above line means if the number were looking at is behind the number we're on, its the beginning
        of a new sequence, in which case we will start the next sequence using the code below.
        */
        let currentNum = num;
        let currentLength = 1;

        while (numSet.has(currentNum + 1)) {
            //this is to check to see if theres another number to add to the sequence
            //if there is, we set our current number and length
            currentNum += 1;
            currentLength += 1;
        }

        maxLength = Math.max(maxLength, currentLength);
        //this is to check to see what the largest sequence is
    }
    return maxLength;
    //then we return the longest sequence!
}

