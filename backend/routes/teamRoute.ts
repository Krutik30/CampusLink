import { Router } from "express";
import { prismaClient } from "../prisma/prismaClient";

const teamRoutes = Router();

teamRoutes.post("/registerTeam", async(req, res) => {
    try{
        let { teamName, teamSize, teamSlogan, teamDescription, teamLogo, teamStatus, userId, leader } = req.body;

        if(!teamName){
            throw new Error("Missing parameters");
        }
        
        const team = await prismaClient.team.create({
            data: {
                name: teamName,
                teamSize,
                teamSlogan,
                teamDescription,
                teamLogo,
                teamStatus,
            }
        }).then( async res => {
            for( let i = 0; i < teamSize; i++){
                const teamManagement = await prismaClient.teamManagement.create({
                    data: {
                        userDetailId: userId,
                        teamName: teamName,
                        leader,
                    }
                }).catch(err => { throw err })
            }
        } ).catch(err => {throw err});

        res.json({status: 201, payload: team })
    }catch(err){
        console.log(err);
        res.status(400).json({ status: 400, payload: err});
    }
})

export default teamRoutes;
