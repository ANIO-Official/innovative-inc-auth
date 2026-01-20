# Innovative Inc Auth🔒 | Backend Authorization

A lab study focused on simulating building a backend for the fundamental endpoints for user registration and login in Innovative Inc's user portal.

## Module 14: Lab 1 

## Overview
The core focus of this lab is to build a simple Express API that can:

- Accept a new user’s credentials and create a user record with a hashed password.
- Accept a returning user’s credentials, validate them against the stored hash, and issue a JWT upon success.

### GitHub Link
https://github.com/ANIO-Official/innovative-inc-auth

## How to Use
1.  Clone the repository or Download the ZIP file and extract the files.
2.  Open the file in Visual Studio Code.
3.  Open the Terminal using Ctrl + ~
4.  `cd` into the directory 'innovative-inc-auth' in the terminal. Like so: 
    `cd innovative-inc-auth`

    **Ensure NPM is is installed for the project to run:** 

      inside the terminal window run `npm i` to install npm
5.  Create a `.env` file in the root directory/folder ( innovative-inc-auth ). And add in your personal connection string from [MongoDB]( https://www.mongodb.com) in the following format `MONGO_URI=your_connection_string_goes_here/innovative-inc` 
6.  (Once NPM is indeed installed in the project file directory, you'll see a node modules folder) Run the project using `node server.js` in the terminal. You can also use npm run dev (Nodemon is installed)

7.  You should see a message appear. Follow the link such as: "http://localhost:3000/" or "http://localhost:3001/"

From here, you can test creating a new user or logging in as an existing user using software/Visual Studio extension such as Thunderclient or Postman or a simlar software/Visual Studio extension.

To create using JSON body, following this format:

```JSON

{
    "username": "coolest1stUser",
    "email": "bestCoolemail@gmail.com",
    "password": "b3tterP4ssword"
}

```

To login using JSON body, following this format:


```JSON

{
    "email": "bestCoolemail@gmail.com",
    "password": "b3tterP4ssword"
}

```
*For bodies of type Form-encode, simply make a username, email, and password with their associated values you determine for testing.*

**Upon testing: You will see corresponding JSON messages upon successfully/unsuccessfully creating or logging in.**

## My process

 1. Initialized repo and npm. Installed all necessary & personally preferenced dev packages (`dotEnv`, `express`, `bcrypt`, `jsonwebtoken`, `mongoose`,a nd `nodemon`). Added server.js, .gitignore, and .env files.
 2. Added .env and node_modules to .gitignore
 3. Created basic File Structure.
 4. Created Database Connection inside `config` directory via Mongoose & MongoDB URI
 5. Imported MongoDB connection function. Created a basic server setup with an express instance and port number.
 6. Established connection with MongoDB via calling the imported conenction function. Added a root route `'/'` and listener. Tested base route and connection via console log, thunderclient, and browser. 
 7. Created User Schema with preSave to update password to it's salted hash value. Added method to check for a password match using bcrypt. Compiled schema into model for export. 
 8. Importered User Schema and created POST routes for registration and login. Ensured use of `async/await` and `try...catch` for creating a new user and logging in as a user.
 9. Added middleware.
 10. Final testing with Thunderclient and the browser. Touch ups & Debugging.

### Built with

- Node.js
- Express
- MongoDB / Mongoose
- Javascript
- dotenv
- Nodemon
- JWT (JSON Web Token)
- Bcrypt

### Useful resources

**PerScholas** | Authentication and Authorization | Lessons 1-2


## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)