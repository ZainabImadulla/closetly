# Closetly

Closetly is a virtual closet app that allows users to add pictures of their clothes and descriptions to easily organize their closet. This project is
my first full-stack web application and also utilizes a machine learning model I created using Tensorflow and Keras. This model is used to classify the images the user uploads to their closet and allow them to toggle between viewing their entire closet, only tops, only bottoms, or only shoes. 

## Demo

(https://console.cloudinary.com/pm/c-a12f0d0e4288c500a6a7e5f0fa8d57/media-explorer?assetId=4da0014e61cc247547d02a5111057ec7)

# Getting Started

## Prerequisites

Download Node.js and Git

## Installation

1. Fork and Clone the Project
(Follow the following instructions in the console/terminal)
2. cd to the client directory within project
3. Run npm install to install all dependencies
4. Run npm start to start front-end server
5. cd to the backend directory within project
6. Run npm install to install all dependencies
7. Run npm start to start back-end server
8. Enjoy closetly!

   
## Built With

- **React.js**  
  A JavaScript library used for building the front-end of the application.

- **TailwindCSS**  
  A CSS framework used for styling the application's front-end. 

- **DaisyUI**  
  A component library for TailwindCSS that offers pre-designed UI components. This helped to streamline the process of creating an aesthetically pleasing application. 

- **MySQL**  
  A relational database management system used for storing and managing application data. MySQL handled data persistence and retrieval for the project.

- **FastAPI**  
  A modern web framework used to build the API responsible for classifying user images. 

- **Amazon AWS**  
  Used to create and manage an Elastic Container Service (ECS) to deploy the FastAPI application.

- **TensorFlow**  
  The library used for creating and training the image classification model. 

- **Keras**  
  Utilized Keras’s categorical API to design, train, and test a neural network model.

- **Docker**  
  Used to containerize the machine learning API and deploy it to Amazon AWS. 

- **Axios**  
  Used for making HTTP queries to the MySQL database and interacting with the machine learning API.

- **Express**  
  A web framework used for handling HTTP requests to the MySQL database. 

- **Node.js**  
  The runtime environment used to build the backend of the application.

- **Cloudinary**
  Used to upload and store the images provided by the user. 

# Image Classification Model
   A really cool part of this application was the addition of a machine learning model that categorizes the user's clothing. The model is a neural newtork that was created, trained, and tested using Tensorflow and Keras. The dataset used for taining and testing this model was FashionMNSIT. The model I created achieved a 94.11% accuracy on the training set and a 89.75% accuracy on the testing set. As this model was trained with the FashionMNSIT dataset it can sometimes misclasify images provided by a user of the website. The best way to address this error would be to increase the training set, but this would be extremely time consuming and difficult as a student, and unnecessary for this personal project. 
   - [Google CoLab Notebook with Model](https://colab.research.google.com/drive/1gl_GrBTrZr8H8i-yyKviSznHjEVlycWG?usp=sharing)
   - [Github Repository with API created with FastAPI](https://github.com/ZainabImadulla/clothing_recognition_api)
   
# Authors
Zainab Imadulla - Computer Science student at Northeastern University 

