import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './Routes/authRoutes.js'
import quizRoutes from './Routes/quizRoutes.js'

const app = express();
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(bodyParser.json());
app.use(cors())
dotenv.config()

const connectionUrl = process.env.URL;
const port = process.env.PORT

mongoose
    .connect(connectionUrl)
    .then(() => ("DB CONNECTED"))
    .catch((err) => ("DB CONNECTION FAILED", err))

app.use('/auth',authRoutes);
app.use('/quiz', quizRoutes);
app.listen(port, ()=> console.log(`Server running on port: ${port}`)) 