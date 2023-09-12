//import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";


const PORT = process.env.PORT || 5050;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('api/users', userRouter)

// start the Express server
app.get('/', function(request, response) {
    response.send('Simple web server is ready ');
});


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});