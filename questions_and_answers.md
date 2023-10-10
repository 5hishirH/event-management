# Answers of the given questions

## Question no. 1
### Correct ans : B
Explanation: greetign wasn't declared before assigning a empty object in it. Therefore, it couldn't find any reference of the variable inside console.log and showed ReferenceError on the console

## Question no. 2
### Correct ans : C
Explanation: during the call of sum function number 1 and string "2" was passed as a parameter. In JS, using + operator between a number and string concates the first number with the string. Thus, ruturn from sum will be "12"

## Question no. 3
### Correct ans : A
Explanation: In the code food was unchanged. Hence, while using console.log it showed the array food

## Question no. 4
### Correct ans : B
Explanation: the function sayHi expects a parameter named 'name' and return the parameter after the mentioned strings. While calling it no parameter was passed, hence, it showed undefined at the place of name

## Question no. 5
### Correct ans : C
Explanation: the array nums contains integer numbers from 0 to 3. because of running forEach on nums, excluding the first iteration as it was 0 and condition of if was false, 1 was added to count in each iteration. In the end 1 was added 3 times result the value count 3.