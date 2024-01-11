/* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true */
//!--- This first part is where I will try to dump my brain and attempt to solve using pseudo code until my 20 min timer is up.
var isAnagram = function(s, t) {
    /* I think we need to intake the first string (for example "tar") and see if the next string 
    contains all the same letters, no more no less, and use the letters only ONCE. */
    // probably using a for loop

    for(i=0; i<=s.length+1; i++){
     // i think im supposed to use split here somehow to split the initial string and then check to see if that letter
     //occurs in the given string...
    if( condition = met){
        return true
    }
    else{
        return false
    }
}
};

//!--- Now I'll see if i was on the right track.
//i was not

var isAnagram = function (s, t) {
    let ssorted = s.split("").sort().join("")
    let tsorted = t.split("").sort().join("")
    // The split() method will take each letter out of the word and put them into an array
    //That array can then be sorted with the sort() method and in this case itll be alphabetically
    //Join connects the split up letters back together 
    //so in this solution, they took both strings, split, sort, and joined them back, then checked to see if they are equal.
    return ssorted === tsorted
  };
 