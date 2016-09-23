![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Project #4: Travelly: A Travel App made with AngularJS

![](https://s3-eu-west-1.amazonaws.com/travelly/screenshot.png) 

##What is Travelly:

**Travelly** is a single page page application created using AngularJS that allows users to search for travel destinations based on their interests.

Differently from the most common flight-search websites, Travelly is providing to the user a list of destinations based on the following params:

- budget
- nearest airport
- dates
- a theme
 

#### Here you can see the live version: <https://travelly-app.herokuapp.com/>


## Technologies Used: 

The entire project is based on **AngularJS**, two APIs (**SkyScanner** and **Sabre**) and **Bootstrap 4 Alpha**.

The all the technologies used are the following one:

- **AngularJS**
- **SkyScanner API**
- **Sabre API**
- **Satellizer**
- **AWS S3 Storage**
- **NodeJS**
- **ExpressJS**
- **Bcrypt**
- **HTML5**
- **SASS**
- **Bootstrap 4**
- **Heroku**
- **Sublime Editor**
- **Insomnia**
- **Trello**
- **Adobe Photoshop**
- **Omnigraffe**
- **Balsamic**
- **MacDown**
- **Slack**

The user can login with a combination of **email/password** and **Facebook** and **Twitter**.
For created the whole register/login system I used **Bcrypt** for the registration process by username, email and password and **Satellizer** for creating the login system using the **Facebook** and **Twitter API**.

--

For accomplice the project I also used the following tools:

- **Insomnia** for testing the APIs and later for sending request to my own back-end application.

- **Trello**: as project management tool.

- **Balasamiq**: for the creation of the wireframe

- **Omnigraffe**: for the ERD

- **Photoshop CC**: I used it mainly for create a consistency in the photo resolution and weight.

- **MacDown**: as text editor for creating the ReadMe file.

- **Heroku**: for deploy the website.


--

I designed the website using the "mobile first" method:

![](https://s3-eu-west-1.amazonaws.com/travelly/Mobile+Mokeup.png)

In a later stage I also designed also the web version:

![](https://s3-eu-west-1.amazonaws.com/travelly/Desktop+Mokeup.png)

--



##Recognised Bugs

There are a few sections that needs to be styled better, in particular the footer of the landing page. Moreover, the project needs some adjustments on the mobile version using more **media queries**. 

---
##Future Developments

**v1.5**
Messaging system between users. 

**v2.0**
Add Google Maps API for display the search results on the Map.

---
###For run the app locally, follow the next steps:

- Clone the app from Github
- Run "npm i" on the terminal to set up Express.
- Run "node db/seeds" to load the provided user database.
- Run "nodemon" to start the server
- On the browser, go to "localhost:8000"