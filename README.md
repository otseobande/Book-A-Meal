# Book-A-Meal :rice: :fork_and_knife: :point_left:

[![Maintainability](https://api.codeclimate.com/v1/badges/128c9747e0b49230e3f3/maintainability)](https://codeclimate.com/github/otseobande/Book-A-Meal/maintainability) [![Build Status](https://travis-ci.org/otseobande/Book-A-Meal.svg?branch=develop)](https://travis-ci.org/otseobande/Book-A-Meal)
[![codecov](https://codecov.io/gh/otseobande/Book-A-Meal/branch/develop/graph/badge.svg)](https://codecov.io/gh/otseobande/Book-A-Meal)

Book-A-Meal is an application that allows customers to make food orders and helps the food
vendor know what the customers want to eat.

## Features

### Required features

* Users can create an account and log in.
* Admin (Caterer) should be able to manage (i.e: add, modify and delete) meal options in
  the application. Examples of meal options are: Beef with rice, Beef with fries etc.
* Admin (Caterer) should be able to setup menu for a specific day by selecting from the
  meal options available on the system.
* Authenticated users (customers) should be able to see the menu for a specific day and
  select an option out of the menu.
* Authenticated users (customers) should be able to change their meal choice.
* Admin (Caterer) should be able to see the orders made by the user.
* Admin should be able to see amount of money made by end of day.

### Extra Features

* Authenticated users (customers) should be able to see their order history.
* Authenticated users (customers) should be able to get notifications when the menu for
  the day has been set.
* Admin (Caterer) should be able to see order history.
* The application should be able to host more than one caterer.

## Installation

To get the application running follow this steps:

* Install NodeJs and Postgres on your local machine
* clone the repository `git clone https://github.com/otseobande/Book-A-Meal`
* Navigate to project folder
* Make a copy of the `.env.example` file and rename it to `.env`
* Update `.env` with necessary environment details e.g database credentials
* Install npm dependencies by running `npm install`
* Migrate tables to the db using `npm run migrate`
* Seed database with test data using `npm run seed` (optional)
* start the server in development mode by running `npm run start:dev`

## Testing

Run `npm run test` to run server and client side tests together. You can as well run `npm run test:client` or `npm run test:server` to test client or server individually.

## API Documentation

Find API endpoint documentation here https://meal-booking.herokuapp.com/api/v1/docs

## Technologies

### Backend

* [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express JS](http://express.com) A minimalist web framework
* [Sequelize](http://docs.sequelizejs.com/) Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
* [PostgreSQL](https://www.postgresql.org/) A powerful, open source object-relational database system.
* [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
* [Mocha](https://mochajs.org/) Mocha is a feature-rich JavaScript test framework running on [NodeJS](nodejs.org/en) for testing [Javascript](javascript.com) applications.

### Frontend

* [React](https://facebook.github.io/react/) A JavaScript library for building user interfaces.
* [Redux](http://redux.js.org/) A predictable state container for JavaScript apps.
* [Webpack](https://webpack.js.org/) A JavaScript tool for bundling scripts, images, styles and other assets
* [Babel](https://babeljs.io/) A JavaScript compiler for converting codes written in ES6 or JSX to ES5 that is supported by many browsers
* [Jest](https://jestjs.io/) Jest is a testing library. Commonly used for testing React applications

## Pivotal Tracker

Project is currently being managed with Pivotal Tracker, a project management tool. You can find the stories at [Book-A-Meal Pivotal Tracker Board](https://www.pivotaltracker.com/n/projects/2165646)

## Contributing

To help make this project even better you can fork this repo and create a pull request using the pull request template.

## License and Copyright

Licensed under the [MIT License](LICENSE).