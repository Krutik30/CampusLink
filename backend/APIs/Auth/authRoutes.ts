import express from 'express'
import loginUser from './fun/loginUser';

const authRoutes = express.Router();

authRoutes.get('/login', (req: any, res: any) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log({email, password})
})

export default authRoutes;