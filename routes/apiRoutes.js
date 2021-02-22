const router = require("express").Router();
const {Workout} = require("../models")

router.get("/api/workouts",(req,res)=>{
  Workout.find().then((workouts)=>{
    res.json(workouts);
  }).catch((err)=>{
    res.status(500).json(err);
  })
});


router.post("/api/workouts",(req,res)=>{
  Workout.create(req.body).then((workout)=>{
    res.json(workout);
  }).catch((err)=>{
    console.log(err);
    res.status(500).json(err);
  });
  
});

router.put("/api/workouts/:id",(req,res)=>{
  Workout.findByIdAndUpdate(
    req.params.id,
    {$push:{exercises:req.body}},
    {new:true}
  ).then((workout)=>{
    res.json(workout);
  }).catch((err)=>{
    res.status(500).json(err);
  });
  
});
router.get("/api/workouts/range",(req,res)=>{
  
});
module.exports = router;