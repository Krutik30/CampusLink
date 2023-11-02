import express, { json } from 'express';
import User from './db/Users.js';
import cors from 'cors'
import mongoose from 'mongoose'
import UserAcadamics from './db/UserAcadamics.js'
import multer from 'multer'
import Certificate from './db/certificateSchema.js';

const port = 3000
const app = express()
app.use(cors())
app.use(json())
const upload = multer({ dest: 'uploads/', limits: { fileSize: 1024 * 1024 * 5 } });

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
            res.send(userDetails);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.put("/userAcadamics", async (req, res) => {
    try {
        const email = req.body.email;
        const updateData = req.body;

        const result = await UserAcadamics.updateOne({ email }, updateData);

        if (result.modifiedCount > 0) {
            const updatedUserDetails = await UserAcadamics.findOne({ email });
            res.send(updatedUserDetails);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/uploadCertificate', upload.single('certificateFile'), async (req, res) => {
  try {
    console.log(req.body)
    const certificate = new Certificate({
      email: req.body.email,
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      eventPlace: req.body.eventPlace,
      eventType: req.body.eventType,
      mainActivity: req.body.mainActivity,
      certificateFile: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });

    const savedCertificate = await certificate.save();
    console.log(savedCertificate)
    res.send('Certificate uploaded successfully');
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error');
  }
})

app.get('/certificates/:email', async (req, res) => {
    try {
      const certificate = await Certificate.findOne({ email: req.params.email });
      console.log(certificate)
      if (!certificate) {
        return res.status(404).send('Certificate not found');
      }

      res.send(certificate);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(port, () => {
    console.log('yess i am listening to', port);
})
