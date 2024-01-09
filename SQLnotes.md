In this example :
-- makes a comment
-- @block allows to run something individually, and gives it a little play button to do so. 

--------------------------------------------------------------------------------------------------------------

-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2),
)
^ Now that this table has been made, its time to insert columns/rows into it 

-- @block
INSERT INTO Users(email, bio, country)
VALUES 
('hello@world.com', 'i love strangers!', 'US'),
('hello@everyone.com', 'i love everyone!', 'UK'),
('hello@friend.com', 'i love friends!', 'AU')

^ We can insert multiple rows of data at the same time 

-- @block 
SELECT email, id FROM Users;
WHERE country = 'US'
AND email LIKE 'h%'
ORDER BY id ASC
LIMIT 2;

^ Now we can sort through and see our data with SELECT! 

-- @block
CREATE INDEX email_index ON Users(email);

^ This is creating an index, like the back of a text book, so that our queries will be much faster when there is alot of data in the database. 
--------------------------------------------------------------------------------------------------------------

<Notes>
- INSERT INTO Users(email, bio, country) <-- is saying that we are inserting the parameters (email etc), into the table "Users"

-SELECT <-- allows us to read data in the database and have it return to us in a result table

-SELECT * FROM Users <-- will return all of the data from the table along with every single column 

-WHERE country = 'US' <-- is essentially filtering the database and only returning rows where the country equals 'US' 


<Keywords shown and what they do!>

1. INT  <-- integer data type with no decimals

2. PRIMARY KEY  <-- this column identifies a unique row, therefore the ID must be unique and it cannot be null.

3. AUTO_INCREMENT <-- automatically adds a unique number to each row 

4. VARCHAR(255) <-- This basically puts limitations on how long the string can be which in this case is 255 characters.

5. NOT NULL <-- cannot be null/must have a value 

6. UNIQUE <-- must be unique. cannot match another in the database.

7. TEXT <-- similar to VARCHAR but can hold a string value of unspecified size. Used for larger unpadded strings

8. VARCHAR(2) <-- This is a restriction of only allowing 2 characters. for example, USA would give an error and US would not.

9. SELECT <-- 
SELECT * FROM Users; //this gets ALL the data.
SELECT email, id FROM Users;  //this gets only email and ID from the data.
 
10. ORDER BY <-- Allows you to order the returned data how you'd like
For example : 
ORDER BY id ASC;  this means that you want to order by id, and have it ascend (count up from the bottom).
You can also use DESC to descend (count down from the top).

11. LIMIT 2 <-- This limits the maximum amount of rows returned 

12. LIKE <-- Like finds patterns, so in this example of 'h%' its going to find all the emails that begin with the letter H.