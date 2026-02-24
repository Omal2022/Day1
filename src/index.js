import dotenv from "dotenv"
dotenv.config()

import express from "express"
import connectDB from './config/database.js' 

const app = express()

const startServer = async () => {
    try {

        await connectDB()

        app.on("error", error => {
            console.log("ERROR", error)
            throw new error
        })

        app.listen(process.env.PORT || 8000 , ()=> {
            console.log(`server has started on port: ${process.env.PORT}`)
        })
    }
    catch (err) {
        console.error(`DB connection failed`,err)
    }
}

startServer()