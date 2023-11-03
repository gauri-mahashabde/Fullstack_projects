CRUD - operations
Using React js , Node js , Mysql
Making a book application where we can add new books , delete exsisting books , view all the available books using CRUD operations
Lets begin with the Main folder named BOOK_SHOP 
Continue by creating 2 sub folders under the main folder named backend(server) and frontend(client).
Lets start with backend
First of all we need a package.json for installing all the dependensies cmd - npm init -y - This creates a package.json file 
The first step is to install all the necessary libraries , for this app we need a database i.e Mysql , framework for nodejs i.e express and CLI for speedy deve;opment of node.js application.
cmd - npm i express mysql nodemon
Create a index.js file , which will be the starting point of our appplication
Import all the libararies inside index.js - import express from 'express' etc
lets run this backend file on the server , to do that we need to assing a port number 
and to run this file the cmd used is node name of the file


