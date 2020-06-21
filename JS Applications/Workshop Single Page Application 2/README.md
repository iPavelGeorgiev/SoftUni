JS Applications Exam - UniEnt SPA
=================================

You are assigned to implement a **Web application** (SPA) using HTML5,
JavaScript, AJAX, REST and JSON with cloud-based backend (Kinvey). Using
libraries like **jQuery**, **Handlebars** and **Sammy** is allowed but is not
obligatory. The app keeps **users** and **events**. **Guests** should be able to
**register** and **login**. Logged-in users should be able to view **all
events**, **create events**, **join events**, see **details** about a **event**
and **logout**. Logged-in users should also be able to **edit** or **delete**
the events **they have created**. There should also be a **section** where users
can **see only the events they have created**.

1\. Create a Kinvey REST Service
----------------------------

Register at **Kinvey.com** and create application to keep your data in the
cloud.

Create a collection called **events.** Each **event** has a **name**, **date**,
**description**, **organizer** and **people interested in** (starting from 0).

![](media/22298018a36987d127ba517ccb1622a0.png)

In order to be able to keep track of the people interested in an event, you need
to give all users permission **to edit this collection**. So, go to the
**properties** of the collection.

![](media/cabe7622a1e99700681f9b2f34c96ee7.png)

Then go to the **permissions** and **edit** them to look like this:

![](media/47ed18fb6dafb274f2574e461d7ba41b.png)

Test the Kinvey REST Services
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

### List All Events

![](media/4.png)

### Create Event

![](media/5-1.png)
![](media/5-2.png)

### Edit Event

![](media/6.png)

### Delete Event

![](media/7.png)

### Join Event

![](media/8-1.png)
![](media/8-2.png)

### My Events

![](media/9.png)

3\. UniEnt - HTML and CSS
---------------------

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

4\. UniEnt - Client-Side Web Application
------------------------------------

**Design** and **implement** a client-side front-end app (SPA) for managing
**events**. Implement the functionality described below.

### Notifications (5 pts)

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
    (**icon.jpg**) which is a **link** to the **Home page**, [**Organize
    Event**], the user caption ("{**username**}"), [**Logout**].

    -   The user caption should be a link that navigates to the **currently
        logged in user’s profile**.

        ![](media/c9d53b1b1dd3fd2df27ac920d1c46d7f.png)

-   The guest users navbar should contain the following elements: : **Icon**
    (**icon.jpg**) which is a **link** to the **Home page** and [**Login**].

    ![](media/262aa51e3b1ae94261b55ed0503a6559.png)

### Home Page (Guest) (5 pts)

The initial page (view) should display the **guest navigation bar** ("**Home**"
(icon) and "**Login**") + **Guest Home Page** + **Footer**.

![](media/d6dd20ac00d10e8e1b39072300f69f7e.png)

### Register User (5 pts)

By given **username** and **password,** the app should register a new user in
the system.

-   The following validations should be made:

    -   The **username** should be **at least 3 characters** long

    -   The **password** should be **at least 6 characters** long

    -   The **repeat password** should be **equal to the password**

-   After a **successful registration**, a notification message **"User
    registration successful."** should be displayed and the app should
    **redirect** to the **home page with the right navbar**.

-   In case of **error** (eg. invalid username/password), an appropriate error
    **message** should be displayed, and the user should be able to **try** to
    register again.

-   Keep the user session data in the browser's **session storage**.

Register once and create/join awesome events!

![](media/981c1f7f3263c1969addbbb0034c3778.png)

![](media/7126682ba39f0f34fe2b2a6c6d2652d7.png)

### Login User (5 pts)

By given **username** and **password,** the app should login an existing user.

-   After a **successful login**, a notification message **"Login successful."**
    should be shown and the user home screen should be displayed.

-   In case of **error**, an appropriate error message should be displayed and
    the user should be able to fill in the login form again.

-   Keep the user session data in the browser's **session storage**.

-   Clear **all** input fields after a **successful** login.

You are one step away from awesome events!

![](media/bce5de30e6a1dd64b84dae54c02965e0.png)

![](media/90a7905e35a5ee0338cdc92798cc4d13.png)

### Logout (5 pts)

Successfully logged in users should be able to **logout** from the app.

-   After a **successful** logout, a **notification** message **"Logout
    successful."** should be displayed and the **anonymous screen** should be
    shown

