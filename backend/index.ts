
import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import authRoutes from './routes/authRoute';
import morgan from 'morgan';
import mainRoute from "./routes/mainRoute";
import teamRoutes from "./routes/teamRoute";


const app = express();

var corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization'],
    credentials: true
};


app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())
app.use(morgan('dev'));
app.use((err: any, req: Request, res: Response, next: NextFunction) => { 
    console.error(err);
    res.status(500).send('Something went wrong!');
})

app.use('/', mainRoute)
app.use('/auth', authRoutes);
app.use('/team', teamRoutes);

app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
});










