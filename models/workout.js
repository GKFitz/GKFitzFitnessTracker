const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter Exercise Type",
        },
      name: {
        type: String,
        required: "Enter Exercise Type",

      },
      duration: {
        type: Number,
        required: "Enter Exercise Type",
      },
      weight: {
        type: Number,
        
      },
      reps: {
        type: Number,

      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
        }

    }
  ]
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;