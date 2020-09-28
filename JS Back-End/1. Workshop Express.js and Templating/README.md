**Workshop: Cubicle - Part 1**
========================

"*Cubicle*" is a place, where you can browse some of the most popular rubik
cubes in the world and add some new cubes that you have discovered.

**Folder Structure View**
---------------------

You're provided with a project structure skeleton like this:

![](media/7906697a0c8c8536dccb9f696375a6e3.png)

This structure includes the following configurations:

### Config Folder View

![](media/09fed93a7fbe1719b5614fd7dcf47a6b.png)

**Config.js**

![](media/2d3bf6f7663c34da6d6b7de5d1d90cf9.png)

**Database.json**

![](media/2e5b6d2c156dee16cbf95ba87ed6bcd8.png)

**Express.js**

![](media/c63191ebe4746b9f3fe280cee1edb669.png)

**Routes.js**

![](media/fff80cd1e10c618c004f4997070f9d57.png)

**Index.js**

![](media/d0005be395852bd0544f91969d458e33.png)

**Install Dependencies**
---------------

Run **'npm install'** to install all the dependencies.

1\. Create Model
------

1\.1 Cube Model
------

Each cube should have the following properties (for now it could be an ES6
class):

-   **Id** - number

-   **Name** – string

-   **Description** – string

-   **Image URL** – string

-   **Difficulty Level**– number

2\. Storage
-------

Store the cubes inside a **/config/database.json**

3\. Create Routes
-------------

You should implement the following routes:

-   **/** - the main page (should visualize all the cubes in the database and a
    search field)

-   **/about** – should render the about page

-   **/create** – should render the create cube form

-   **/details/:id** – should render the details page about selected cube

-   **Any other** - should render the 404 not found page

### Main Page

![](media/f03e30ae01f3443781746fa3cfb03089.png)

![](media/eeba9b2c37269f6907e879326c7a5faf.png)

### About Page

![](media/b6cdba34707f51cc54a16711096d724e.png)

### Create Page

![](media/4d1fc8c34fc6104fa9035a9248a1ff34.png)

### Details Page

![](media/c45b6f6bc777850c8d29079e8ac555a4.png)

### Not Found Page

![](media/ab9e94c4838871e87942f2b40cee84e3.png)

4\. Create Templates
----------------

Use the provided HTML to create templates using Handlebars. Identify the dynamic
parts and use appropriate syntax for interpolating and rendering the application
context.

5\. \*Search
--------

Implement searching logic. Use the following validation:

-   If the user searches **only** a string and **NO difficulty**, render **all
    difficulties**

If the search does *NOT* meet the requirements, just **redirect** to the home
page **('/')**
