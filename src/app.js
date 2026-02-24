import express from "express"
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"


const app = express() //Our express app init  


app.use(express.json()) // Middleware to parse incoming JSON data

app.use("/api/v1/users", userRouter)
app.use("/api/v1/posts", postRouter)





export default app