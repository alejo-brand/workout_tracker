 const mongoose = require("mongoose");

 const Schema = mongoose.Schema;

 const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default:Date.now()
    },

    excercises:[
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
 
 const Workout = mongoose.model("Workout",WorkoutSchema);
 module.exports = Workout; 