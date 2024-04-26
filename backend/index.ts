
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import authRoutes from "./APIs/Auth/authRoutes";
import morgan from 'morgan';


const app = express();

var corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization'],
    credentials: true
};


app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({
    extended: true
}));
// app.use(bodyParser.json())
app.use(morgan('dev'));

// app.use('/', mainRoute)
app.use('/auth', authRoutes);

app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
});










