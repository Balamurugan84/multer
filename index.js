const express = require('express');
const  cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const axios = require('axios');
require('dotenv').config();
const multer = require('./multer/multer');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/healthcheak', (req, res)=>{
   console.log("it's working")
//    process.exit(1)
   res.send({status:"success"}) 
})

mongoose.connect('mongodb://localhost:27017/Task',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(data=>{
    console.log("database connected ")
}).catch(err=>{
    console.log(err.message)
    process.exit(1)
})


app.use(express.json());
app.use(express.static('uploads'));
app.set('view engine', 'ejs');
app.use('/api/v1/upload/', multer);


app.listen(3030, ()=>{
   console.log("server started...");
})

// http://localhost:3030
