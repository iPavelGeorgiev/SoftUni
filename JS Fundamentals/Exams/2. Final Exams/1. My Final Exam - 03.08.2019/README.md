01\. String Manipulator
----------------

Create a program that executes changes over a string. First, you are going to **receive the string**, then commands.

You will be receiving **commands** until the "**End**" command. There are **six** possible commands:

-   **"Translate {char} {replacement}"**

    -   **Replace** all occurences of **{char}** with **{replacement}**, then
        **print** the **string**.

-   "**Includes {string}"**

    -   **Check** if the string **includes {string}** and **print**
        "**True**/**False**".

-   "**Start {string}"**

    -   **Check** if the string **starts** with **{string}** and **print**
        "**True**/**False**".

-   "**Lowercase"**

    -   Make the **whole string lowercased**, then **print** it.

-   "**FindIndex {char}"**

    -   Find the **last index of {char}**, then **print** it.

-   "**Remove {startIndex} {count}"**

    -   Remove **{count}** characters from the string, starting from
        **{startIndex}**, then **print** it.

Input
-----

-   On the **1st line** you are going to receive the **string**.

-   On the next **lines**, until the **"End"** command is received, you will be receiving commands.

-   All commands are case **sensitive**.

-   The **input** will **always** be **valid**.

Output
------

-   **Print** the **output** of every **command** in the **format described
    above**.

Examples 
---------

| Input | Output |
|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| //Thi5 I5 MY 5trING!//  Translate 5 s  Includes string  Start //This  Lowercase  FindIndex i  Remove 0 10  End | //This Is MY strING!//  False  True  //this is my string!//  16  my string!// |

02\. Message Decrypter
-------------------

Create a program, that **checks** if **inputs** have a **valid message** and **decrypt** it. On the **first** line you will **receive** a **number** that
**indicates** how **many inputs** you will **receive** on the **next**
lines**.**

A message is **valid** when:

-   There is **nothing** else **before** and **after it**

-   It **starts** with a **tag**, which is **surrounded** by either '**\$**' or
    '**%**' (but **not both** at the same time), the tag itself has to be
    **minimum 3** characters long, **start** with a **uppercase** letter,
    **followed only** by **lowercase** letters

-   There is a **colon** and a single **white space** after the tag

-   There are **3 groups** consisting of **numbers** between '**[**' and
    '**]**', followed by a **pipe** ('**\|**')

**Example for a valid message:**

**"\$Request\$: [73]\|[115]\|[32]\|"**

You must **check** if the **message** is **valid** and if it **is**- **decrypt**
it, if it **isn’t** - **print** the following **message**:

**"Valid message not found!"**

**Decrypting** a **message** means to **take all numbers** and **turn** them **into ASCII symbols**. After successful decrypt, print it in the following format:

**{tag}: {decryptedMessage}**

Input
-----

-   On the **first** line - **n** - the count of inputs.

-   On the **next n** lines - **input** that you have to **check** if it has a
    **valid message**.

Output
------

-   **Print all results from each input, each on a new line.**  
    

Examples
--------

| Input | Output | Comment |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 4  \$Request\$\: [73]\|[115]\|[105]\|  \%Taggy\$\: [73]\|[73]\|[73]\|  \%Taggy\%\: [118]\|[97]\|[108]\|  \$Request\$\: [73]\|[115]\|[105]\|[32]\|[75]\| | Request: Isi  Valid message not found!  Taggy: val  Valid message not found! | We have 3 input lines to check. The first one follows the rules and is valid. The second one doesn’t because the tag is surrounded by both \'\%\' and \'\$\'. The third one has a valid message and is in the beginning of the input. The last one is invalid because it has more than 3 groups of numbers. |
| 3  This shouldnt be valid\%Taggy\%\: [118]\|[97]\|[108]\|  \$tAGged\$\: [97][97][97]\|  \$Request\$: [73]\|[115]\|[105]\| true | Valid message not found!  Valid message not found!  Valid message not found! |  |

03\. Messages Manager
--------------------

Create a program that manages **messages sent** and **received** of **users**. You need to keep information about **username**, their **sent** and **received** messages. You will **receive** the **capacity** of **possible messages kept at once per user**. You will be receiving **lines** with commands until you receive
the **"Statistics"** command. There are three **possible** commands:

-   **"Add={username}={sent}={received}":**

    -   **Add** the **username**, his/her **sent** and **received** messages to
        your **records**. **If** person with the given **username** already
        **exists ignore the line**.

-   **"Message={sender}={receiver}":**

    -   **Check** if both usernames **exist** and if **they do**, **increase**
        the **sender’s sent messages** by 1 and the **receiver’s received
        messages** by 1. If anyone **reaches** the **capacity** (**first check
        the sender**), he/she should be **removed** from the **record** and you
        should **print** the following message:

        -   **"{username} reached the capacity!"**

-   **"Empty={username}":**

    -   Delete **all** records of the **given user**, **if** he **exists**. If "**All**" is **given as username** - delete **all records** you have.

In the end, you have to **print the count of users, each person** with his/her
**messages** (the **count** of both **sent** and **received**) sorted in
**descending order** by the **received messages** and **then by** their
**username** in **ascending** order in the following format:

**Users count: {count}**

**{username} - {messages}**

**{username} - {messages}**

Input
-----

-   On the **first line**, you will **receive** the **capacity** - an **integer** number in the range [1-10000].

-   You will be receiving lines until you receive the **"Statistics"** command.

-   The **initial messages** (**sent** and **received**) will **always** be **below** the **capacity**.

-   The input will **always** be **valid**.

Output
------

-   Print the appropriate message after the **"Message"** command, **if** someone reaches the capacity.

-   Print the users with their **messages** in the **format** described above.

Examples
--------

| Input | Output | Comment |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 10  Add=Mark=5=4  Add=Clark=3=5  Add=Berg=9=0  Add=Kevin=0=0  Message=Berg=Kevin  Statistics | Berg reached the capacity!  Users count: 3  Clark - 8  Mark - 9  Kevin - 1 | First, we receive the capacity (10). Then we start receiving commands. The first four commands are for adding new users, so we do it. Then we have the command “Message=Berg=Kevin” and Berg reached the capacity, so we remove him, but Kevin has only his received messages incremented. When we receive the “Statistics” command, we print the output as described above. |
| 20  Add=Mark=3=9  Add=Berry=5=5  Add=Clark=4=0  Empty=Berry  Add=Blake=9=3  Add=Michael=3=9  Add=Amy=9=9  Message=Blake=Amy  Message=Michael=Amy  Statistics | Amy reached the capacity!  Users count: 4  Mark - 12  Michael - 13  Blake - 13  Clark - 4 |  |
| 12  Add=Bonnie=3=5  Add=Johny=4=4  Empty=All  Add=Bonnie=3=3  Statistics | Users count: 1  Bonnie - 6 |  |