01\. Cooking Masterclass
-------------

George is starting his own course, a Cooking Masterclass. So, he asked you to
**buy** the **needed items**. The number of **items** depends on **how many
students will sign up for the course**. The educational set for one student
consists of 1 package of **flour, 10 eggs and an apron**.

You will be given **George\`s budget**, the **number of students signed** and
the **prices of each item**. You have to help George **calculate** if the
**budget** is **enough to buy all of the items**, or how much more money he
needs.  
Because the **aprons** get dirty often, George should **buy 20% more**,
**rounded up** to the next integer. Also, every **fifth package of flour is
free**.

Input / Constraints
-------------------

The input data will consist of **exactly 5 lines**:

-   **budget** – **floating-point number** in **range [0.00…1,000.00]**

-   **students – integer in range [0…100]**

-   **price of flour** for a **package – floating-point number** in **range
    [0.00…100.00]**

-   **price of egg** for a **single egg – floating-point number** in **range
    [0.00…100.00]**

-   **price of apron** for a **single apron – floating-point number** in **range
    [0.00…100.00]**

The **input data will always be valid**. **There is no need to check it
explicitly**.  
\* If you are using JavaScript, you receive the input as an array with 5
elements: **[budget, students, flour, egg, apron]**

Output
------

The output should be printed on the console.

-   If the calculated price of the items **is less or equal to the budget**:

    -   "**Items purchased for {the cost of the items}\$.**"

-   If the calculated price is more than the budget:

    -   "**{neededMoney}\$ more needed.**"

-   **All prices** must be **rounded to two digits after the decimal point.**

Examples
--------

| **Input**          | **Output**                   | **Comments**                                                                                                                                                                                                                |
|--------------------|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 50 2 1.0 0.10 10.0 | Items purchased for 34.00\$. | Needed items for 2 students : apronPrice \* (students + 20%) + eggPrice \* 10 \* (students) + flourPrice \* (students - freePackages) 10 \* (3) + 0.10 \* 10 \* (2) + 1 \* (2) = 34.00 34.00 \<= 50 – the budget is enough. |
| **Input**          | **Output**                   | **Comments**                                                                                                                                                                                                                |
| 100 25 4.0 1.0 6.0 | 410.00\$ more needed.        | Needed items for 25 students: 6 \* 30 + 10 \* 25 + 4 \* 20 = 510.00 510 \> 100 – need 410\$ more.                                                                                                                           |

*... 36 Uses for baking soda, I love baking soda ...*

02\. Bread Factory
---------------

*As a young baker, you are baking the bread out of the bakery.*

You have **initial energy 100 and initial coins 100**. You will be given **a
string, representing the working day events**. Each event is separated with
**'\|'** (vertical bar): **"event1\|event2\|event3…"**

Each event contains event name or item and a number, separated by
dash(**"{event/ingredient}-{number}"**)

-   If the event is **"rest":** you gain energy, the number in the second part.
    But your energy **cannot exceed** your **initial energy (100)**. Print:
    **"You gained {0} energy."**.

    After that, print your current energy: **"Current energy: {0}."**.

-   If the event is **"order"**: You've earned some coins, the number in the
    second part. Each time you get an order, your **energy decreases with 30
    points.**

    -   If you have energy to complete the order, print: **"You earned {0}
        coins."**.

    -   If your energy drops below 0, you **skip the order** and **gain 50
        energy points**. Print: **"You had to rest!"**.

-   In any other case you are having an ingredient, you have to buy. The second
    part of the event, contains the coins you have to spent and remove from your
    coins.

    -   If you are not bankrupt **(coins \<= 0)** you've bought the ingredient
        successfully, and you should print (**"You bought {ingredient}."**)

    -   If you went bankrupt, print **"Closed! Cannot afford {ingredient}."**
        and your bakery rush is over.

If you managed to handle all events through the day, print on the next three lines:

**"Day completed!"**, **"Coins: {coins}"**, **"Energy: {energy}"**.

Input / Constraints
-------------------

You receive a string, representing the working day events, separated with
**'\|'** (vertical bar): **" event1\|event2\|event3…"**.

Each event contains event name or ingredient and a number, separated by
dash(**"{event/ingredient}-{number}"**)

Output
------

Print the corresponding messages, described above.

Examples
--------

| **Input**                                                                | **Output**                                                                                                                                                    |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| rest-2\|order-10\|eggs-100\|rest-10                                      | You gained 0 energy. Current energy: 100. You earned 10 coins. You bought eggs. You gained 10 energy. Current energy: 80. Day completed! Coins: 10 Energy: 80 |
| **Input**                                                                | **Output**                                                                                                                                                    |
| order-10\|order-10\|order-10\|flour-100\|order-100\|oven-100\|order-1000 | You earned 10 coins. You earned 10 coins. You earned 10 coins. You bought flour. You had to rest! Closed! Cannot afford oven.                                 |

*... 1 package (1/4 ounce) active dry yeast*

*2-1/4 cups warm water (110° to 115°)*

*3 tablespoons sugar*

*1 tablespoon salt*

*2 tablespoons canola oil*

*6-1/4 to 6-3/4 cups all-purpose flour ...*

03\. Cooking Factory
--------------

The George\`s Cooking factory got another order. But this time you are tasked to
bake  
**the best Bread for a special party**.

Until you receive a command "Bake it!" you will be receiving strings, the
batches of bread. Each string is an **array of numbers, split by "\#".** Each
element is a **bread and the number represent its quality.**

You should select the batch with the **highest total quality of bread**.

If there are several batches with **same total quality** select the batch with
the **greater average quality.**

If there are several batches with same **total quality and average quality,
take** the one with the **fewest elements (length)**.

Input / Constraints
-------------------

-   Until you receive a command "Bake it!" you will be receiving strings, the
    batches of bread. Each string is an **array of numbers, split by "\#".**
    Each element is a **bread and the number represent its quality.**

-   Each batch will have from 1 to 10 elements.

-   Bread quality is an integer in the range [-100, 100].

Output
------

-   After you receive the last command **"Bake It!"** you should print the
    following message:

    "Best Batch quality: {bestTotalQuality}"

    "{bread batch, joined by space}"

 Examples
---------

| **Input**                                 | **Output**                        | **Comments**                                                                                                                                           |
|-------------------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| 5\#4\#10\#-2 10\#5\#2\#3\#2 Bake It!      | Best Batch quality: 22 10 5 2 3 2 | We receive 2 batches, but the second is printed, because its total quality is better**.**                                                              |
| **Input**                                 | **Output**                        | **Comments**                                                                                                                                           |
| 5\#3\#2 10\#2\#-2\#1\#-1 4\#2\#1 Bake It! | Best Batch quality: 10 5 3 2      | We receive 3 sequences. Both 1 and 2 **have same total quality** -\> 10, but the first is printed, because its **has better average quality 3.(333).** |

... Kaminoans: Diet – unknown …
