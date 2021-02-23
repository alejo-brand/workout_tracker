 const mongoose = require("mongoose");

 const Schema = mongoose.Schema;

 const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default:Date.now()
    },

    exercises:[
      {
        name:{
          type:String,
          trim:true,
          required:true
        },
        type:{
          type:String,
          trim:true,
          required:true
        },
        weight:{
          type:Number,
          trim:true
        },
        sets:{
          type:Number,
          trim:true
        },
        reps:{
          type:Number,
          trim:true
        },
        duration:{
          type:Number,
          trim:true
        },
        distance:{
          type:Number,
          trim:true
        } 
      }
    ]
 });
 WorkoutSchema.set("toJSON", {virtuals:true});
 WorkoutSchema.virtual("totalDuration").get(function(){
  let duration = 0;

  this.exercises.forEach((exercise)=> {
    duration +=  exercise.duration 
  });
  return duration;
});

 
 const Workout = mongoose.model("Workout",WorkoutSchema);
 module.exports = Workout; 