## vested-BE

This project is the back end RESTful API created in conjunction with the Front End repo for the Vested App, developed as a final project for the Northcoders Bootcamp.
The back-end repository is available at: https://github.com/LiamCurran95/vested-BE

## End Points

The end points for this project are:
* GET api/users
* GET api/esg
* GET api/polygon
* GET api/users/:username
* GET api/:username/:portfolio
* PATCH api/users/:username/:formAnswers
* POST api/users

## Node

The minimum required version of Node to run this app locally is: 
`v17.5.0`

## Run This App Locally

To run this app locally:
Clone the repository through the command line with 
`git clone https://github.com/LiamCurran95/vested-fe`

Install the dependencies through the command line with 
`npm install`

Run the app with 
`npm start`

## Database Setup
This repo was built around a MongoDB Atlas database and as such was designed to run with a remote database. In order to run this repo you will need to sign up for a free MongoDB Atlas database at https://www.mongodb.com/atlas/database.
When you have completed this step, you will need your Mongo Database URI. Create a new file in the root directory, secretInfo.js and paste the URI into this file as a variable called prodUri.
To enable testing, create a new collection on Atlas and paste the URI into the same file as a variable called testUri. Ensure both variables are set for export.

## Seeding Data
To seed the data required for this repo to work correctly, you will need to run the file seed-prod.js located in the /data/ folder. To run this file type `node seed-prod.js` and ensure that the MongoDB Atlas URI is located in the secretInfo file created earlier.

##Testing
We created the Vested Back End using Test Driven Development (TDD) methodology.
This repo comes with a testing suite developed using Mocha and Chai. To enable testing, ensure you have setup your test database and linked to it using the Mongo URI (described above).

To install the testing suite, run:
`npm install -D mocha`
`npm install -D @types/mocha`
`npm install -D chai`
`npm install -D chai-http`

Please note the test data will be seeded automatically into your test database when you first run your test file and will be reseeded on each subsequent test.
