Exercise: DOM
=============

Problems for in-class lab for the ["JS Advanced" Course
\@SoftUni"](https://softuni.bg/courses/js-advanced). Submit your solutions in
the SoftUni judge system at
<https://judge.softuni.bg/Contests/1802/Exercise-DOM>

01\. Chat Room
---------

Write a **function** to create the functionality of **a chat room.**

![](media/0e2a59bbb508402afc49757f8d197ebf.png)

**Note: Do not forget** to **add event listener** to the **send button!**

**The new div element with class message my-message** should contain the current
message that is about to be send.

The **current div** should be appended to the div with an
**id="chat_messages".**

*The input should be cleared on each click of the send button.*

![](media/baf07bd1673b3da60c3e86c96e4bee44.png)

![](media/51979a05c8ef4255763386726b98e5ae.png)

02\. Number Convertor
----------------

Write a function that **converts** a **decimal number** to **binary** and
**hexadecimal**.

![](media/942b2b55069b7c2c21e88df353b651c1.png)

The given number will always be in **decimal format.** The "**From**" select
menu will only have a

**Decimal** option, but the "**To"** select menu will have **two options**:
**Binary** and **Hexadeicmal**.

This means that our program should have the functionality to **convert decimal**
to **binary** and

**decimal** to **hexadecimal**.

Note that "**To" select menu** by default is empty. You have to insert the two
options (**'Binary'** and **'Hexadecimal'**) inside before continue. Also they
should have **values** ('**binary**' and '**hexadecimal**').

-   When the [**Convert it**] button is **clicked**, the expected result should
    appear in the [**Result**] input field.

![](media/13caacdaf68f99f47a5ed564229f8e58.png)

![](media/ce17c9f9afff46a90ca92a8cc3d21f65.png)

03\. JavaScript Quizz
----------------

Write a function that has the functionality of a quiz.

![](media/484d31190d82c4b4e4b184c98c436ae8.png)

There are three **sections** that contain **one question and 2 possible
answers.**

**The right answer is only one!**

When one of the **list elements is clicked,** the next section **must appear (if
any…)**.

After all three questions have been answered, the **result div** must
**appear.** (Use **'none'** and **'block**' to hide and show the question
sections)

If all questions are answered correctly, you should prin the following message:  
"**You are recognized as top JavaScript fan!**"

Otherwise, just print "**You have {rightAnswers} right answers**".

The right answers are (**onclick, JSON.stringify() and A programming API for
HTML and XML documents**).

![](media/484d31190d82c4b4e4b184c98c436ae8.png)

![](media/78d2ce40443e82dbbc48fa3101c03c2e.png)

![](media/7df65863d6f32a83d791a2361ccb793e.png)

![](media/9e0e601320f2a8f015602113418e3b9a.png)

![](media/bad52370cabb5b0b620f7ddcd17704ea.png)

04\. Numpad Calculator
-----------------

Write a function that implements a calculator that has the following
functionalities:

![](media/4a980f1ffd74c7968678c802515710b3.png)

When one of **the buttons is clicked, its value** should be shown in the
"**Expression**" **field** (**\#expressionOutput**).

For instance, if we click on the button with value **9**, the expected result
should be:

![](media/68e97cbe58f25c2afc4b928a2872f3c4.png)

If the **current Expression** field (**\#expresisonOutput**) contains the whole
math expression (**left operand**, **operator** and **right operand**:
**Example: 9 + 2**), the expected result should be:

![](media/e91356eec0e745555888449103c3f93e.png)

When the **equal sign "=" is pressed, the result of that expression** should
appear in the **Result** field (**\#resultOutput**)

![](media/9611145eb99da88af01f04899400a8fe.png)

Otherwise, if we create an invalid expression such as "**99 +**" (**without
second/right operand**) and we hit the equal sign "**=**", the expected result
should be:

![](media/33692c2d2e37105d7a9aef0e12e09f3d.png)

The "**Clear**" button should **clear both Expression and Result fields
(\#expressionOutput** and **\#resultOutput)**

For instance, if we have the following expression:

![](media/72073d9b9e695d4e154be8d5289235e1.png)

And we press "**Clear**", the expected result should be:

![](media/167692c89cc3f5d331f5c129cb8f71bb.png)

05\. Order the names
---------------

Write a **function that orders names alphabetically**.

![](media/820766e128399dc7557041666e926833.png)

You will receive a **name of a student as an input**. When the "**Register**"
button is **clicked**, you should

add the given student name in the SoftUni Database, while **keeping** the
**alphabetial order**.

For instance, if we register **David,** his name should appear in the **D**
column.

![](media/a834e32369973d95f79d60d009402768.png)

![](media/528a6d81a734e16f4bbfac3df34f8936.png)

If you **receive more than one name with the same starting letter**, you should
**join all names** by a

comma and a space ("**,** ").

![](media/a32f6c2c4d0ee941485b3fabadb51a8f.png)

06\. Table - Search Engine
---------------------

Write a function that **searches** in a **table** by given input.

![](media/ad4cdc20b1fabf32f8c0dc092bfdb131.png)

When the "**Search**" **button** is **clicked**, go through all cells in the
table except for the first row (Student name, Student email and Student course)
and check if the given input has a match (check for both **full words** and
**single letters**).

If any of the rows contain the submitted string, add a **select class** to that
row. Note that more than one row may contain the given string.

Оtherwise, if there is no match, **nothing should happen**.

**Note:** After every search ("**Search**" button is clicked), **clear the input
field** and **remove all already selected classes** (if any) from the previous
search, in order for the **new search** to contain only the **new result**.

For instance, if we try to find **eva:**

![](media/76088691a2623d475fbd05c8d3c6eb67.png)

The result should be:

![](media/46fd9e800e417e6e20c71a3fe16838f1.png)

If we try to find all students who have email addresses in **softuni** domain,
the expected result should be:

![](media/150f81d811c9bfb80ea80517722df9e2.png)

07\. Shopping Cart
-------------

You will be given some products that you should be able to add to your cart.
Each product will have a **name, picture** and a **price**.

When the **"Add"** button is clicked, append the current product to the
**textarea** in the following format: **"Added {name} for {money} to the
cart.\\n"**.

When the button **"Checkout"** is clicked, calculate the **total money** that
you need to pay for the products that are currently in your cart. Append the
result to the **textarea** in the following format:

**"You bought {list} for {totalPrice}."**

The list should contain only the **unique products**, separated by **", "**. The
total price should be rounded to the second decimal point.

Also, after clicking over "**Checkout**" and every from above is done you should
**disable all buttons**. (You **can't** add products or checkout again, if once
checkout button is clicked)

### Examples

![](media/30fa505ca8c567babb6ec4475ede021b.png)

08\. Furniture
---------

You will be given some furniture as an **array of objects**. Each object will
have a **name**, a **price** and a **decoration factor**.

When the **"Generate" button is clicked**, add a **new row to the table** for
each piece of furniture with **image, name, price** and **decoration factor**
(code example below).

When the **"Buy"** button is clicked, get all **checkboxes that are marked** and
show in the **result textbox** the **names** of the piece of furniture that
**were checked**, separated by a **comma** and **single space** (**", "**) in
the following format: **"Bought furniture: {furniture1} {furniture2}…"**.

On the next line, print the total price in format: **"Total price:
{totalPrice}"** (formatted to the second decimal point). Finally, print the
average decoration factor in the format: **"Average decoration factor:
{decFactor}"**

### Input Example

**[{"name": "Sofa", "img":
"https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
"price": 150, "decFactor": 1.2}]**

### Examples

![](media/942f5517c445c7e6eee905e1ffe345cf.png)

![](media/d10391aae77a8e94cbf30d4c6400a7c4.png)

09\. Cards
-----

Write **a function** which **checks cards**, shows which one **is greater** and
**keeps history of all hands**.

![](media/3abc7550183aaf7b58749f3101c36114.png)

![](media/40fd552255dd05dcc207e4b14be6b0b4.png)

**Firstly, add click events** to **all cards**. When one of the cards is
clicked, the current background card must be changed with the
"**whiteCard.jpg**" picture (it is given in the skeleton) and the **card name
should be appended** to one of the **span** elements in the **div** with
**id="result".**

If a card **from the top side** is **clicked**, **append** the **card name** to
the **left span** (first empty **span**), otherwise **append** the card **name**
to the **right span** (second/last **span**).

![](media/3b13430d6642cc00e3aea873656230d1.png)

![](media/3e302b2deac0eef2cc95e51213db8282.png)

When **cards** from **both sides are selected, check** which one is **greater**.
The greater card should have border "**2px solid green**" and the lower card -
"**2px solid red"**.

![](media/4cb55d987d6d6e75c049da25a174d07a.png)

![](media/c1d0bf52c385531159593fb96e20433d.png)

You should **clear** the **span elements** which **hold the current card names**
when both are selected, and the winner is selected. **After every hand,** push
the current card names in the **history div** in the following format:

[{top side card name} vs {bottom side card name} ]

![](media/dd2470008dbd5f99b845c4064f9743b8.png)

10\. \*Sudomu
---------

Write a function that implements **SUDOMU** (**Sudoku inside the DOM**).

![](media/449e6407bd77aedcec50c8554147c63b.png)

The rules are simple and they are **the same** as the **typical sudoku game**
(for more information,

click
[here](https://sudoku.com/how-to-play/sudoku-rules-for-complete%20beginners/))

If the table is filled with the **right numbers**, and the "**Quick Check**"
button is **clicked**, the

expected result should be:

![](media/6f83b9a9e0d4dabaecc1de9d2eb0a859.png)

The table borer should be changed to: "**2px solid green".** The **text
content** of the **paragraph**

inside the **div** with an **id** "**check**" must be "**You solve it!
Congratulations!**"

The text color of that div must be **green.**

Otherwise, when the filled table **does not solve the sudomu,** the result
should be:

![](media/6da0771634556c2cdf5860268976fa1b.png)

The table border should be changed to: "**2px solid red**".

The **text content** of the **paragraph** inside the **div** with an **id**
"**check**" must be:

"**NOP! You are not done yet…**"

The text color of that div must be **red!**

The "**Clear**" button **clears the whole SUDOMU (removes all numbers)** and the
**paragraph**

**which contains the messages. It also removes the table border.**

![](media/449e6407bd77aedcec50c8554147c63b.png)
