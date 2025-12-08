**📌 Get YouTube Subscribers – Backend API (Node.js + MongoDB)**

This project is a backend application built using Node.js, Express, and MongoDB, developed as part of the Full Stack Web Development Capstone  Project.
The application allows users to retrieve YouTube subscribers data from a MongoDB database via RESTful API endpoints. This project demonstrates practical backend 
development skills, database operations, clean folder structure, error handling, and real-world server-side application design.

**##🎯 Project Overview**

This Capstone Project aims to integrate core backend development concepts into a real-world application. It provides hands-on experience working with server creation, 
database integration, API routing, environment configuration, and modular code architecture.

**The system enables:**

- Fetching all subscribers
- Fetching subscriber details by ID
- Fetching subscriber names and subscribed channels

**📍 API Endpoints**


Method	              Endpoint	                  Description                                    

GET	    |         /subscribers	      |  Returns an array of all subscribers                   
GET	    |         /subscribers/names	|  Returns an array with only name & subscribedChannel    
GET   	 |         /subscribers/:id	  |  Returns subscriber by ID; returns 400 if ID is invalid 



**📁 Project Structure**

Subscribers-Mongo-Node-BoilerPlate
│──client - frontend-files
|──server
|    ├── src
│         ├── routes
│         ├── controllers
│         ├── models
│         ├── app.js
│         ├── index.js
│         ├── createDatabase.js
│         └── ...



**📌 Tech Stack**

. React + Vite
. Express.js
. Mongodb Atlas
. Node.js

**🛠 Installation & Setup**

**Clone the repository**

. git clone https://github.com/your-repo-link.git
 cd Subscribers-Mongo-Node-BoilerPlate-main


**Install dependencies**

. npm install 

**Create database**

. node src/createDatabase.js

**Start Server**

. node src/index.js
