Lab: Syntax, Functions and Statements
=====================================

Problems for in-class lab for the ["JavaScript Advanced" course \@
SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the
SoftUni judge system at
<https://judge.softuni.bg/Contests/1795/Lab-Syntax-Functions-and-Statements>.

01\. String Length
-------------

Write a JS function that takes **three string arguments** as an input.

Calculate the **sum** of the **length** of the **strings** and the **average
length** of the strings **rounded down** to the nearest integer.

The **input** comes as **three string arguments** passed to your function.

The **output** should be printed on the console on two lines.

### Examples

| **Input**                        | **Output** |
|----------------------------------|------------|
| 'chocolate', 'ice cream', 'cake' | 22 7       |
| **Input**| **Output** |
| 'pasta', '5', '22.3'             | 10 3       |

### Hints

-   Write a function that receives three string arguments.

-   Declare two variables named **sumLength** and **averageLength** that will
    keep the mathematical results.

-   Calculate the length of the strings using the **length property**.

    ![](media/5191554d61bb3152ad3b96edf01972d9.png)

-   Calculate the sum of the three lengths.

    ![](media/f3f29c7e2dbe51f5d20436ab93d38fa8.png)

-   Calculate the **average length** of the strings **rounded down** to the
    nearest integer. Use the **Math.floor()** function.

    ![](media/d3e13e58c64baecff2e709b2c894eedb.png)

-   Print the results on the console.

    ![](media/e8508225cd87f1f61317010ad4cef74c.png)

02\. Math Operations
---------------

Write a JS function that takes **two numbers** and **a string** as an input.

The string may be one of the following: '**+**', '**-**', '**\***', '**/**',
'**%**', '**\*\***'.

Print on the console the result of the mathematical **operation** between **both
numbers** and the **operator** you receive as a string.

The **input** comes as **two numbers** and **a string argument** passed to your
function.

The **output** should be printed on the console.

### Examples

| **Input** | **Output** |   | **Input**    | **Output** |
|-----------|------------|---|--------------|------------|
| 5, 6, '+' | 11         |   | 3, 5.5, '\*' | 16.5       |

### Hints

-   Write a function which receives **three** arguments:

    ![](media/ff44a2ecf21a1bfe34f144173c48ee42.png)

-   Declare a variable named **result** that will keep your mathematical result.

-   Write down **switch** command that will take the string from your input and
    depending on it, perform the mathematical logic between the two numbers.

    ![](media/705c0eca70c50acfa158571868c96b6e.png)

-   Print the result on the console.

    ![](media/27fc0bb2eef3a9bbc8a301e7f1e4bed3.png)

03\. Sum of Numbers N…M
------------------

Write a JS function that takes two numbers **n** and **m** as an input and
**prints the sum** of all numbers from **n** to **m**.

The **input** comes as **two string elements** that need to be **parsed** as
numbers.

The **output** should **return** the **sum**.

### Examples

| **Input** | **Output** |
|-----------|------------|
| '1', '5'  | 15         |
| **Input** | **Output** |
| '-8', 20' | 174        |

### Hints

-   Write a function that receives two string arguments and parse them as
    numbers. Use **Number(string)** function or just put the '**+**' sign before
    the string.

![](media/6d4f6e55d6af9739470875930dba5656.png)

![](media/09437bafbd83c5f96a68adf404ae0e43.png)

-   Declare a variable named **result** that will keep the mathematical results.

-   Write a **for** loop from **num1** to **num2** and for every turn of the
    cycle, until it’s completed, add the current value.

    ![](media/3ea5859d7a7775d5c39f0258eba0451d.png)

-   Finally, return the result.

    ![](media/af5d8132367920357ec5f404ef692276.png)

04\. Largest Number
--------------

Write a function that takes **three number arguments** as an input and find the
**largest** of them. Print the following text on the console: '**The largest
number is {number}.**'.

The **input** comes as **three number arguments** passed to your function.

The **output** should be printed to the console.

### Example

| **Input**      | **Output**                |
|----------------|---------------------------|
| 5, -3, 16      | The largest number is 16. |
| **Input**      | **Output**                |
| \-3, -5, -22.5 | The largest number is -3. |

### Hints

-   Write a function that receives three number arguments.

-   Declare a variable named **result** that will keep the result.

    ![](media/a1400d8af453492768d71718006d8120.png)

-   Make several checks to find out the largest of the three numbers. Start with
    num1.

    ![](media/f45241a31bb340c128a4c185a9067999.png)

-   Do the same for the others.

    ![](media/8bc348af8fda45a54aa85fe5b0d2dbd9.png)

-   Print the result on the console.

    ![](media/f5f17ba2621c3e49113aa959962b57af.png)

05\.Circle Area
-----------

Write a function that takes **a single argument** as an input.

**Check the type** of the input argument. If it is a **number**, assume it is
the radius of a circle and **calculate the circle area**. Print the **area
rounded** to **two decimal places**.

If the argument type is **NOT** a number, print the following text on the
console:  
'**We can not calculate the circle area, because we receive a {type of
argument}.**'

