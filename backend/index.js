import express, { json } from 'express'
// import config from './db/config.js'
import User from './db/Users.js'
import cors from 'cors'
import mongoose from 'mongoose'
import UserAcadamics from './db/UserAcadamics.js'

const port = 3000
const app = express()
app.use(cors())
app.use(json())

mongoose.connect('mongodb+srv://agherakrutik99:Krutik30@cluster0.raa0ml1.mongodb.net/campusLink')

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('DB YES YES');
})

connection.on('error', (error) => {
    console.log('mongo error: ' + error);
})

app.post("/register",async(req,res)=>{
    try{
        let user = new User(req.body)
        let result = await user.save()
        result = result.toObject()
        delete result.password
        res.send(result) 
    }catch(err){
        console.log(err)
    }
})

app.post("/login", async (req, res) => {
    let user = await User.findOne(req.body).select('-password')
    console.log(req)
    if (req.body.password && req.body.email) {

        if (user) {
            res.send(user)
        }
        else {
            res.send({ result: 'User not found' })
        }
    }
    else {
        res.send({ result: 'User not found' })
    }
})

app.post("/getUserAcadamics", async (req, res) => {
    const query = {
        email: req.body.email
    };

    try {
        const userDetails = await UserAcadamics.findOne(query);
        if (userDetails) {
            console.log(userDetails);
            res.send(userDetails);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.post("/userAcadamics", async (req, res) => {
    try{
        const userDetails = new UserAcadamics(req.body)
        console.log(userDetails)
        const result = (await userDetails.save()).toObject()
        console.log(result)
        res.send(result)
    }catch(err){
        console.error(err)
    }
})

app.listen(port, () => {
    console.log('yess i am listening to', port);
})
