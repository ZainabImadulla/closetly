# closetly

Closetly is a virtual closet app that allows users to add pictures of their clothes and descriptions to easily organize their closet. This project is
my first full-stack web application and also utilizes a machine learning model I created using Tensorflow and Keras. This model is used to classify the images the user uploads to their closet and allow them to toggle between viewing their entire closet, only tops, only bottoms, or only shoes. 

## Demo

INSERT DEMO HERE

## Prerequisites

1. Make sure you have node.js installed

## Installation

1. Fork and Clone the Project
Follow the following instructions in the console/terminal:
2. cd to client directory within project
3. run npm install to install all dependencies
4. run npm start to start front-end server
5. cd to backend directory within project
6. run npm install to install all dependencies
7. run npm start to start back-end server
8. enjoy closetly!

   
## Built With
- React.js -> the framework used for front-end development
- TailwindCSS -> CSS framework used for styling
- DaisyUI -> Component Library for TailwindCSS
- MySQL -> Database Managment System 
- FastAPI -> Web framework used to build api used for classyfing user's image.
- AmazonAWS -> Used to create an elastic web container that deployed the api created for classying image.
- Tensorflow -> Library used for creating machine learning model. 
- Keras -> Used Keras's categorical api to design a neural network, train and then test. 
- Docker -> Used to containerize and then deploy the machine learning api to amazon aws
- Axios -> Used to make queries to MySQL database and machine learning api
- Express -> Used to handle http requests to the MySQL database
- Node.js -> Used while creating the backend of the application

## Authors
Zainab Imadulla - Computer Science student at Northeastern University 

