import express from "express";
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import connectDB from "./config/db.js";
import colors from 'colors';
connectDB();
const app = express();
const PORT = 5000;

app.get('/' , (req , res) => {
    res.send('Hello from Home Page');
});

app.use(bodyParser.json());

app.use('/users' , userRoutes);

app.listen(PORT , ()=> console.log(`Server running on PORT: http://localhost:${PORT}`));
