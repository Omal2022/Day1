import express from "express"



import router from "./routes/user.routes.js"


const app = express() //Our express app init  


app.use(express.json()) // Middleware to parse incoming JSON data

app.use("/api/v1/users", router)





export default app