const express = require('express');
const  cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const axios = require('axios');
require('dotenv').config();
const user = require('./routes/user_routes');
const category = require('./routes/category_route');
const product = require('./routes/product_route');
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
app.use('/api/v1/user/',user);
app.use('/api/v2/category/', category);
app.use('/api/v3/product/', product);
app.use('/api/v4/upload/', multer);


app.listen(3030, ()=>{
   console.log("server started...");
})

// http://localhost:3030