JS Applications Exam - SoftTerest SPA (13.12.2019)
=====================================

You are assigned to implement a **Web application** (SPA) using HTML5,
JavaScript, AJAX, REST and JSON with cloud-based backend (Kinvey). Using
libraries like **jQuery**, **Handlebars** and **Sammy** is allowed but is not
obligatory. The app keeps **users** and **ideas**. **Guests** should be able to
**register** and **login**. Logged-in users should be able to view **all
ideas**, **create ideas**, **like and comment ideas**, see **details** about an
**idea** and **logout**. Logged-in users should also be able to **edit** or
**delete** the ideas **they have created**. There should also be a **section**
where users can **see only the ideas they have created**.

1\. Create a Kinvey REST Service
----------------------------

Register at **Kinvey.com** and create application to keep your data in the
cloud.

Create a collection called **ideas.** Each **idea** has a **name**,
**description**, **organizer, comments** and **likes** (starting from 0).

![](media/22298018a36987d127ba517ccb1622a0.png)

![](media/87f6f0b07e7c3253883dff3b92c872fc.png)

In order to be able to keep track of the likes and to add comments, you need to
give all users permission **to edit this collection**. So, go to the
**properties** of the collection.

Then go to the **permissions** and **edit** them to look like this:

![](media/47ed18fb6dafb274f2574e461d7ba41b.png)

2\. Test the Kinvey REST Services
-----------------------------

Using **Postman** or other HTTP client tool (you can use Kinvey's built-in **API
Console**), test the REST service end points:

### User Registration (Sign Up)

![](media/1.png)

The request needs "**Basic**" **authentication.** Use the Kinvey **App Key** and
**App Secret** as credentials.

![](media/d71a3451c2e2c0802f0c66258d3cd8c1.png)

### User Login

![](media/2.png)

Successful login returns an **authtoken** which is later used to authenticate
the CRUD operations.

### User Logout

![](media/3.png)

To logout, you need to provide the **authtoken** given by login/register as
"**Kinvey**" authorization header.

### List All Ideas

![](media/4.png)

### Create Idea

![](media/5-1.png)
![](media/5-2.png)

### Edit Idea

![](media/6.png)

### Delete Idea

![](media/7.png)

### Like Idea

![](media/8-1.png)
![](media/8-2.png)

### My Ideas

![](media/9.png)

3\. SoftTerest - HTML and CSS
-------------------------

You have been given the web design of the application as **HTML** + **CSS**
files.

-   Initially all views and forms are shown by the HTML. Your application may
    **hide**/**show elements** by CSS (**display: none**) or
    **delete**/**reattach** from and to the DOM all unneeded elements, or just
    display the views it needs to display.

-   You may render the views/forms/components with **jQuery** or **Handlebars**.

**Important**: Don’t change the elements’ **class names** and **ids**. Don’t
rename form fields/link names/ids. You are **allowed** to add **data
attributes** to any elements. You may modify **href attributes** of links and
add **action/method attributes** to **forms**, to allow the use of a routing
library.

SoftTerest - Client-Side Web Application
----------------------------------------

**Design** and **implement** a client-side front-end app (SPA) for managing
**ideas**. Implement the functionality described below.

### (BONUS) Notifications (5 pts)

The application should notify the users about the result of their actions.

-   In case of a **successful** action, a **notification message (green)**
    should be shown, which disappears automatically after 5 seconds or manually
    when the user clicks it.

    ![](media/711335a8bf1732afb81604151e99181a.png)

-   In case of **error**, an **error notification message (red)** should be
    shown, which disappears on user click.

    ![](media/61cbfef9227d3a9fc482f5be1715e7d3.png)

-   During the **AJAX calls** a **loading notification message (blue)** should
    be shown. It should disappear automatically as soon as the AJAX call is
    completed.

    ![](media/6b4b5a01b75879d5b8a9603206aade30.png)

-   **NOTE**: You get all the points if **all** the notifications have the
    **exact content** as described in each section above.

### Navigation Bar (5 pts)

Navigation links should correctly change the current page (view).

-   Clicking on the links in the **NavBar** should display the view behind the
    link (views are represented as sections in the HTML code).

-   Your application may **hide**/**show elements** by CSS (**display: none**)
    or **delete**/**reattach** from and to the DOM all unneeded elements, or
    just display the views it needs to display.

-   The Logged-in user navbar should contain the following elements: **Icon**
    (**icon.jpg**) which is a **link** to the **Home page**, [**Create**],
    [**Logout**].

    ![](media/acccc7cc3e586594534570adb06f6e84.png)

    The Icon should be a link that navigates to the **currently logged in user’s
    profile**.

-   The guest users navbar should contain the following elements: : **Icon**
    (**icon.jpg**) which is a **link** to the **Home page,** [**Register**] and
    [**Login**].

    ![](media/ce3167884f6cb982d34a7c6d301e15e6.png)

### Home Page (Guest) (5 pts)

The initial page (view) should display the **guest navigation bar** ("**Home**"
(icon), "**Register**"and "**Login**") + **Guest Home Page** + **Footer**.

![](media/989854fd584fb31c74a5208f59e246b3.png)

### Register User (5 pts)

By given **username** and **password,** the app should register a new user in
the system.

-   (BONUS) The following validations should be made:

    -   The **username** should be **at least 3 characters** long

    -   The **password** should be **at least 3 characters** long

    -   The **repeat password** should be **equal to the password**

