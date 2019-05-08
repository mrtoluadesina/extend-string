# extendString

### Description
A mini prototype based project to extend the String class in Javascript. Using the POP, methods, procedures and instance attributes are added to the String class to support more string manipulation features.

### How will I complete this project?
- Use ES5 consistently throughout the project 
- Organise the folders for your module (application), to house both your code base and the tests
- Write tests to cover all the methods to be written, before development begins (TDD) 
- All the tests should fail, hopefully, for all the methods below
- Write the functions to account for all the methods below
- None of the methods below has arguments, the bracket contents indicate their return data types. 

### Methods
#### hasVowels (typeof Boolean): 
Returns true if the string contains vowels. This method must implement Regular Expression.

#### toUpper (typeof String): 
Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of toUpperCase internal methods.

#### toLower (typeof String): 
Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of toLowerCase internal methods.
 
#### ucFirst (typeof String): 
Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.

#### isQuestion (typeof Boolean): 
Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.

#### words: 
Returns a list of the words in the string, as an Array. This method must implement Regular Expression.

#### wordCount (typeof Number): 
Returns the number of words in the string. It must make use of the words method above.

#### toCurrency (typeof String): 
Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

#### fromCurrency (typeof Number): 
Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

#### inverseCase (typeof String): 
Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.

#### alternatingCase (typeof String): 
Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.

#### numberWords (typeof String): 
Returns the numbers in words e.g 325 should return three two five.

#### isDigit (typeof Boolean): 
Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.

### To run the project on your local machine

```
npm init

npm install --save-dev jest

// change the value of test in scripts to jest in your package.json

{
  "scripts": {
    "test": "jest --coverage"
  }
}

// to test the code 

npm run test

```