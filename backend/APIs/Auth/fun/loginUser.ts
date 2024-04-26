import { Request, Response } from 'express';
import prisma from '../../../utils/prismaClient';
import bcrypt from 'bcrypt';

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log({email})

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (user) {
            const passwordMatch: boolean = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                return res.status(200).json({
                    status: 200,
                    message: 'Login Granted',
                    payload: user
                });
            } else {
                return res.status(401).json({
                    status: 401,
                    message: 'Incorrect Password'
                });
            }
        } else {
            return res.status(404).json({
                status: 404,
                message: 'User Not Found'
            });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        });
    }
}

export default loginUser;
