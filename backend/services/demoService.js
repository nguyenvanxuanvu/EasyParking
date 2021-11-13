var Test = require('../models/demoModel');

let getTest = (res)=>{
    Test.findById({_id:"618f2dbe2712939881592217"},function(err, test){
        if(err){
            res.status(500).json(err);
        }
        else{
            res.json(test);            
        }
    });
}

let createTest = (data, res)=>{
    Test.create(data, function(err, data){
        if(err)
            throw err;
        else{
            getTest(res);
        }
    })
}

module.exports = {getTest, createTest};