# Tech Blog

## Purpose

Demonstrates usage theory and implementation of model/view/controller, building and connecting a front end to a database. Uses mysql backend

## Built with

- mySQL
- Sequelize
- Express
- Handlebars

## Setup Locally

### Getting Started

- Clone the repo - `git clone https://github.com/Hannahbird/tech-blog.git`
- Install dependencies with - `npm i`
- Create a .env file containing values for DB_USER,DB_PW. Add DB_NAME='tech_blog_db' to target the correct database

### Create the Database

- From Command Prompt navigate to the 'db' directory of the cloned repo and log into mysql - `mysql -u root -p`
- Create the database - `source db/schema.sql`

### You're Good to Go!

- From the ../cms-blog directory - `npm start`


## Deployed Link

[Live Site](https://hidden-earth-51234.herokuapp.com/)