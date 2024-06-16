import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes

import userRouter from './routes/user.routes.js'

//routes declaraition
app.use("/api/v2/users", userRouter)

// http://localhost:8000/api/v2/users/register

export { app }