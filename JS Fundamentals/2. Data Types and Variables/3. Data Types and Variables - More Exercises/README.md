More Exercises: Data Types and Variables
========================================

Problems for more exercise for the ["JS Fundamentals" course \@
SoftUni](https://softuni.bg/trainings/2343/js-fundamentals-may-2019).  
Submit your solutions in the SoftUni judge system at:
[Data-Types-and-Variables-More-Exercise](https://judge.softuni.bg/Contests/1269/Data-Types-and-Variables-More-Exercise)

01\. Digits with Words
-------------

Write a **function** that receives a **digit** in the form of a **word** as
**string** and prints the **digit** as a **number**.

**Examples**

| **Input** | **Output** |
|-----------|------------|
| 'nine'    | 9          |
| 'two'     | 2          |
| 'zero'    | 0          |

**Hints**

Use a **switch** case.

02\. Prime Number Checker
-------------

Write a **function** to check if a number is **prime** (only wholly divisible by itself and one).

The **input** comes as a single number argument.

The **output** should be the return value of your function. Return **true** for
prime number and **false** otherwise.

**Examples**

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
|-----------|------------|---|-----------|------------|---|-----------|------------|
| 7         | true       |   | 8         | false      |   | 81        | false      |

**Hints**

You can find more information about prime numbers:
<https://en.wikipedia.org/wiki/Prime_number>

03\. Cone
-----------

Write a **function** to calculate a cone’s **volume** and **total surface area**
by given height and radius at the base.

The **input** comes as two number arguments. The first element is the cone’s
**radius** and the second is its **height**.

The **output** should be printed to the console on a **new line** for every
result. The result should be formatted to the **fourth decimal point**

**Examples**

| **Input** | **Output**                      |   | **Input** | **Output**                       |
|-----------|---------------------------------|---|-----------|----------------------------------|
| 3, 5      | volume = 47.1239 area = 83.2298 |   | 3.3, 7.8  | volume = 88.9511 area = 122.0159 |

**Hints**

You can use this online tool to check your results:
*http://www.calculatorsoup.com/calculators/geometry-solids/cone.php*

04\. Biggest of 3 Numbers
--------------

Write a **function** that finds the **biggest of 3 numbers**.

The **input** comes as 3 parameters.

The **output** is the **biggest** from the input numbers.

**Examples**

| **Input** | **Output** |   | **Input**  | **Output** |   | **Input**      | **Output** |
|-----------|------------|---|------------|------------|---|----------------|------------|
| \-2, 7, 3 | 7          |   | 130, 5, 99 | 130        |   | 43, 43.2, 43.1 | 43.2       |

05\. Binary to Decimal
-------------

Write a **function** that reads an 8-bit binary number and converts it to a decimal.

The **input** comes as one string element, representing a binary number.

The **output** should be printed to the console.

**Examples**

| **Input** | **Output** |   | **Input** | **Output** |
|-----------|------------|---|-----------|------------|
| 00001001  | 9          |   | 11110000  | 240        |

06\. Chess Board
-------------

Write a **function** to print a chessboard of size **n X n**. See the example for more information.

The **input** comes as a single number argument **n**.

The **output** should be returned as a result of your function in the form of a
string.

**Examples**

| **Input** | **Output**                                                                                                                                                                                                                                                                                                                                                                             |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3         | \<div class="chessboard"\> \<div\> \<span class="black"\>\</span\> \<span class="white"\>\</span\> \<span class="black"\>\</span\> \</div\> \<div\> \<span class="white"\>\</span\> \<span class="black"\>\</span\> \<span class="white"\>\</span\> \</div\> \<div\> \<span class="black"\>\</span\> \<span class="white"\>\</span\> \<span class="black"\>\</span\> \</div\> \</div\> |

07\. Triangle Area
----------

Write a **function** that calculates a **triangle’s area** by its 3 sides.

The **input** comes as three number arguments, representing one **side** of a triangle.

The **output** should be printed to the console.

**Examples**

| **Input** | **Output**   |
|-----------|--------------|
| 2, 3.5, 4 | 3.4994419198 |

**Hints**

Use [Heron’s formula](https://en.wikipedia.org/wiki/Heron%27s_formula) to obtain the result.
