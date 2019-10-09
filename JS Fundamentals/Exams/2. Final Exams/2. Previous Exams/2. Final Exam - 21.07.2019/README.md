01\. String Manipulator
--------------

Create a program that executes **changes over** a **string**. First, you
**start** with an **empty string**, then you **receive commands**.

You will be receiving **commands** until the "**End**" command. There are
**five** possible commands:

-   **"Add {string}"**

    -   **Concatenate {string} to the string**.

-   "**Upgrade {char}"**

    -   Find **all occurences** of **{char}** and **replace** it with **its ASCII code plus one**.

-   "**Print"**

    -   **Print** the **string**.

-   "**Index {char}"**

    -   Find the **all indeces where {char}** occurs, then **print** them
        separated by a space. If no occurences - print "**None**".

-   "**Remove {string}"**

    -   **Remove all occurrences** of **{string}** from the string.

Input
-----

-   On each **line**, until the **"End"** command is received, you will be
    receiving commands.

-   All commands are case **sensitive**.

-   The **input** will **always** be **valid**.

Output
------

-   **Print** the **output** of every **command** in the **format described
    above**.

Examples 
---------

| Input | Output |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Add abracadabra  Print  Upgrade a  Print  Index b  Remove bbrb  Print  End | Berg reached the capacity!  Users count: 3  Clark - 8  Mark - 9  Kevin - 1 |

02\. Emoji Sumator
------------

Create a program, that finds all of the **emojis** in **a given message** and
makes some calculations. You will receive a few lines of input**.** On the
**first line**, you will receive a single **line of text (ASCII symbols).** On
the **next line**, you will receive an **emoji code** in the following format:

"**number:number:number:(…)**"

**Each number is the value of an ASCII symbol** and if you decrypt **all of the
symbols**, you will receive a name of an emoji.

An emoji is **valid** when:

-   It is surrounded by **colons and consists of at least 4 lowercase letters**
    from the English alphabet.

-   **Before** the emoji there is a **white space** and **after it** there is a
    **white space or any of the following punctuation marks:** '**,**', '**.**',
    '**!**', '**?**'.

**Example for valid emojis:**

I hope you have a **`:sunny:`** day **`:smiley:`** **`:smiley:`**.

You must find all of the emojis and after that, calculate their total power. It
is calculated **by summing the ASCII value of all letters between the colons**.

**Check** if any of the valid **emoji names is equal to the name** received form
**the emoji code** and **if it is – multiply the total emoji power by 2**.

In the end print on the console all valid emojis, **separated by а comma and a
white space in order of finding** and the total emoji power, each on a separate
line.

**Example:**  
**Emojis found: **`:sunny:`**, **`:smiley:`**, **``:smiley:``**  
**Total Emoji Power: {sum}**

Input / Constraints
-------------------

-   On the first line – the message. **There can be any ASCII character inside
    the input.**

-   Punctuation marks used will be only '**,**', '**.**', '**!**', '**?**'.

-   A valid emoji consists of at least **4 lowercase letters surrounded by
    colons**.

Output
------

-   **Print all found emojis, separated by a comma and whitespace.**

-   **Print the sum of all emojis’ power.**  
    

Examples
--------

