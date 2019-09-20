const express= require('express');
const router=express.Router();
const City= require('../models/city')



router.get('/city',(req,res,next)=>{
    //res.send("Receive contacts");
    City.find(function(err,citys){
        res.json(citys);
    })

})

router.post('/city',(req,res)=>{

    let newCity=new City({
        city:req.body.city,
        code:req.body.code 
    });
    newCity.save((err,citys)=>{
        if(err){
            res.json({msg:'Failed to add City'});
        }
        else{
            res.json({msg:'City added successfully'});
        } 
    })

})


router.delete('/city/:id',(req,res,next)=>{
    City.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})



module.exports=router;