The **input** comes as a **single argument** passed to your function.

The **output** should be printed on the console.

### Example

| **Input** | **Output** |   | **Input** | **Output**                                                         |
|-----------|------------|---|-----------|--------------------------------------------------------------------|
| 5         | 78.54      |   | 'name'    | We can not calculate the circle area, because we receive a string. |

### Hints

-   Write a function that receives a single argument.

-   Declare a variable named **result** that will keep your result.

    ![](media/047fd7285df4b53a2acc308ef4f83480.png)

-   Check the type of the input argument with the **typeof()** function.

    ![](media/827b58462b98c8985a9fbfe681b5ca75.png)

-   If the type is equal to **'number'**, calculate the circle area and print it
    on the console rounded to two decimal places. To do this, use the method
    **toFixed().**  
    The **Math.pow()** function returns the base to the exponent power, that
    is, base exponent. You can find more information about the area
    [here](https://en.wikipedia.org/wiki/Circle):

    ![](media/4667bd1e2f1727e15f0daf8b90ec23d1.png)

-   If the type is **NOT** a **'number'**, print the following text on the
    console:

    ![](media/e98a6f4482d0698c6f692a04f7b1d2cc.png)

06\. Square of Stars
---------------

Write a function that **prints a rectangle** made of **stars** with variable
**size**, depending on an input parameter. If there is **no parameter**
specified, the rectangle should **always** be of **size 5**. Look at the
examples to get an idea.

The **input** comes as a single **number** argument.

The **output** is a series of lines printed on the console, forming a rectangle
of variable size.

### Examples

| **Input** | **Output** |   | **Input** | **Output**  |   | **Input** | **Output**                                                                 |   | **Input** | **Output**                                                                 |
|-----------|------------|---|-----------|-------------|---|-----------|----------------------------------------------------------------------------|---|-----------|----------------------------------------------------------------------------|
| 1         | \*         |   | 2         | \* \* \* \* |   | 5         | \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* |   |           | \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* |

07\. Day of Week
-----------

Write a function that prints a number between 1 and 7 when a **day of the week**
is passed to it as a string and an **error message** if the string is **not
recognized**.

The **input** comes as a single string argument.

The **output** should be returned as a result.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
|-----------|------------|---|-----------|------------|---|-----------|------------|
| Monday    | 1          |   | Friday    | 5          |   | Invalid   | error      |

08\. Aggregate Elements
------------------

Write a program that performs different operations on an array of elements.
Implement the following operations:

-   **Sum(ai)** - calculates the sum all elements from the input array

-   **Sum(1/ai)** - calculates the sum of the inverse values (1/ai) of all
    elements from the array

-   **Concat(ai)** - concatenates the string representations of all elements
    from the array

The **input** comes as an array of number elements.

The **output** should be printed on the console on a new line for each of the
operations.

### Examples

| **Input** | **Output**   |   | **Input**     | **Output**      |
|-----------|--------------|---|---------------|-----------------|
| [1, 2, 3] | 6 1.8333 123 |   | [2, 4, 8, 16] | 30 0.9375 24816 |

10\. \*Words Uppercase
-----------------

Write a program that **extracts all words** from a passed in string and converts
them to **upper case**. The extracted words in upper case must be printed on a
single line separated by **", "**.

The **input** comes as a single string argument - the text to extract and
convert words from.

The **output** should be a single line containing the converted string.

### Examples

| **Input**          | **Output**        |   | **Input** | **Output** |
|--------------------|-------------------|---|-----------|------------|
| 'Hi, how are you?' | HI, HOW, ARE, YOU |   | 'hello'   | HELLO      |

### Hints

-   You may need to use a [Regular
    Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    or alternatively check for all delimiters that can be found in a sentence
    (ex. ",", " ", "!", "?" and so on).
