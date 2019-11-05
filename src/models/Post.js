const { Schema, model } = require('mongoose');

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    emailUser: {
      type: String,
      required: true
    },
    comments: {
      type: [Object]
    },
    username: {
      type: String
    },
    imageUrl: String
  },
  {
    timestamps: true
  }
);

module.exports = model('Posts', PostSchema);
