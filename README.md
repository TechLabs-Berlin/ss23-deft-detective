# ss23-deft-detective

Abstract: 

Deft Detective is a mobile app that helps a user find lost things. Information about the object as well as the time and place of the loss is provided.
All stores from the selected area on a map, after providing their own email, are sent an email with the demand for the findings with the help of the app. The stores reply to the email by a simple button and the user gets the store's reply by email.

Setup

Basic requirements:
Code editors (VS Code, Atom...)
Node.js
React
MongoDB
Nodemon (optional)


Data

Create a data base and a collection with the name 'deft-detective' with the biz_name.csv file (found in the data folder).


Client

Use the package manager npm to install the dependencies

From the top-level directory: ss23-deft-detective

Change to folder: $ cd client

Run the following commands to install express and dependencies:

npm install

Server

For installation

From the top-level directory: ss23-deft-detective

Change to folder: $ cd servernode

Run the  following commands to install express and dependencies:

npm install

Note: If you find any ImportError messages, continue to install missing dependencies.

Running

Run the server:

Go to the directory: ss23-deft-detective/servernode

Run the following commands:

$ node index.js

or

$ nodemon index.js

(If the server is still not running:
change index.js:16 'mongoose.connect("mongodb://localhost:27017/deft-detective") 
to mongoose.connect("mongodb://127.0.0.1:27017/deft-detective"))

Run the client:

Go to the directory: ss23-deft-detective/client

Run the following commands:

$ npm start
 

Authors

This project was created by:

Mentors: Dmitry Kisler & Tatiana Olar               

Wed Developer:        Ajla Mahmutovic 

Wed Developer:        Guilherme Mazzolini  

Data Science:         Francisco

Data Science:         John

User Experience:      Rosaria de Canditiis
   
User Experience:      Vida Abbasi
