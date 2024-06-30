const mongoose = require("mongoose"); 


var attorneySchema = new mongoose.Schema(
  {
    image: {
        type: String
    },
    name: {
        type: String
    },
    biography: {
        type: String
    },
    status: {
      type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }

},
  {
    timestamps: true
  }
);

const AttorneyModel=mongoose.model("AttorneyModel", attorneySchema);

module.exports = AttorneyModel