-   After a **successful registration**, a notification message **"User
    registration successful."** should be displayed and the app should
    **redirect** to the **home page with the right navbar**.

-   In case of **error** (eg. invalid username/password), an appropriate error
    **message** should be displayed, and the user should be able to **try** to
    register again.

-   Keep the user session data in the browser's **local storage**.

Register once and create/Like awesome ideas!

![](media/1aa4b6ded1186b4384eb56759795fea8.png)

![](media/62d57ab01a3bae0c41d816d6f333d472.png)

### Login User (5 pts)

By given **username** and **password,** the app should login an existing user.

-   After a **successful login**, a notification message **"Login successful."**
    should be shown and the user home screen should be displayed.

-   In case of **error**, an appropriate error message should be displayed and
    the user should be able to fill in the login form again.

-   Keep the user session data in the browser's **local storage**.

-   Clear **all** input fields after a **successful** login.

You are one step away from awesome ideas!

![](media/dff7d1f5931170e2ed94857a7a4320ce.png)

![](media/15f9825dc55047f3f07daa07e45fd4dc.png)

### Logout (5 pts)

Successfully logged in users should be able to **logout** from the app.

-   After a **successful** logout, a **notification** message **"Logout
    successful."** should be displayed and the **anonymous screen** should be
    shown

-   The **"logout" REST service** at the back-end **must** be called at logout

-   All local information in the browser (**user session data**) about the
    current user should be deleted

![](media/a02840c1720b0a729427a82155d3b5f6.png)

![](media/fdeca3237ac77cc9904ccb4cb25dd7d2.png)

### Dashboard (30 pts)

Successfully logged-in users should be able to see the **Dashboard**. They
should be able to see all created ideas.

![](media/7fc57b7f536406063dce0af48df325ce.png)

If there are **NO** such ideas, the following view should be displayed:

![](media/feaff8d56ee45a988bd3bffd49a74607.png)

### Create (10 pts)

Logged-in users should be able to **Create** ideas.

Clicking the [**Create**] **link** in the **NavBar** should **display** the
**Create page**.

-   (Bonus) The form should contain the following validations:

    -   The **title** should be **at least 6 characters** long.

    -   The **description** should be **at least 10 characters** long.

    -   The **image** should start with **"http://"** or **"https://"**.

    -   **By default**, every newly created idea must have additional
        information:

        -   **Creator:** string representing the current idea creator;

        -   **Likes:** number starting from 0;

        -   **Comments:** empty array

    -   After a **successful** idea creation, a notification message **"Idea
        created successfully."** should be displayed and the **Dashboard**
        should be shown.

-   The inputs fields in the form **should be cleared.**

-   The newly organizer idea should be stored in the Kinvey collection
    "**ideas**".

![](media/66e909695d96ef339f5f4bcfd8d9e07f.png)

![](media/ff44444236e5dc5c1c5d8831dc172a98.png)

![](media/47bc6d3bfdc22a415aa64e51c9c192bc.png)

### Details Idea (10 pts)

Logged-in users should be able to **view details** about ideas.

Clicking the [**Details**] **link** in of a **particular idea** should
**display** the **Idea Details page**.

-   If the currently logged-in user is the organizer of the idea, [**Delete**]
    **button** should be set to **visible**, otherwise there should be 2 buttons
    [**Like**] and [**Comment**].

-   If there are no comments you should display **"No comments yet"**

![](media/44a498e946d5e29a94f860e9a04d1ef5.png)

![](media/611a533a23dad26113be5c73c787d8bf.png)

### Comment on Idea (10 pts)

Logged-in users should be able to **comment** ideas.

Clicking the [**Comment**] **link** of a **particular idea** on the **Idea
Details page** should **get the comment from the textarea and display it in the
proper section.**

**NOTE**: A user should **NOT** be able to comment an **idea**, created by
**himself**.

![](media/cc4ca7dfc575743613cab9cf8e90d6a9.png)

-   Every comment shoud be displayed as follows: **{current user} : {comment}**

### Like Idea (10 pts)

Logged-in users should be able to **Like** ideas, created by **other users**.

**NOTE**: A user should **NOT** be able to Like an **idea**, created by
**himself**.

Clicking the [**Like**] **link** of an **idea** (on the **Idea Details page**)
should **increase** the property for the **likes** of the corresponding idea.  
Users can **Like ideas** multiple times**.**

### Delete Idea (5 pts)

Logged-in users should be able to **delete their** ideas.

Clicking the [**Delete**] **link** of an **idea** (on the **Idea Details page**)
should **delete** the **idea**.

-   After **successful idea delete** a notification message **"Idea deleted
    successfully."** should be displayed and the **Dashboard** should be
    **shown**

![](media/3d1ad60675a69071197634b30ee747d7.png)

### (BONUS) Profile Page (5 pts)

Logged-in users should be able to **view their profile**.

Clicking the **Icon link** on the **navigation bar** should **display** the  
**User Profile page**:

-   Each user profile should display user info - **profile picture**,
    **username** and **ideas information**

    -   **"Has {count} ideas**"

    -   The **names** of **all ideas** which the user has **created**.

![](media/18413327f8d188706b528779e560a5bc.png)

-   In case of **no ideas**, display "**No ideas yet**".

![](media/9b59c54e584da2b6b02faf3f19ef6d23.png)

### (BONUS) Sorting: (5 pts)

The ideas in the **home page** (for **registered** users), should be sorted in
**descending** order by **likes.**
