const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const BlogSchemaValidation = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  image:Joi.string(),
  src: Joi.string(),
  likes: Joi.array(),
  comments: Joi.array(),
  journalistId: Joi.objectId(),
  tagId: Joi.array()
});

module.exports = BlogSchemaValidation;
