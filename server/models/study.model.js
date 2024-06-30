const mongoose = require("mongoose"); 


var studySchema = new mongoose.Schema(
  {
    image: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    tag: {
      type: String
    },
    time: {
        type: String
    },
    lawyer: {
        type: String
    },
    category: {
      type : String
    }

},
  {
    timestamps: true
  }
);

const StudyModel=mongoose.model("StudyModel", studySchema);

module.exports = StudyModel