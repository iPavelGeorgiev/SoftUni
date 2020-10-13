**Express.js Retake Exam – Video Tutorials**
----------------------------------------

**1\. Exam Rules:**
-------------

-   You have 4 hours **from 09:00 to 13:00**

-   When you are ready, delete the *node_modules* folder, make sure all
    dependencies are listed in the *package.json* file and submit your archived
    project at: [SoftUni
    Judge](https://judge.softuni.bg/Contests/1652/ExpressJS-19-April-2019)

-   You are provided with **HTML & CSS** resources, which you can **modify**

-   Use **Express.js** as a back-end framework

-   Use **MongoDB** as a database with **mongoose**

-   You can use whatever **view engine** you like (Handlebars, EJS, Pug etc.…)

**2\. Application Overview**
--------------------

Get familiar with the provided **HTML & CSS** and create an application for
**video tutorials**, **courses** and **course lectures.**

**3\. Functional Requirements**
-----------------------

The **Functionality Requirements** describe the functionality that the
**Application** must support.

#### Guest (Not Logged In)

The **application** should provide **Guest** (not logged in) users with the
functionality to **login**, **register** and **view** the **Home** page.

#### Users (Logged In)

The **application** should provide **Users** (logged in) with the functionality
to **view all the courses which are listed**, **course details page of all
listed courses** and **they should be able to enroll in courses**. **Enrolled
in** users should be able to see **lectures** in that course and the **Play
Video** section. Courses can be **public** or **not.** Users can access **only
public courses.**

**4\. Database Models (10 Pts)**
----------

The **Database** of the **Tutorials** application needs to support **2
entities**

### User

-   **Username - string (required), unique**

-   **Password - string (required)**

-   **Enrolled Courses - a collection of Courses**

### Course

-   **Title - string (required), unique**

-   **Description - string (required), max length of 50 symbols,**

-   **Image Url - string (required),**

-   **Is Public - boolean, default - false,**

-   **Created at – Date or String, required**

-   **Users Enrolled - a collection of Users**

Implement the entities with the **correct datatypes**.

**5\. Application Pages (70 Pts)**
--------------

### Guest Pages (15 Pts)

These are the pages and functionalities, accessible by **Guests (logged out
users).**

### Home Page (Logged Out User)

List the **top three (3) public courses ordered** by the **count** of enrolled
in users in **descending** order.

![](media/4f2a4069c8790a47f6c1645952ed4cb7.png)

If there are no courses in the database yet, display **"No courses..."**

![](media/37be29323159b09089a4b71bad1675e9.png)

### Register Page (Logged Out User)

Register a user inside the database with **username** and **password**. Both
**passwords** must **match**!

![](media/d9cc36582780ad0c4d78fa7dae9dc0e0.png)

### Login Page (Logged Out User)

![](media/22d553c95b5d1f30d1efbe02de42b5ff.png)

### User Pages (55 Pts)

These are the **templates** and **functionalities**, accessible by **Users**
(**logged in** users).

### Home Page (Logged in User)

List **all public** courses sorted in **descending order** by the **created
time** with a button **Details** which leads to a **course details page**.

![](media/5c91e2635f4aa791784c5208a355c8bb.png)

If there are no courses in the database yet, display **"No courses..."**

![](media/53d4eb3ce9d4beb3f256cbdfebf114bc.png)

### Create Course Page (Logged in User)

Enter course **title**, **description**, **image URL** and choose if the course
will be **public** or not. You will receive the value of the checkbox as a
string **"on"** if it's checked or **undefined** if it's not. You have to
convert the received value as Boolean **true** or **false** and save the course
in the database.

![](media/172f698ba07391038504feb67e6d1e3c.png)

### Logged in Details Page (Logged in User)

In the Details of a course section, you should load course **name** and **description**.

### Not Enrolled in Course (Logged in User)

If the user is **not enrolled** in the course, you should display **Enroll
button.**

![](media/983c977c1ab09f9a96e8ff930e91d074.png)

### Enrolled in Course (Logged in User)

**After** the user has enrolled in the course, the **"You are already enrolled"
span element** should be **shown instead of the [Enroll] button.**

![](media/b8fc4b3c4cbc545bbbe2b96c44f09e3d.png)

### Course Creator (Logged in User)

The creator of the course should see **[Delete] [Edit]**

![](media/46d616f007763867a7a8773ef3e23b5e.png)

### Delete Course (Logged in User)

Upon deleting a lecture (clicking over **[Delete] button**, you should be
**redirected to the home page**.

### Edit Course (Logged in User)

All form fields should be **filled** with the corresponding information of the
selected course.

![](media/098c56b0a80f458fa4ce8c3340a5c8e5.png)

**6\. Security Requirements (10 Pts)**
-------------

The **Security Requirements** are mainly **access** requirements. Configurations
about which users can access specific functionalities and pages.

-   **Guest** (not logged in) users can access **Home** page and functionality.

-   **Guest** (not logged in) users can access **Login** page and functionality.

-   **Guest** (not logged in) users can access **Register** page and
    functionality.

-   **Users** (logged in) can access **Home page (Listed all Courses)**page and
    functionality.

-   **Users** (logged in) can access **Course Details** page and functionality.

    -   **Users** (not course creator) can **Enroll once** for the course

    -   **Users** (course creator) can **Edit** and **Delete** the current
        course

-   **Users** (logged in) can access **Create Course** page and functionality.

-   **Users** (logged in) can access **Logout** functionality.

**7\. Validation and Error Handling (10 Pts)**
-----------------

The application should notify the users about result of their actions.

### Login / Register

You should make the following validations:

-   The **username** should be **at least 5 characters** long and should consist
    only **english letters** and **digits**

-   The **password** should be **at least 5 characters** long and should consist
    only **english letters** and **digits**

-   The **repeat password** should be **equal to the password**

![](media/8ee01c58d752a84fecb6e9701353d4f8.png)

![](media/15db97d603c696f6feb254256e355ff1.png)

### Course

You should make the following validations while **creating** or **editing a
course**:

-   The **title** should be **at least 4 characters**

-   The **description** should be **at least 20 characters** long

-   The **imageUrl** should be **starts with http or https**

![](media/283bb6c4b5c49e201348a3dacc4a63ca.png)

**8\. \*Bonus (10 Pts)**
----

**Search in courses.** Filter only the **courses names** that **include the
searched string** (**case-insensitive**).

![](media/fcad28340aa6b6d3b8b5a6696810f4fa.png)
