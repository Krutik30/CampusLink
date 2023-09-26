const express= require('express')
const config = require('./db/config')
const User = require('./db/Users')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())


app.post("/login",async(req,resp)=>{
     let user = await User.findOne(req.body).select('-password')
    console.log( req)
    if(req.body.password && req.body.email){
     
     if(user){
          resp.send(user)
         }
         else{
          resp.send({result : 'User not found'})
         }
    }
    else{
     resp.send({result : 'User not found'})
    }
})

app.listen(3000, ()=>{
    console.log('yess i am listening');
})
