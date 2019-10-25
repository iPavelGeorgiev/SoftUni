**Lab: DOM Manipulations**

Problems for in-class lab for the ["JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/js-advanced)*"*. Submit your solutions in
the SoftUni judge system at
<https://judge.softuni.bg/Contests/1549/Lab-DOM-Manipulation>.

01\. List of Items
------------

Write a **function** that **reads** the **text** inside an input field and
**appends** the specified text to a list inside an HTML page.

Submit **only** the **addItem()** function in judge.

**Input/Output**

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

**Examples**

![](media/ab0e1e3b8a5f28bf996fa5339d632319.png)

![](media/d6510e9dd89126bb0e871a0f882c7131.png)

![](media/023d2f8837d7684b36b4767df9d41860.png)

02\. Add / Delete
-------------------

Extend the previous problem to display a **[Delete] link** after each list item.
**Clicking** it should **delete** the item with no confirmation.

Submit **only** the **addItem()** function in judge.

**Input/Output**

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

**Examples**

![](media/95668f19b4b3213b19c07f291cead0c5.png)

![](media/963f22af21cdc5554c60ff9359a75d6f.png)

03\. Delete from Table
---------------

Write a program that **takes** an **e-mail** from an **input field** and
**deletes** the matching row from a table. If no entry is found, an **error**
should be displayed in a **\<div\>** with ID "**results**". The error should be
"**Not found**." Submit **only** the **deleteByEmail()** function in judge.

**Input/Output**

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

**Examples**

![](media/96dca0cf4f8d19042fd4bf1d1bddf099.png)

![](media/160428435ee99aaa42f9bb07d6808698.png)

04\. Stopwatch
-------------

Write a **timer** that counts **minutes** and **seconds**. The user should be
able to control it with **buttons**. Clicking **[Start] starts** the
**counter.** Clicking **[Stop] resets** the timer back to **zero**. Only **one**
of the buttons should be **enabled** at a time (you cannot stop the timer, if it
is not running).

Submit only the **stopwatch()** function in judge.

**Input/Output**

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

**Examples**

![](media/4c38c6b36b5a47f564fe578fe2e0c4ee.png)

05\. Mouse Gradient
------------

Write a program that **detects** and **displays** how far along a gradient the
user has **moved** their **mouse**. The result should be **rounded down** and
displayed as a **percentage** inside the **\<div\>** with ID "**result**".

Submit **only** the **attachGradientEvents()** function in judge.

**Input/Output**

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

**Examples**

![](media/d7646cea933d9bd9f7c73b8286eba3b2.png)

06\. Highlight Active
------------

Write a **function** that **highlights** the **currently active** section of a
document. There will be **multiple** divs with **input fields** inside them. Set
the **class** of the **div** that contains the **currently focused** input field
to "**focus**". When focus is lost (**blurred**), **remove the class** from the
element.

Submit only the **focus()** function in judge.

**Input/Output**

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

**Example**

![](media/b04375ddf4d1d1c892e93368c7886eae.png)

![](media/f701595603a3672d5968f2c8a0ba2707.png)

07\. Dynamic Validation
--------------

Write a **function** that **dynamically validates** an **email** input field
when it is **changed**. If the input is **invalid**, apply the style
"**error**". Do **not** validate on every keystroke, as it is annoying for the
user, consider only **change** events.

A valid email is considered to be in the format:
**\<name\>\@\<domain\>.\<extension\>**

Only **lowercase Latin characters** are allowed for any of the parts of the
email. If the input is valid, **clear** the style. Submit **only** the
**validate()** function in judge.

**Input/Output**

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

**Example**

![](media/63c028a324a99d63bc01cc1ea8c6c823.png)

![](media/7a04f9aff0d78bbbcb74a54f061b0580.png)
