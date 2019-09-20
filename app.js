var express= require('express');
var mongoose= require('mongoose');
var bodyparser= require('body-parser');
var cors= require('cors');


var app=express();

const route=require('./routes/route');

mongoose.connect('mongodb://localhost:27017/Citylist',{useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err){
    console.log('Error in connection : '+err);
    }
});

const port=process.env.PORT || 3000;

app.use(cors());

app.use(bodyparser.json());



app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('Response1');
})

app.listen(port,()=>{
console.log('Server started at port : '+port);
});