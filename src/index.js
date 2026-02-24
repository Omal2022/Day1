import dotenv from "dotenv"
dotenv.config()

import app  from "./app.js"
import connectDB from './config/database.js' 
import { Server } from "http"


const startServer = async () => {
    try {

        await connectDB()
        
        
        const server = app.listen(process.env.PORT || 8000 , ()=> {
            console.log(`server has started on port: ${process.env.PORT}`)
        })
        
        server.on("error", error => {
            console.log("ERROR", error)
            throw new error
        })
    }
    catch (err) {
        console.error(`DB connection failed`,err)
         process.exit(1);
    }
}

startServer()