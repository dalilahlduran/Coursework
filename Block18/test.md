# Overview
For each sub section below read the prompt, identify the expectations and write the specification that can be used to write tests for that prompt. 

# Unit Test

1. A function called "multiplication" that returns the product of the two input numbers.

2. A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

## Expectations:

1. "Multiplication" function
- The function will include two numbers
- The function is a multiplication function
- The function includes a return
- The function will return a product
- The function should work with negative numbers
- The function only accepts integers
    -The function should fail if you pass an array of strings instead of integer numbers

2. "concatOdds" function
- The function will include two arrays
- The function only accepts integers
    -The function should fail if you pass an array of strings instead of integer numbers
- The function will only return the odd numbers from both arrays
    - This return will be a single array
    - This return will display the odd numbers in an ascending order


## Test Specs

1."Multiplication" function
- Expect `multiply([2, 6])` to return 12
- Expect `multiply([-1, 7])` to retun -7
- Expect `multiply(["3", "5"])` to return an error
- Expect `multiply([])` to return an error


2. "concatOdds" function
- Expect `concatOdds([1, 2, 3, 4] [5, 6, 7, 8])` to return [1, 3, 5, 7]
- Expect `concatOdds(["3", "5", "9"]["4", "4", "2"]) to return an error
- Expect `concatOdds([2, 4, 6,][8, 10, 12]) to return []



## Functional Test

1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

## Expectations:
* The user sees a prompt during the shopping cart checkout to login or create an account
* The user will be able to checkout out as a guest, new user, or as a logged in user
* The user can create an account before checking out if they decide to create an account during checkout


## Test Specs 

Given I am a guest user with the shopping cart checkout feature when I checkout and decide to not create an account and continue as a guest, then I should still be able to checkout

Given I am a returning user with an account when I checkout and login to my account, then I should still be able to checkout

Given I am a user of the shopping cart checkout, when I see the checkout screen, then I should be able to continue as a guest, create an account, or be prompted to login as a returning user.