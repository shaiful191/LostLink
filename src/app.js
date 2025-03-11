import express from 'express'
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import userRouter from './routes/user.js';
import itemRouter from './routes/item.js'; 
import { errorMiddleware } from './middlewares/error.js';
import cors from "cors";


export const app = express();

//Using middlewares:
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials:true,
  }));

//Using routes:
app.use('/api/v1/user', userRouter);
app.use('/api/v1/items', itemRouter); 

//testing api:
app.get('/', (req, res) => {
  res.send('LostLink App is working.');
});

//using Error Middleware
app.use(errorMiddleware);



