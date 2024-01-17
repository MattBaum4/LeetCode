/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. 

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
 Since there are two 8's in the top left 3x3 sub-box, it is invalid. */

 var isValidSudoku = function(board){
    const rows=[]
    const cols=[]
    const boxes=[]
    //set multiple empty arrays
    for(let i=0;i<9;i++){
        rows[i]=new Set()
        cols[i]= new Set()
        boxes[i]= new Set()
    }

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            //nested for loop to check for both instances, in this case row and column

            const val=board[i][j]

            if(val!=='.'){
                //if the value doesnt contain a period, we start figuring out what it is and check it
                if(rows[i].has(val) || cols[j].has(val) || boxes[Math.floor(i/3)*3 + Math.floor(j/3)].has(val)){
                    return false
                }else{
                    rows[i].add(val)
                    cols[j].add(val)
                     boxes[Math.floor(i/3)*3 + Math.floor(j/3)].add(val)
                }
            }
        }
    }
    return true
 }
