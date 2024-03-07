
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
// import authRoutes from './routes/auth';
import morgan from 'morgan';


const app = express();

var corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174', 'https://expence-tracker-hackdspring.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization'],
    credentials: true
};


// app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(express.json());
app.use(morgan('dev'));

// app.use('/', mainRoute)
// app.use('/auth', authRoutes);

app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
});










