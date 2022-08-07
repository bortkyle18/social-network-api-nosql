# social-network-api-nosql

## Description

This is an API for a social network web application where users can share their thoughts, react to their friends' thoughts, and create a friend list. It uses `Express.js` for routing and a NoSQL database was implemented with `MongoDB` for all database needs. As there is no front-end developed for this app yet, data is created and tested using `Insomnia`.

To see how the API works using Insomnia, see the **walk-through demonstration videos** here:
https://drive.google.com/file/d/17xbpYvRJSjp8V0LwCkAIS9bDplE-F33u/view

## Table of Contents

- [Application Preview](#application-preview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Questions](#questions)

## Application Preview

<img src="/public/assets/images/application-preview.png" alt="Application being run in Insomnia">

## Features

1. When the application is started, the Mongoose models are synced to the MongoDB database.

2. When GET routes for either Users and Thoughts are requested in Insomnia, the data for whichever GET route requested will be returned in JSON.

3. **User**, **Friend**, **Thought**, and **Reaction** POST routes are used to create the database and test the API on Insomnia.

4. **User Routes** - Create a User by using the POST route and inputting a `username` and valid `email` address in JSON. Once you click Send, that User will be created and will be assigned a unique User ID.

- There are two `GET` requests that return User information. To return all Users, use the `/api/users` route, then click Send. To return a single User, use the `/api/users/:userId` route.

- To update a User by ID, use the `PUT` request and `/api/users/:userId` route.

- To delete a user by ID, use the `DELETE` request and `/api/users/:userId` route. This will delete the User and all associated Thoughts. A message that reads, `"User and thoughts deleted!"` will be returned if the User has been deleted from the database successfully. If there is no matching User ID in the system, the message, `"No user found with this ID!"` will be returned.

5. **Friend Routes** - a User can add and delete Friends using the POST and DELETE requests.

- To add a Friend, use a `POST` request and `/api/users/:userId/friends/:friendId` route, then click Send. Note that there are two User ID's being used in this request. The first (userId) is the User ID associated with the User you are adding a friend to. The second (friendId) is the User ID associated with the User who will be referenced as a Friend.

- When a GET request for Users is made, the friends array will be updated and the Users added are listed under `"friends"`. Below the `"friends"` array is the `"friendCount"` which indicates the number of Friends that User has.

- To remove or delete a Friend, use the `DELETE` request and `/api/users/:userId/friends/:friendId` route. Note again that there are two User ID's being used in this request. The first (userId) is the User ID associated with the User you are removing a Friend from. The second (friendId) is the User ID associated with the User who will be removed as a Friend.

6. **Thought Routes** - Create a Thought by using the POST route and inputting a `thoughtText`, `username`, and `userId` in JSON. Once you click Send, that Thought will be created and will be associated with the User specified.

- There are two `GET` requests that return Thought information. To return all Thoughts, use the `/api/thoughts` route, then click Send. To return a single thought, use the `/api/thoughts/:thoughtId` route.

- To update a Thought by ID, use the `PUT` request and `/api/thoughts/:thoughtId` route.

- To delete a Thought by ID, use the `DELETE` request and `/api/thoughts/:thoughtId` route. This will delete the Thought and all associated Reactions. A message that reads, `"Thought successfully deleted"` will be returned if the Thought has been deleted from the database successfully. If there is no matching Thought ID in the system, the message, `"No thought found with this ID!"` will be returned.

7. **Reaction Routes** - a Reaction can be added and deleted from Thoughts using the POST and DELETE requests.

- To add a Reaction, use a `POST` request and `/api/thoughts/:thoughtId` route, then click Send. This will add the Reaction to the Thought specified.

- When a GET request for Thoughts is made, the Reactions array will be updated and the Reactions added are listed under `"reactions"`. Below the `"reactions"` array is the `"reactionCount"` which indicates the number of Reactions that Thought has.

- To remove or delete a Reaction, use the `DELETE` request and `/api/thoughts/:thoughtId/reactions/:reactionId` route. Note that there are two ID's being used in this request. The first (thoughtId) is the ID associated with the Thought you are removing a Reaction from. The second (reactionId) is the ID associated with the Reaction that will be removed from the Thought specified.

## Installation

- Download or clone this repository to use the application on your local machine.
- To install necessary dependencies, navigate to the root directory of the application and run the following command in terminal:
  `npm i`
- Note: you will need `Node.js` and `MongoDB` installed prior to running this application in order for it to function.

## Usage

Refer to the walkthrough video at the beginning of this README for examples on how to use the application.

After installation:

- To start the application, in the root directory of the application type `npm start` into terminal.
- To create data and test the API routes, use [Insomnia](https://insomnia.rest/download).

## Technologies

The following technologies were used in development of this application:
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Insomnia](https://insomnia.rest/)
- [Moment.js](https://www.npmjs.com/package/moment)

## Questions

  [![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Here!-blueviolet?style=plastic&logo=GitHub)](https://github.com/bortkyle18) 

  Feel free to reach me at bortkyle18@gmail.com with any question regarding this project!