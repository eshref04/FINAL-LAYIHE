const mongoose = require("mongoose"); 


var blogSchema = new mongoose.Schema(
  {
    image: {
        type: String
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    description: {
      type: String
    },
    date: {
        type: String
    },
    author: {
        type: String
    },
    tag: {
        type: String
    }

},
  {
    timestamps: true
  }
);

const BlogModel=mongoose.model("BlogModel", blogSchema);

module.exports = BlogModel