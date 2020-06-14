Lab: Asynchronous Programming
=============================

Problems for exercises and homework for the ["JavaScript Apps" course \@
SoftUni.](https://softuni.bg/courses/js-applications)  
The following tasks do not have tests in the Judge system. They are for
practice.

01\. Github Commits
--------------

Write a JS program that loads all commit messages and their authors from a
github repository using a given HTML.

*Skeleton will be provided in the Resources folder.*

The **loadCommits()** function should get the **username** and **repository**
from the HTML textboxes with IDs **"username"** and **"repo"** and make a
**GET** request to the **Github API**:  
**https://api.github.com/repos/\<username\>/\<repository\>/commits**

Swap **\<username\>** and **\<repository\>** with the ones from the HTML:

-   In case of **success**, for **each** entry add a **list item** (\<**li\>**)
    in the **unordered list** (\<**ul\>**) with **id "commits"** with text in
    the following format:
    **"\<commit.author.name\>: \<commit.message\>"**

-   In case of an **error**, add a single **list item** (\<**li\>**) with text
    in the following format:  
    **"Error: \<error.status\> (\<error.statusText\>)"**

### Screenshots:

![](media/1a4c1116b7a60f307e7239fd99a6f54e.png)

![](media/cccb6e2c78007d3894e01e2531894aae.png)

02\. Blog
----------------

Write a program for reading blog content. It needs to make **requests** to the
**server** and display **all blog posts** and their **comments**.  
Firebase URL -
[https://blog-apps-c12bf.firebaseio.com/](https://blog-apps-c12bf.firebaseio.com/$%7bendPoint%7d.json)

*Skeleton will be provided in the Resources folder.*

The button with ID "**btnLoadPosts**" should make a **GET** request to
"**/posts**". The **response** from the **server** will be an **Object of
objects.**  


![](media/227500f98b522db3266a9a3d66a6b531.png)

Each object will be in the following format:

{

body: {postBody},

id: {postId},

title: {postTitle}

}

Create an **\<option\>** for each post using its **object key** as value and
**current object title property** as text inside the node with ID "**posts**".

![](media/a0b1899a5d6392c81f9e9ffc4aa28ead.png)

![](media/a2cdd569eab2f33bbc2622a83d767ad4.png)

When the button with ID "**btnViewPost**" is clicked, a **GET** request should
be made to:

-   "**/posts/{postId}**" to obtain the selected post (from the dropdown menu
    with ID "**posts**") - The following **request** will return **a single
    object** as described above.

-   "**/comments -** to obtain all comments. The request will **return** a
    **Object** of **objects**.  
    

    ![](media/fa62ff7fe0a28b3c10006397663ff3c1.png)

Each object will be in the following format:

{

id: {commentId},

postId: {postId},

text: {commentText}

}  

You have to find this comments that are for the current post (check the postId
property)

Display the post title inside **h1** with ID "**post-title**" and the post
content inside **ul** with ID "**post-body**". Display **each comment** as a
**\<li\>** inside **ul** with ID "**post-comments**". Do not forget to clear its
content beforehand.

![](media/c304d28faf319aac93541ae7ade72b69.png)

![](media/50b62a821810eca11b76aa638531d057.png)
