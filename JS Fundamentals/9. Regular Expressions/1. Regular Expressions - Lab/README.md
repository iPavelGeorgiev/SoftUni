Lab: Regular Expressions
========================

Problems for exercises and homework for the ["JS Fundamentals" course \@
SoftUni](https://softuni.bg/trainings/2343/js-fundamentals-may-2019)  
Please submit your solutions (source code) of all below described problems in
the [Judge
System.](https://judge.softuni.bg/Contests/1708/Regular-Expressions-Lab)

01\. Match Full Name
---------------

Write a JavaScript function to **match full names** from a list of names and
**print** them on the console.

### Writing the Regular Expression

First, write a regular expression to match a valid full name, according to these
conditions:

-   A valid full name has the following characteristics:

    -   It consists of **two words**.

    -   Each word **starts** with a **capital letter**.

    -   After the first letter, it **only contains lowercase letters
        afterwards**.

    -   **Each** of the **two words** should be **at least two letters long**.

    -   The **two words** are **separated** by a **single space**.

To help you out, we've outlined several steps:

1.  Use an online regex tester like <https://regex101.com/>

2.  Check out how to use **character sets** (denoted with square brackets -
    **"[]"**)

3.  Specify that you want **two words** with a space between them (the **space
    character** ' ', and **not** any whitespace symbol)

4.  For each word, specify that it should begin with an uppercase letter using a
    **character set**. The desired characters are in a range – **from 'A' to
    'Z'**.

5.  For each word, specify that what follows the first letter are only
    **lowercase letters**, one or more – use another character set and the
    correct **quantifier**.

6.  To prevent capturing of letters across new lines, put **"\\b"** at the
    beginning and at the end of your regex. This will ensure that what precedes
    and what follows the match is a word boundary (like a new line).

In order to check your RegEx, use these values for reference (paste all of them
in the **Test String** field):

| **Match ALL of these** | **Match NONE of these**                                                      |
|------------------------|------------------------------------------------------------------------------|
| Ivan Ivanov            | ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov |

By the end, the matches should look something like this:

![](media/e09192bc307f8c3b24871be4b6cfbb47.png)

After you’ve constructed your regular expression, it’s time to write the
solution in JavaScript.

### Implementing the Solution in JavaScript

Create a new JavaScript file and copy your **regular expression** into a
variable:

![](media/16228d2ce044d61922b417573ba49b8c.png)

Note: You should put **"/"** before and after the pattern so that it is
interpreted as a RegEx pattern. Also, place the **'g'** (global) flag after it,
so that you get all the matches in the text.

Now, it’s time to **read the input**, to **extract the matches** from it and
push them into an array. For this we can use **exec()**:

![](media/78ce3b7df23dd277ffd6692d28336b16.png)

The **exec** method matches the string and the pattern keeps the first index
after the match. This way the next time **exec** runs it starts looking after
the last match. If there are no more matches, it will return **null**.

We are declaring a variable in the while loop's condition because we need to
check every time if there are any more matches.

Now we have an array (**validNames**), which holds all of the valid names in the
input. All that is left is to **join** it by **space** and **print** it (do this
by using **join()**):

![](media/660b89acf493ddcb6526c9f7a7e9e3a3.png)

### Examples

| **Input**                                                                      |
|--------------------------------------------------------------------------------|
| "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov" |
| **Output**                                                                     |
| Ivan Ivanov Test Testov                                                        |

02\. Match Phone Number
------------------

Write a regular expression to match a **valid phone number** from **Sofia**.
After you find all **valid phones**, **print** them on the console, separated by
a **comma and a space ", "**.

### Compose the Regular Expression

A valid number has the following characteristics:

-   It starts with **"+359"**

-   Then, it is followed by the area code (always **2**)

-   After that, it’s followed by the **number** itself:

    -   The number consists of **7 digits** (separated in **two groups** of
        **3** and **4 digits** respectively).

-   The different **parts** are **separated** by **either a space or a hyphen**
    (**'-'**).

You can use the following RegEx properties to **help** with the matching:

-   Use **quantifiers** to match a **specific number** of **digits**

-   Use a **capturing group** to make sure the delimiter is **only one of the
    allowed characters (space or hyphen)** and **not** a **combination** of both
    (e.g. **+359 2-111 111** has **mixed delimiters**, it is **invalid**). Use a
    **group backreference** to achieve this.

-   Add a **word boundary** at the **end** of the match to avoid **partial
    matches** (the last example on the right-hand side).

-   Ensure that before the **'+'** sign there is either a **space** or the
    **beginning of the string**.

You can use the following table of values to test your RegEx against:

| **Match ALL of these**           | **Match NONE of these**                                                                            |
|----------------------------------|----------------------------------------------------------------------------------------------------|
| \+359 2 222 2222 +359-2-222-2222 | 359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 |

### Implement the Solution in JavaScript

Now it’s time to write the solution, so let’s start writing!

First, just like in the previous problem, put your RegEx in a variable:

![](media/bfde6185d803a2ab256417a3fe08f350.png)

After that, let’s make an array of matches using like in the previous exercise:

![](media/5e510200fb8a90bccf6cdde6e1107132.png)

Now let's print **all the matches**, separated by **", "**:

![](media/2df88ce772386a48cb06df55be0a5928.png)

### Examples

| **Input**                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------|
| "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222" |
| **Output**                                                                                                                           |
| \+359 2 222 2222, +359-2-222-2222                                                                                                    |

03\. Match Dates
-----------

Write a program, which matches a date in the format
**"dd{separator}MMM{separator}yyyy"**.

### Compose the Regular Expression

Every valid date has the following characteristics:

-   Always starts with **two digits**, followed by a **separator**

-   After that, it has **one uppercase** and **two lowercase** letters (e.g.
    **Jan**, **Mar**).

-   After that, it has a **separator** and **exactly 4 digits** (for the year).

-   The separator could be either of three things: a period (**"."**), a hyphen
    (**"-"**) or a forward slash (**"/"**)

-   The separator needs to be **the same** for the whole date (e.g.
    13**.**03**.**2016 is valid, 13**.**03**/**2016 is **NOT**). Use a **group
    backreference** to check for this.

You can follow the table below to help with composing your RegEx:

| **Match ALL of these**                | **Match NONE of these**               |
|---------------------------------------|---------------------------------------|
| 13/Jul/1928, 10-Nov-1934, 25.Dec.1937 | 01/Jan-1951, 23/sept/1973, 1/Feb/2016 |

Use **named capturing groups** for the **day**, **month** and **year**.

Since this problem requires more complex RegEx, which includes **named capturing
groups**, we’ll take a look at how to construct it:

-   First off, we don’t want anything at the **start** of our date, so we’re
    going to use a **word boundary "\\b"**:  
    

    ![](media/504fe948a43948d99108763ddd3d2962.png)

-   Next, we’re going to match the **day**, by telling our RegEx to match
    **exactly two digits**, and since we want to **extract** the day from the
    match later, we’re going to put it in a **capturing group**:  
    

    ![](media/636d2f40b126a77e08610b74b83b6f2c.png)

      
    We’re also going to give our group a **name**, since it’s easier to navigate
    by **group name** than by **group index**:  
    

    ![](media/345eced96170800c1fdea066efe49a41.png)

-   Next comes the separator – either a **hyphen**, **period** or **forward
    slash**. We can use a **character class** for this:  
    

    ![](media/d1d8f73dc3f548238e1a01dc5cfeb9d0.png)

      
    Since we want to use the separator we matched here to match the **same
    separator** further into the date, we’re going to put it in a **capturing
    group**:  
    

    ![](media/c873f4ce6c2873e153e92fe4ef5ebae5.png)

-   Next comes the **month**, which consists of a **capital Latin letter** and
    **exactly two lowercase Latin letters**:  
    

    ![](media/9427082767de65f342284ef3b4fa097b.png)

-   Next, we’re going to match the **same separator we matched earlier**. We can
    use a **backreference** for that:  
    

    ![](media/931db21583f6db5c6d1e00210bc7fbae.png)

-   Next up, we’re going to match the year, which consists of **exactly 4
    digits**:  
    

    ![](media/7198e9d16efbd275022fc8974520e81b.png)

-   Finally, since we don’t want to match the date if there’s anything else
    **glued to it**, we’re going to use another **word boundary** for the end:  
    

    ![](media/a6c710d1b5cc7c6956ef0bb6deaf5f17.png)

Now it’s time to find all the **valid dates** in the input and **print each
date** in the following format: **"Day: {day}, Month: {month}, Year: {year}"**,
each on a **new line**.

### Implement the Solution in JavaScript

First off, we’re going to put our RegEx in a variable and get the matches from
the string:

![](media/e95d5ce564846ac2b5e3dd324b1251a8.png)

Next, we’re going to **iterate** over every single **element** in the array and
**extract** the **day**, **month** and **year** by making new patterns and
matching them:

![](media/25e1701d794274b03ee634ed28fe0ed4.png)

### Examples

| **Input**                                                                                       |
|-------------------------------------------------------------------------------------------------|
| "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"                  |
| **Output**                                                                                      |
| Day: 13, Month: Jul, Year: 1928 Day: 10, Month: Nov, Year: 1934 Day: 25, Month: Dec, Year: 1937 |