-   The **"logout" REST service** at the back-end **must** be called at logout

-   All local information in the browser (**user session data**) about the
    current user should be deleted

![](media/dad07249fc86b69ab938fa5e0c9f8578.png)

![](media/99aef68b07287c5c557717c27780784c.png)

### Home Page (30 pts)

Successfully logged-in users should be welcomed by the **Home page**. They
should be able to see all created (organized) events.

![](media/2c27006e012ae2d6e17eac49413c4930.png)

If there are **NO** such events, the following view should be displayed:

![](media/7908f9e79c0e509d123baf0e97ed3ec3.png)

[**Create the first one?**] **button** should refer to the **organize event
form**

### Organize Event (10 pts)

Logged-in users should be able to **Create (organize)** events.

Clicking the [**Organize Event**] **link** in the **NavBar** should **display**
the **Organize Event page**.

-   The form should contain the following validations:

    -   The **event name** should be **at least 6 characters** long.

    -   The **date** should be in **string** format (24 February; 24 March - 10
        PM;).

    -   The **description** should be **at least 10 characters** long.

    -   The **image** should start with **"http://"** or **"https://"**.

    -   **By default**, every newly created event must have additional
        information:

        -   **Organizer:** string representing the current event creator;

        -   **People interested in:** number starting from 0;

    -   After a **successful** event creation, a notification message **"Event
        created successfully."** should be displayed and the **Home page**
        should be shown.

-   The inputs fields in the form **should be cleared.**

-   The newly organizer event should be stored in the Kinvey collection
    "**events**".

![](media/74bb2e4d166f767e9b0f0cc70ef23548.png)

![](media/4ec6726e84cd78b1837c13b80a7a197c.png)

![](media/438042813446e18909f2875ba876a185.png)

### Details Event (5 pts)

Logged-in users should be able to **view details** about events.

Clicking the [**More**] **link** in of a **particular event** should **display**
the **Event Details page**.

-   If the currently logged-in user is the organizer of the event, the
    [**Edit**] and [**Close**] **buttons** should be set to **visible**,
    otherwise there should be only 1 button [**Join**].

![](media/6ad1182c149f89098f96294e40c4a40f.png)

![](media/7a9b2f160ba044375fef23573b514535.png)

### Edit Event (5 pts)

Logged-in users should be able to **edit** their **own** events.

Clicking the [**Edit the event**] **link** of a **particular event** on the
**Event Details page** should **display** the **Edit Event page**:

![](media/8ff26642921aea5e20559bbec0442e0d.png)

-   After a **successful edit**, a notification message "**Event edited
    successfully.**" should be **displayed**, and the user should be redirected
    to the **Home page**.

![](media/5e40e632e622d5450f6229426daf1808.png)

### Join Event (5 pts)

Logged-in users should be able to **Join** events, organized by **other users**.

**NOTE**: A user should **NOT** be able to join an **event**, organized by
**himself**.

Clicking the [**Join the event**] **link** of an **event** (on the **Event
Details page**) should **increase** the property for the **people interested
in** the corresponding event.  
Users can **join events** multiple times**.**

-   After **successfully joining** an **event**, a notification message **"You
    join the event successfully."** should be displayed.

![](media/f85e133660cbd84e9ab0692a8c421be0.png)

### Delete Event (5 pts)

Logged-in users should be able to **delete their** events.

Clicking the [**Close the event**] **link** of an **event** (on the **Event
Details page**) should **delete** the **event**.

-   After **successful event delete** a notification message **"Event closed
    successfully."** should be displayed and the **Home page** should be
    **shown**

![](media/d49396cc5a35f7dd70ebd195e402cb37.png)

### User Profile (10 pts)

Logged-in users should be able to **view their profile**.

Clicking the **user caption** ({**USERNAME**}) **link** on the **navigation
bar** should **display** the  
**User Profile page**:

-   Each user profile should display user info - **profile picture**,
    **username** and **organization information**

    -   **"Organizer of {count} events**"

    -   The **names** of **all events** which the user has **organized**.

![](media/546629f89e0abe701cdedf3df6d00ebb.png)

-   In case of **no events**, display "**No events**".

![](media/01a9c5dd4cf18aca3e6061b3ec006181.png)

### (BONUS) Sorting: (5 pts)

The events in the **home page** (for **registered** users), should be sorted in
**descending** order by **people interested in.**
