01\. Animal Sanctuary 
-----------------

*You work in an animal sanctuary and every day you receive encrypted information
about the animals that need help.*

Create a program that decrypts messages about animals, their kind and the
country they are in. You will be given a number **n** – the number of **lines**,
which you will receive. Afterwards on the next **n lines**, you will receive the
**messages**. You are looking for:

-   **animalName**

    -   contains **any ASCII character except for ";”**

-   **animalKind**

    -   contains **any ASCII character except for “;”**

-   **animalCountry**

    -   contains **only letters and spaces**

A **valid** message is in the following **format**:
**"n:{animalName};t:{animalKind};c--{animalCountry}"**

The **output names, kinds** and **countries** of the animals should contain
**only letters** and **white spaces. For example:**  
"**K\@o\$5a\#la Be\^4a5r**" is a **valid** match, but we need to print only –
"**Koala Bear**". After each **valid message**, you should print a line in the
format:

"**{animalName} is a {animalKind} from {country}"**

You need to know the **total weight** of **all** the **animals.** The weight of
**each animal alone** is **calculated** by the **sum** of **every digit** in the
**name** and the **kind** of **the animal**. In the end print a line in the
following **format** with the following **message**:

**"Total weight of all animals is {weight}KG"**.

Input / Constraints
-------------------

-   First line will be a number **n** in range [1…100].

-   The next **n** lines will be **strings**.

Output
------

-   Print each **valid** message in the format described above.

-   Print the **total weight** of **all animals**.

Examples
--------

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Output**                                                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| 3 n:M5%ar4\#le\@y;t:B3\#e!!a2\#2r;c--Australia n:G3e%6org34e;t:C€\$at2%;c--Africa n:AlicE:Won;c-India                                                                                                                                                                                                                                                                                                                                            | Marley is a Bear from Australia George is a Cat from Africa Total weight of animals: 34KG  |
| **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                            |
| The first two lines are valid matches and the third is not, because it is not in the right format. We take the digits in the names and kinds of the two valid matches - M**5**%ar**4**\#le\@y, B**3**\#e!!a**2**\#**2**r, G**3**e%**6**or**34**ge, C€\$at**2**% - 5 + 4 + 3 + 2 + 2 + 3 + 6 + 3 + 4 + 2 = 34. After each of the valid lines, we print the appropriate message. In the end we print the total weight of all animals, which is 34. |                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                            |
| 4 n:Bo\^%4b35454bie\#\$;t:Ele5ph\#\$34a%nt;c--Africa n:Honey;t:Ti\^\^5ger;c--India bla;t:1234a;c--America n:A\#\$\@545n;t:Cat241\$\@\#23;cGermany                                                                                                                                                                                                                                                                                                | Bobbie is a Elephant from Africa Honey is a Tiger from India Total weight of animals: 42KG |

02\. Practice sessions
--------------

*The racers must practice for the race. Your job is to keep the records of the
roads and the time for each lap. The track with the best time will be the chosen
one for the finals.*

Write a program, that keeps information about **roads** and **the racers** who
practice on them. When the practice begins, you’re going to start receiving data
until you get the "**END**" message. There are three possible commands:

-   "Add-\>{road}-\>{racer}"

    -   Add the **road** if it **doesn't exist** in your collection and add the
        **racer** to it.

-   "Move-\>{currentRoad}-\>{racer}-\>{nextRoad}"

    -   Find the **racer** on the **current road** and move him to the **next
        one,** only if he **exists** in the **current road.** Both roads will
        always be **valid** and will **already exist**.

-   "Close-\>{road}"

    -   Find the **road** and **remove** it from the sessions, **along with**
        the **racers** on it **if it exists**.

In the end, print all of the **roads** with the **racers** who have practiced
and **ordered by the count of the racers in descending order**, **then by** the
**roads** in **ascending** order. The output must be in the following format:

**Practice sessions:**

**{road}**

**++{racer}**

**++{racer}**

