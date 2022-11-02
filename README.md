# Naming API

This API allows you to pickup a new name for your new baby!
It will help you go throw over thousands of diffrent names in both Arabic and English.

## Development Notes: 
This API was developed using **NodeJS** and **Express** packages and it is licensed under the **MIT License** for free to use and open source APIs
This section involves the following items:
1. [**Getting Started**](#getting-started) 

2. [**Database Structure**](#database-structure)

3. [**Routes**](#routes)

4. [**Notes & Ideas**](#notes-and-ideas)

<br/>

<h3 id="getting-started"><strong>Getting Started</strong></h3>

**For Developers:**

You need to install the following packages and dependencies:
- Npm ( version 14.2.1 or above )
- Express ( version 12.2.3 or above )
- Sequelize ( version 10.8.0 or above)

There is a json file contains all of the nouns used in the live demo and another one for categories two , if you would like to use them for your database seeding process.

**For Others**

You can use this API from this live demo

<br/>

---

<br/>

<h3 id="database-structure">Database Structure:</h3>

The database used to power this API is structured as following:
It contains two main tables [**Nouns**](#nouns-table) and [**Categories**](#categories-table).

<br/>

 <h3 id="nouns-table"><strong>Nouns Table:</strong></h3>
 

This table contains the follwoing columns:

| Name | Type  | Description |
| ----------- | -------------| ----------- |
| Name | Char  | Used to store the name |
| Arabic Description | Text  |Used to store description for this name in Arabic |
| English Description | Text  |Used to store description for this name in English |
| Category | Number  |Used to store a refrence for the category that this name belongs to |
| Gender | Char  |Used to store the gender that this name belongs to |

---
<br/>

<h3 id="categories-table"><strong>Categories Table:</strong></h3>

This table contains the following columns:

|Name | Type | Description
| ---------- | ---------- | ----------|
|     Name       | Char | Used to store category's name
|     English Description       | Char | Used to store description in English
|     Arabic Description       | Char | Used to store description in Arabic

---

<br/>

<h3 id="routes"><strong>Routes:<strong></h3>

The routes in this API is devided as the following:
- [**Nouns Routes**](#nouns-routes)

- [**Categories Routes**](#categories-routes)
<br/>


<h3 id="nouns-routes"><strong>Nouns Routes</strong></h3>

| Path  | Method | Params | Description | Statuses |
| ----- | ----- | ----- | ----- | ----- |
| /api/nouns/ | GET | none | gets all available nouns| 200 ok <br> 500 Internal Server Error
| /api/nouns/{:id} | GET | id : number represents the noun order in the database | gets a single noun using its order in the database | 200 ok <br> 404 Not Found <br> 400 Bad Request <br> 500 Internal Server Error
| /api/nouns/{:name} | GET | name: string represents the noun name to be returned | gets all similar nouns to the passed name| 200 ok <br> 404 Not Found <br> 400 Bad Request <br> 500 Internal Server Error
| /api/nouns/ | POST | name : char <br> english_description: text <br> arabic_description: text <br> category: number | adds new noun to the database| 200 ok <br> 400 Bad Request <br> 500 Internal Server Error
| /api/nouns/{:id} | PATCH | id : number represents the noun order in the database | update a noun record  | 200 ok <br> 404 Not Found <br> 400 Bad Request <br> 500 Internal Server Error
| /api/nouns/{:id} | DELETE | id : number represents the noun order in the database | delete a noun from database | 200 ok <br> 404 Not Found <br> 400 Bad Request <br> 500 Internal Server Error

<br/>

---

<br/>
<br/>

<h3 id="categories-routes"><strong>Categories Routes</strong></h3>

| Path  | Method | Params | Description | Statuses |
| ----- | ----- | ----- | ----- | ----- |
| /api/categories/ | GET | none | gets all available categories| 200 ok <br> 500 Internal Server Error
| /api/categories/{:id} | GET | id : number represents the category order in the database | gets a single category using its order in the database | 200 ok <br> 404 Not Found <br> 400 Bad Request <br> 500 Internal Server Error
| /api/categories/ | POST | name : char <br> english_description: text <br> arabic_description: text <br> category: number | adds new noun to the database| 200 ok <br> 400 Bad Request <br> 500 Internal Server Error
| /api/categories/{:id} | PATCH | id : number represents the category order in the database | update a category record  | 200 ok <br> 404 Not Found <br> 400 Bad Request <br> 500 Internal Server Error
| /api/categories/{:id} | DELETE | id : number represents the category order in the database | delete a noun from database | 200 ok <br> 404 Not Found <br> 400 Bad Request <br> 500 Internal Server Error

<br/>

---

<br/>

<h3 id="notes-and-ideas">Notes & Ideas</h3>
Please feel free to let me know about your thoughts and ideas regarding this API and I appreciate your contributions and enhancements

<br/>

> Great things comes to those who are willing to share and help others

**Thank You**

-------------------

[Moayed Abdulhafiez](https://github.com/MrMaximeliom)

-------------------