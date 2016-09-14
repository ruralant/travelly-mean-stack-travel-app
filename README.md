![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Project #4: Travelly: A Travel App made with Angular

![](https://s3-eu-west-1.amazonaws.com/photo-aid/Schermata+2016-08-12+alle+00.29.12.png) 

##What is Travelly:

**Travelly** is a combination between a photosharing platform and a foundraising website.

For a few years I worked as professional photographer and also nowadays I am consider myself a photo enthusiast. Moreover I alwasy been involved in the charity sector through volonteer work. With **Photo-Aid** I decided to combine this two passions allowin people to donate their photos to the charities. 

When we shoots photos with the mobile phone and cameras we usually shoot 3 or 4 photos of the same subject in order to be able so select the best one. The idea was to create a website that allows the donors to contribute to charitable initiatives with both dontations and with the photos shooted in excess.

From the charitis prospective, Photo Aid allows them to create campaigns and receive donation in form of both money or photos.  

#### Here you can see the live version: <https://photoaid.herokuapp.com/>




## Technologies Used: 

The entire project is based on **Ruby on Rails 5** and **Bootstrap 4 Alpha**, with the following gems:

- **Ruby**
- **Ruby in Rails**
- **jQuery**
- **HTML5**
- **SASS**
- **Devise**
- **Bootstrap 4**
- **Carrierwave**
- **Rmagick**
- **Fog**
- **Stripe**
- **AWS S3 Storage**
- **Heroku**
- **Postgresql Database**
- **Sublime Editor**
- **Trello**
- **Adobe Photoshop**
- **Balsamic**
- **MacDown**

**Devise** is a useful gem for implement an authentication system. I had to choose between **Devise** and **Bcrypt** however, due to the duration of the project, I prefereed Devise because is featured with several useful tools for build quickly a strong authentication system.

I used **Carrierwave** and **Rmagick** for managing the images, from the upload to the storing and resizing.

As last gem I used **Stripe** in order to create a check-out for the donors.

--

For accomplice the project I also used the following tools:

- **Trello**: as project management tool.

- **Balasamiq**: for the creation of the wireframe

- **Draw.io** and **Omnigraffe**: for the ERD

- **Photoshop CC**: I used it mainly for create a consistency in the photo resulution and weight before upload and before using *Rmagic*.

- **MacDown**: as text editor for creating the ReadMe file.

- **Heroku**: for deploy the webiste.


--

I designed the website using the "mobile first" method:

![](https://s3-eu-west-1.amazonaws.com/photo-aid/Mobile+Mockup.png)

In a later stage I also designed also the web version:

![](https://s3-eu-west-1.amazonaws.com/photo-aid/New+Mockup+2.png)

--

The project is based on **three modules**: **Users** (that comprehensive of two role: charity and donor), **Campaigns** and **Photos**. At the start I planned to used for modules but a the end of the first day I dediced to unify the Users and Charities under one module for making esier to implement the authentication system and the reletionships between modules. 

##Recordgnised Bugs

There are a few sections that needs to be styled better, in particular the footer of the landing page. Moreover, the project needs some adjustments on the mobile version using more **media queries**. 

---
##Future Developments

**v1.1**
UX bugfix. 

**v1.5**
Add a comments section in the Campaign page.

**v2.0**
Allow more interactions between users with the creations of public profiles.

---
###For run the app locally, follow the next steps:

- Clone the app from Github
- Run "bundle" on the terminal to get the required gems.
- Run "rails db:create db:migrate db:seed" to load the provided database.
- Run "rails s" to start the server
- On the browser, go to "localhost:3000"