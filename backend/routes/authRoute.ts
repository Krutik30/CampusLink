import { Request, Response, Router } from "express";
import { prismaClient } from "../prisma/prismaClient";
import bcrypt from "bcrypt";

const authRoutes = Router();

authRoutes.post("/register", async (req: Request, res: Response) => {     

    try{
        let {
            email,
            password,
            name,
            batch,
            roleId,
            position,
            department,
            contact_number,
            enrollmentNumber
        } = req.body;

        const userObjectReq: any = {
            batch, roleId, department, contact_number
        }
        if (roleId === 1) { // Student
            userObjectReq["enrollmentNumber"] = enrollmentNumber;
        } else if (roleId === 2) { // Faculty
            userObjectReq["position"] = position;
        } 

        console.log(userObjectReq);


        if(!email || !password || !name ){ 
            throw new Error("Required email, password Or name")
        }

        password = await bcrypt.hash(password, 10);

        const user = await prismaClient.users.create({
            data: {
                email,
                password,
                name,
                userDetails: {
                    create: userObjectReq
                }
            }
        }).then((res) => console.log(res))
        .catch( (err) => { throw err })


        res.status(200).json({
            status: "success",
            payload: user
        });     
    }catch(err: any){
        res.status(500).json({
            status: "fail",
            message: err.message,
            payload: err
        });     
    }
})

authRoutes.post("/login", async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){ 
            throw new Error("Required email, password")
        }
        const user = await prismaClient.users.findUnique({
            where: {
                email
            }
        })
        if(!user){
            throw new Error("User not found")
        }else{
            const isOk = await bcrypt.compare(password, user.password);
            if(isOk){
                res.status(200).json({
                    status: "success",
                    payload: user
                })
            }
            else{
                throw new Error("Invalid password")
            }
        }
    }
    catch(err: any){
        res.status(500).json({
            status: "fail",
            message: err.message,
            payload: err
        })
    }
})

export default authRoutes;