**++{racer}**

………………………..

Input / Constraints
-------------------

-   You will be receiving lines of information in the format described above,
    until you receive the **"END"** command.

-   The input will always be in the right format.

-   Both **roads** from the "**Move**" command will always be **valid** and you
    don't need to check them explicitly.

Output
------

-   Print the **roads** with their **racers** in the **format described above**.

Examples
--------

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Output**                                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Add-\>Glencrutchery Road-\>Giacomo Agostini Add-\>Braddan-\>Geoff Duke Add-\>Peel road-\>Mike Hailwood Add-\>Glencrutchery Road-\>Guy Martin Move-\>Glencrutchery Road-\>Giacomo Agostini-\>Peel road Close-\>Braddan END                                                                                                                                                                                                                                                                                    | Practice sessions: Peel road ++Mike Hailwood ++Giacomo Agostini Glencrutchery Road ++Guy Martin                                                 |
| **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                 |
| We add racers to the roads they are racing on. When we receive the "**Move**" command, we **check** if **Giacomo Agostini** is on **Glencrutchery Road** and if he is, we **remove** him from it and **add** him to the next one - **Peel road**. When we receive the "**Close**" command, we **remove** Brandon road and **remove** all its records. In the end we print the **roads sorted** by the **count** of **racers** on them and **then by** the **names** of the **roads** in **ascending order**. |                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                 |
| Add-\>Glen Vine-\>Steve Hislop Add-\>Ramsey road-\>John McGuinness Add-\>Glen Vine-\>Ian Hutchinson Add-\>Ramsey road-\>Dave Molyneux Move-\>Ramsey road-\>Hugh Earnsson-\>Glen Vine Add-\>A18 Snaefell mountain road-\>Mike Hailwood Add-\>Braddan-\>Geoff Duke Move-\>A18 Snaefell mountain road-\>Mike Hailwood-\>Braddan Move-\>Braddan-\>John McGuinness-\>Glen Vine Close-\>A18 Snaefell mountain road END                                                                                             | Practice sessions: Braddan ++Geoff Duke ++Mike Hailwood Glen Vine ++Steve Hislop ++Ian Hutchinson Ramsey road ++John McGuinness ++Dave Molyneux |

Problem 03. Activation Keys
--------------------

*Stamat got his games from the winter sale, but the keys he got to activate them
do not work. He needs to make them in the correct format in order to get his
games.*

You will receive **one line** with the keys of the games, divided by **"&"**.
You will have to see if the keys are valid. A valid key contains only
**numbers**, **letters** and is **16 or 25 symbols long**.

In order to fix the keys, you first have to **put dashes** (**'-'**) in them. If
the key is **16 symbols long**, you should divide it into **four groups of four
symbols**. If the key is **25 symbols long**, you have to divide it in **five
groups of five symbols**. Then you have to make **all the letters** in the key
**uppercase**. The last thing you have to do is to take **every digit** from the
key, **subtract it from nine (9)**, and replace it with the new digit you have.

In the end you have to print all the keys, joined by **", "**.

### Input

One line with all the keys, divided by **"&"**.

### Output

One line with all the valid keys, joined by **", "**.

### Examples

| **Input**                                                                                                    | **Output**                                                                                   | **Comment**                                                                                |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| t1kjZU764zIME6Dl9ryD0g1U8&-P4\*(\`Q\>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs | T8KJZ-U235Z-IME3D-L0RYD-9G8U1, RG06-BXGK-MILW-811M, KROG-F8PR-UDXD-A5LN, U6WH-0KXP-Y9SN-CCFS | First you find the dividers '&' and then you take all the valid inputs (colored in yellow) |
| xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.\@/HZCbbV++1o]V+oG\@\@fF\^93&y6fT5EGFgZHqlFiS                                | XPT1V-YHUDA-LILWL-VB3UM-SGEEF, Y3FT-4EGF-GZHQ-LFIS                                           |                                                                                            |
