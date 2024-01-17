/* NEED TO LEARN
Object.entries - what does it mean and how does it work
Product of Arrays Except Self - detailed walkthrough
*/

//! Object.entries notes
/* 
In JavaScript, the Object.entries() method is used to return an array of a given object's own enumerable
 string-keyed property [key, value] pairs. The order of the array elements is the same as the order 
 provided by looping over the object's properties manually.
*/
//! example
//const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);

console.log(entries);
// Output: [ ['a', 1], ['b', 2], ['c', 3] ]

//----------------------------------------------------------------------------------------

//! Set() notes
/* 
Set() is a built in object that can only store unique values
*/
//! example

let mySet = new Set()

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);

console.log(mySet)
//this will output (1, 2, 3) it will NOT add the duplicate "1".

//-----------------------------------------------------------------------------------------

//! has() method notes

/* 
has() simply checks to see if something exists!!!
*/

//! example

let names = ["matt", "matthew","rob", "robert"]

console.log(names.has("daniel")) //output false
console.log(names.has("matt")) //output true

//-----------------------------------------------------------------------------------------