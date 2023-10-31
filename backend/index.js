import express, { json } from 'express'
// import config from './db/config.js'
import User from './db/Users.js'
import cors from 'cors'

const port = 3000
const app = express()
app.use(cors())
app.use(json())


app.post("/login", async (req, resp) => {
    let user = await User.findOne(req.body).select('-password')
    console.log(req)
    if (req.body.password && req.body.email) {

        if (user) {
            resp.send(user)
        }
        else {
            resp.send({ result: 'User not found' })
        }
    }
    else {
        resp.send({ result: 'User not found' })
    }
})

app.listen(port, () => {
    console.log('yess i am listening to', port);
})
