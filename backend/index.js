import express from 'express'

const app = express();

app.get('/',async (req,res)=>{
    res.send('What"s You want')
})

app.listen(3000, ()=>{
    console.log('yess i am listening');
})