Lab: Objects and DOM
====================

Problems for in-class lab for the ["JavaScript Advanced" course \@
SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the
SoftUni judge system at <https://judge.softuni.bg/Contests/1801/Lab-DOM>

01\. Articles List
-------------

In this problem, you should create a JS functionality which creates articles and
appends them into some article section.

The programs in this language are called **scripts**. They can be written right
in the HTML and **executed automatically** as the page loads.

Scripts are provided and executed as a **plain text**. They don't need a special
preparation or a compilation to run.

In this aspect, JavaScript is very **different** from another language called
Java.

![](media/dfc90450c353c0f392378b5a1faf3425.png)

### Constraints:

-   **Title value** from the **title input** should be a **heading 3 element
    \<h3\>**

-   **Content text** from the **textarea element** should be a **paragraph
    \<p\>**

-   Both new created elements (**h3** and **p**) should be appended to a new
    **article element \<article\>**

-   **The current article element** should be **appended** to the section which
    has an id articles (**\#articles**)

-   You should create new **article element** only if **title** and **content
    are not empty**

-   After the button is pressed you must **clear** the **title value** and
    **text value**

![](media/01aa89879c0e43a1b3270dca4c00f684.png)

### Input:

![](media/65a423610b5d3dabb4ad8758dc9dca3a.png)

### Output:

![](media/a3971b5c2f551e069e888a17afa422cf.png)

![](media/3b0e920cd3558e128539e2781ca5e2f4.png)

02\. Format the Text
---------------

In this problem, you should **create a JS functionality** which **formats the
given text into paragraphs.**

![](media/f3126dbeeeb64e08f38adb018ae15e4c.png)

![](media/5a4ca2a6cb05537a86b64bb6f1920d69.png)

When the [**Format**] button is **clicked**, you need to **format the text
inside** the **paragraph** with an **id** "**input**". The formatting is
**done** as **follows:**

-   You need to **create a new paragraph element which holds no more than 3
    sentences from the given input.**

-   If the given input contains **less** or **3 sentences**, you need to create
    only 1 paragraph, fill it with these sentences and append this paragraph to
    the div with an **id** "**output**".

Otherwise, when you have more than 3 sentences in that **input paragraph,** you
need to create enough paragraphs to get all sentences from the **input text.**

Just remember to **restrict** the **sentences** in **each paragraph to 3.**

### Example:

-   If the input paragraph **contains 2 sentences**, you need to create only **1
    paragraph** with these 2 sentences

-   If the input paragraph **contains 7 sentences,** you need to create **3
    paragraphs**  
    - The **first paragraph** must contain **the first 3 sentences**  
    - The **second paragraph** must contain **the other three sentences of the
    whole text**  
    - The **third paragraph** will contain **only the last sentence**, because
    there are no more sentences in this paragraph

**To find out how many sentences there are in the text, simply split the whole
text by '.' Also, every sentence must have at least 1 character.**

![](media/620395ddfdcf8cb4e7280c24a9e3a0ce.png)

![](media/812adebe91c995635988aa0f938c80df.png)

03\. Growing Word
------------

In this problem, you should **create a JS functionality** which **changes the
size and the color** of a given **paragraph** on **every click**.

![](media/0b40b57ab0c3212f569eaf5f5d3b125f.png)

![](media/18a03e30a67e8fafe1661b940057fdbc.png)

Every time when we **click** on the [**CHANGE**] button, **the color** and **the
size** of **the paragraph** which contains "**Growing Word**" **should change!**

**After every click,** the current paragraph *font size* should be **changed**
to the **current font size multiplied by 2.** Also, **the color** of that
paragraph should change, depending on the **previous color**.

### Example:

-   If we click **once**, the color should be changed to **blue** and the font
    size should be **2** (First initial size)

-   If we click **twice,** the color should be changed to **green** and the font
    size should be **4** (2 \* 2)

-   If we click **three times**, the current color of that paragraph should be
    changed to **red** and the font size should be **8** (4 \* 2)

-   If our paragraph already has a **red color, on** the **next** click, the
    color should turn to **blue**. Just loop throw these three colors (blue,
    green, red) again and again and again... while you are clicking on that
    button.

![](media/722b73d86d67fee823caabbfc1c4f404.png)

![](media/235b9c307f7239a380cccc0c32c93966.png)

![](media/ea4467bcfa4a98296e94aee849f16dbb.png)

![](media/124644ae30bba0e9d70f332b506cf6ea.png)

![](media/77e92a9fccf286bc7f57e1479a9fb652.png)

![](media/6529964b08daae69f1b87e6ea2882eea.png)

04\. Visited Sites
-------------

In this problem, you should **create a JS functionality** that keeps track of
how many times a

specific site has been **visited**.

![](media/9ff43b6f8dfa7d85cb99588c7854fa80.png)

For instance, if we click **twice on the Gmail link and once on the YouTube
link**, the expected

result must be:

![](media/a991f83ecce13949aef9bcc8fcf2c63b.png)
