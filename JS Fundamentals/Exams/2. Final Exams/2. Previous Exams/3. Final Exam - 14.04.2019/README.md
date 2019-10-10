01\. Arriving in Kathmandu
-------------------

*Your friend is a mountaineer and he needs your help. Your first task is to find
him, so you went to Kathmandu and found some notes at his quarters.*

Write a program that **decrypts messages**, which contain information about
coordinates. You are looking for **names of peaks** in the Himalayas and their
[geohash](https://en.wikipedia.org/wiki/Geohash) coordinates. Keep reading lines
until you receive the "**Last note**" message.

Here is your **cipher**:

-   **Name of the peak**

    -   It is consisted of **letters (upper and lower), numbers** and some of
        the following characters between its letters – "**!**" "**\@**" "**\#**"
        "**\$**" "**?**". Example for valid names: “!\@K?\#2!\#” (K2).

-   **The length of the geohashcode**

    -   Begins **after** the "**=**" (equals) sign and is consisted only of
        numbers.

-   **The geohash code**

    -   Begins after these symbols – "**\<\<**", may contain anything and the message always ends with it.

**Examples for valid input:**

"!Ma\$\$ka!lu!\@=9\<\<ghtucjdhs" – all the components are there – **name of the
peek**, **length** of the geohashcode and a **geohashcode**.

"!\@Eve?\#rest!\#=7\<\<vbnfhfg"

**Examples of invalid input:**

"anna\@fg\<\<jhsd\@bx!=4" – **their order is wrong**. The name should be first,
the length after and the code last.

"\#n...s!n-\<\<tyuhgf4" – **the length is missing** and the **name contains
dots.**

**"**Nan\$ga!Parbat=8\<\<gh2tn – **the length** of the geohash code doesn't
match the given number.

The **geohash code** you are looking for is with **length exactly** as much as
the **given length** in the message and the information must be in the **exact
given order**, otherwise it is considered **invalid**. If you find it, print the
following message:

"**Coordinates found! {nameOfMountain} -\> {geohashcode}**"

Otherwise print: “**Nothing found!**” after every **invalid** message.

Input / Constraints
-------------------

-   You will be receiving strings until you get the “**Last note**” message.

Output
------

-   If you find the right coordinates, print: "**Coordinates found!
    {nameOfMountain} -\> {geohashcode}**".

-   If the message is invalid, print: "**Nothing found!**".

Examples
--------

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **Output**                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| !\@Ma?na?sl!u\@=7\<\<tv58ycb4845 E!ve?rest=.6\<\<tuvz26 !K\@2.,\#\#\$=4\<\<tvnd !Shiha\@pan\@gma\#\#9\<\<tgfgegu67 !\#\#\#Anna\@pur\@na\#\#=16\<\<tv5dekdz8x11ddkc Last note                                                                                                                                                                                                                                                                                           | Nothing found! Nothing found! Nothing found! Nothing found! Coordinates found! Annapurna -\> tv5dekdz8x11ddkc |
| **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                               |
| The first line is invalid, because the length – **7**, **doesn't match** the **length** of the **code**. The second line is invalid, because the **length** should be consisted **only** of **numbers**. The third line is invalid, because the name contains **symbols** that are **not** allowed – **".", ",".** The forth line is invalid, because the **"="** sign before the length is **missing**. The fifth line is valid, so we print the appropriate message. |                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                               |
| Ka?!\#nch\@\@en\@ju\#\#nga\@=3\<\<thfbghvn =9Cho?\@\#Oyu\<\<thvb7ydht Nan??ga\#Par!ba!t?=16\<\<twm03q2rx5hpmyr6 Dhau??la\#gi\@ri?!\#=3\<\<bvnfhrtiuy Last note                                                                                                                                                                                                                                                                                                         | Nothing found! Nothing found! Coordinates found! NangaParbat -\> twm03q2rx5hpmyr6 Nothing found!              |

02\. On the Way to Annapurna
-----------------------

*You’ve hired a Sherpa and he has a list of supplies you both need to go on the
way. He has passed you some notes and you have to order them correctly in a
diary before you start circling around the town’s stores.*

Create a program, that lists **stores** and the **items** that can be found in
them. You are going to be receiving **commands** with the information you need
until you get the "**End**" command. There are **three possible commands**:

-   "**Add**-\>{Store}-\>{Item}"

    -   **Add** the **store** and the **item** in your diary. If the store
        already **exists**, add just the item.

-   **"Add**-\>{Store}-\>{Item},{Item1}…,{ItemN}"

    -   **Add the store and the items to** your notes. **If the store already
        exists** in the diary – **add just the items** to it.

-   "**Remove**-\>{Store}"

    -   **Remove the store** and its items from your diary, **if it exists**.

In the end, print the collection **sorted by the count of the items** in
**descending order** and **then by the names of the stores**, again, **in
descending order** in the following format:

**Stores list:**

**{Store}**

**\<\<{Item}\>\>**

**\<\<{Item}\>\>**

**\<\<{Item}\>\>**

Input / Constraints
-------------------

-   You will be receiving information until the “**END**” command is given.

-   There will always be **at least one** store in the diary.

-   Input will always be **valid**, there is no need to check it explicitly.

Output
------

-   Print the list of stores in the format given above.

Examples
--------

| **Input**                                                                                                                                                                                                                                                                                                                                                            | **Output**                                                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Add-\>PeakSports-\>Map,Navigation,Compass Add-\>Paragon-\>Sunscreen Add-\>Groceries-\>Dried-fruit,Nuts Add-\>Groceries-\>Nuts Add-\>Paragon-\>Tent Remove-\>Paragon Add-\>Pharmacy-\>Pain-killers END                                                                                                                                                                | Stores list: PeakSports \<\<Map\>\> \<\<Navigation\>\> \<\<Compass\>\> Groceries \<\<Dried-fruit\>\> \<\<Nuts\>\> \<\<Nuts\>\> Pharmacy \<\<Pain-killers\>\> |
| **Comments**                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                              |
| First, we receive the "**Add**" command with a couple of items and we have to add the store and the items to. We keep doing that for each line of input and when we receive the "**Remove**" command, we delete the store and its items from our records. In the end we print the stores sorted by the **count** of their **items** and **then by** their **names**. |                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                              |
| Add-\>Peak-\>Waterproof,Umbrella Add-\>Groceries-\>Water,Juice,Food Add-\>Peak-\>Tent Add-\>Peak-\>Sleeping-Bag Add-\>Peak-\>Jacket Add-\>Groceries-\>Lighter Remove-\>Groceries Remove-\>Store END                                                                                                                                                                  | Stores list: Peak \<\<Waterproof\>\> \<\<Umbrella\>\> \<\<Tent\>\> \<\<Sleeping-Bag\>\> \<\<Jacket\>\>                                                       |

03\. Vapor Winter Sale
--------------------------

*Our favorite gaming platform, Vapor, has started its yearly winter sale. Stamat
wants to buy some games and he wants to make a list.*

Your task is to take **every game** and add it **with its price**. The games
**may have DLCs** (downloadable content), which you should also add. The games
will be given in the following format **"{game}-{price}"**. The game names will
contain only letters, digits and spaces. The DLCs will be given in the following
format **"{game}:{DLC}"**. **All the of the inputs** will be divided by **",
"**. You should only add the DLC **if the game already exists**. The DLC
**increases** the game price by **20%**.

After you have processed all the games you should **lower the prices** of all
the games by **20% if they don't have a DLC** and by **50% if they do**. After
this you should print the games **with DLCs**, **ordered ascending by price**,
and then all the games **without DLCs**, **ordered descending by price**, in the
following format:

-   If the game **has** a DLC:

    -   **"{game} - {DLC} - {price}"**

-   If the game **doesn't have** a DLC:

    -   **"{game} - {price}"**

The prices should be formatted to the second decimal place.

Input
-----

One **string** with inputs, divided by **", "**. Each input of the string will
be in one of the following formats – **"{game}-{price}"** or **"{game}:{DLC}"**.

You don't have to check the input, it will always be valid.

Output
------

**"{game1} - {DLC} - {price}"**

**"{game2} - {DLC} - {price}"**

**...**

**"{game n} - {price}"**

**"{game n + 1} - {price}"**

**...**

Examples
--------

| **Input**                                                                                                                                              | **Output**                                                                                                                          |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT                                | League of Leg Ends - DoaT - 6.00 WitHer 3 - Blood and Beer - 30.00 Cyberfunk 2077 - 96.00 FullLife 3 - 48.00                        |
| Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC | BattleShield 5 - CoD edition - 38.84 Dead Red Redemption - no DLC - 60.00 Dog of War - 36.00 FortLite - 20.00 Center Strike - 11.99 |
