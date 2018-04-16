const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Videos = require('../models/videos');

const dbUrl = "mongodb://videouser1:videouser1@dbh54.mlab.com:27547/videodatabase";
mongoose.Promise = global.Promise;

mongoose.connect(dbUrl,function(err){
  if(err){
    console.log("Error occured while connection: "+ JSON.stringify(err));
  }
});
router.get("/videos", function (req,res) {
  console.log("A function to get all videos");
  Videos.find({})
    .exec(function (err, videos) {
      if(err){
        console.log("Error Occured: "+ JSON.stringify(err));
      }else{
        res.json(videos);
      }
    })
});


router.get("/videos/:id", function (req,res) {
  console.log("A function to get all videos");
  Videos.findById(req.params.id)
    .exec(function (err, video) {
      if(err){
        console.log("Error Occured: "+ JSON.stringify(err));
      }else{
        res.json(video);
      }
    })
});


router.post("/videos",function(req,res){
  console.log("post method to insert new record");
  newVideo = new Videos();

  newVideo.name = req.body.name;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;

  newVideo.save(function(err,savedVideo){
    if(err){
      console.log("Error! : "+ JSON.stringify(err));
    }else{
      res.json(savedVideo);
    }
  });
});


router.put("/videos/:id", function (req,res) {
  console.log("Put method to update video by Id");
  Videos.findByIdAndUpdate(req.params.id,
    {
      $set: {name: req.body.name, url: req.body.url, description: req.body.description}
    },
    {
      new: true
    },
    function (err, updatedVideo) {
      if(err){
        console.log("Error occured while update: ", JSON.stringify(err));
      }else{
        res.json(updatedVideo);
      }
    })

});

router.delete("/videos/:id", function (req, res) {
  console.log("Delete method invoked");
  Videos.findByIdAndRemove(req.params.id, function(err, deletedVideo){
    if(err){
      console.log("Error occured while deletion: "+ JSON.stringify(err));
    }else{
      res.json(deletedVideo);
    }
  })
})
module.exports = router;
