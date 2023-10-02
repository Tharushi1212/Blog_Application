import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    subDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blogs = mongoose.model("blogPosts", blogSchema);
export default Blogs;
