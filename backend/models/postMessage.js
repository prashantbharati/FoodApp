import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
