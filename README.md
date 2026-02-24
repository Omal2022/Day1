# 🚀 Auth & Posts REST API

## 📖 Project Overview

This is a **RESTful Backend API** built with **Node.js**, **Express**, and **MongoDB**.

The application provides:

- 🔐 **User Authentication** (Register & Login)  
- 📝 **Full CRUD functionality for Posts**  
- 🧩 **UUID-based document IDs**  
- 📦 **Structured MVC architecture**  
- 🌍 **Environment-based configuration**

This project demonstrates backend fundamentals including authentication, route protection, database integration, and API design.

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- UUID  
- Dotenv  
- Nodemon  
- bcrypt (for password hashing)  
- JSON Web Token (JWT) (if you're using it for auth)  

---

## 📂 Project Structure

src/
│
├── config/
│ ├── database.js
│ └── constant.js
│
├── controller/
│ ├── post.controller.js
│ └── user.controller.js
│
├── models/
│ ├── post.model.js
│ └── user.model.js
│
├── routes/
│ ├── post.routes.js
│ └── user.routes.js
│
├── app.js
└── index.js


---