| Input | Output | Comment |
|-------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hello I am Mark from `:England:` and I am `:one:` `:seven:` years old, I have a `:hamster:` as pet.  `115:101:118:101:110` | Hello I am Mark from `:England:` and I am `:one:` `:seven:` years old, I have a `:hamster:` as pet.  `115:101:118:101:110` | The only valid emojis here are `:seven:` and `:hamster:` because they are longer than 3 symbols and consist only of lowercase letters. `:England:` is not a valid emoji because of the upper case ‘E’. `:one:` is not a valid emoji because it is shorter than 4 symbols. Then we sum all letters’ ASCII value\: ‘h’ = 104, ‘a’ = 97, ‘m’ = 109, ‘s’ = 115, ‘t’ = 116, ‘e’ = 101, ‘r’ = 114. Total for `:hamster:` is 756. Total for `:seven:` is 545. The total power is 1301. After that we check if the emoji code corresponds to any emoji, and in this case it does correspond to `:seven:`, so we multiply the total emoji power and in the end it is 2602. |
| In the Sofia Zoo there are many animals, such as `:tiger:`, `:elephan:`\`t, `:monk3y:`, `:goriLLa:`, `:fox:`.  `97:101:117:114` | Total Emoji Power: 0 |  |

03\. Feed the Animals
-------------------------

*The sanctuary needs to provide food for the animals and feed them, so your task
is to help with the process*

Create a program that organizes the **daily feeding** of **animals**. You need
to keep information about **animals**, their **daily food limit** and the
**areas** of the Wildlife Refuge **they live in**. You will be receiving
**lines** with commands until you receive the **"Last Info"** message. There are
two **possible** commands:

-   **"Add:{animalName}:{dailyFoodLimit}:{area}":**

    -   **Add** the **animal** and **its daily food limit** to your records. It
        is guaranteed that the **names** of the animals are **unique** and there
        will **never** be animals with the **same** name. **If** it already
        **exists**, just increase the value of the **daily food limit** with the
        **current** one that is **given**.

-   **"Feed:{animalName}:{food}:{area}":**

    -   **Check** if the animal **exists** and if **it does**, **reduce** its
        daily **food limit** with the given **food for feeding**. If its
        **limit** reaches **0** or **less**, the **animal** is considered
        **successfully fed** and you need to **remove** it from your **records**
        and **print** the following **message**:

        -   **"{animalName} was successfully fed"**

You need to know **the count of hungry animals** there are left in **each area**
in the end. If an animal has daily food **limit above 0**, it is considered
**hungry**.

In the end, you have to **print each animal** with its **daily** food **limit**
sorted in **descending order** by the **daily food limit** and **then by** its
**name** in **ascending** order in the following format:

**Animals:**

**{animalName} -\> {dailyFoodLimit}g**

**{animalName} -\> {dailyFoodLimit}g**

Afterwards, **print** the **areas** with the **count of animals**, which are
**not fed** in **descending** order by the **count** of **animals.** If an
**area** has **0 hungry animals** in it, **don't** print it. The **output** must
be in the following **format**:

**Areas with hungry animals:**

**{areaName} : {countOfUnfedAnimals}**

**{areaName} : {countOfUnfedAnimals}**

Input / Constraints
-------------------

-   You will be receiving lines until you receive the **"Last Info"** command.

-   The **food** comes in **grams** and is an **integer** number in the range
    [1...100000].

-   The input will **always** be **valid**.

-   There will never be a case, in which an animal is in two or more areas at
    the same time.

Output
------

-   Print the appropriate message after the **"Feed"** command, **if** an
    **animal** is **fed**.

-   Print the animals with their **daily food limit** in the **format**
    described above.

-   Print the **areas** with the **count of unfed animals** in them in the
    **format** described above.

Examples
--------

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **Output**                                                                                                                                                                |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Add:Maya:7600:WaterfallArea Add:Bobbie:6570:DeepWoodsArea Add:Adam:4500:ByTheCreek Add:Jamie:1290:RiverArea Add:Gem:8730:WaterfallArea Add:Maya:1230:WaterfallArea Add:Jamie:560:RiverArea Feed:Bobbie:6300:DeepWoodsArea Feed:Adam:4650:ByTheCreek Feed:Jamie:2000:RiverArea Last Info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Adam was successfully fed Jamie was successfully fed Animals: Maya -\> 8830g Gem -\> 8730g Bobbie -\> 270g Areas with hungry animals: WaterfallArea : 2 DeepWoodsArea : 1 |
| **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                           |
| First, we receive the "**Add**" command, so we **add** "**Maya**" to our **records** and we keep her **daily food limit** - **7600**. We know that she is in **WaterfallArea**. We keep adding the new animals until we receive "**Maya**" **again** and we have to **increase** her food **limit** with **1230**, so it becomes **8830**. After that we receive "**Jamie**" and we need to **increase** his daily food **limit** with **560**, after which it **becomes 1850**. Then we start receiving "**Feed**" commands. First, we must **decrease Bobbie's** food **limit** with **6300**, so it becomes **270**. Then, we need to decrease **Adam's** food **limit** with **4650**. It **becomes less than zero** and we **remove him** from the collection – he is **considered fed**, respectively that is **one less hungry animal** in the **area** that he is in – **ByTheCreek**. Then we "**Feed**" **Jamie** with **2000** and his **limit** becomes **less than zero**, so we print "**Jamie was successfully fed**" and we **remove** him from our records and note that there is **one less hungry animal** in his area – **RiverArea**. In the end, we **print the animals** we still have in our collection, with their daily food **limits** in **descending order** by the food **limits**. Afterwards we print only the **areas** in which there are **remaining hungry animals** and their **count** in **descending** order. |                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                           |
| Add:Bonie:3490:RiverArea Add:Sam:5430:DeepWoodsArea Add:Bonie:200:RiverArea Add:Maya:4560:ByTheCreek Feed:Maya:2390:ByTheCreek Feed:Bonie:3500:RiverArea Feed:Johny:3400:WaterFall Feed:Sam:5500:DeepWoodsArea Last Info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Sam was succesfully fed Animals: Maya -\> 2170g Bonie -\> 190g Areas with hungry animals: RiverArea : 1 ByTheCreek : 1                                                    |
