import express from 'express';
import mongoose from 'mongoose';
import title from 'process';
import Blogs from '../models/blogModel.js';

//write and insert a blog by a spesific user
export const createBlogs = async (req, res) => {
  const blogs = new Blogs({
    title: req.body.title,
    subDescription: req.body.subDescription,
    description: req.body.description,
    email: req.body.email,
    url: req.body.url,
  });

  try {
    const newBlog = await blogs.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get all the blogs in the db
export const getAllBlogs = async (req, res) => {
  try {
    const AllBlogs = await Blogs.find();
    res.status(200).json(AllBlogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get one blog by blog id
export const getBlogsById = async (req, res) => {
  const { id } = req.params;

  try {
    const blogs = await Blogs.findById(id);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get all blogs by blog myProp
export const getBlogsByUser = async (req, res) => {
  const { myProp } = req.params;

  try {
    const blogs = await Blogs.find({ email: myProp });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//delete blogs by id
export const removeBlogById = async (req, res) => {
  const { blogId } = req.params;

  let data = await Blogs.findByIdAndRemove(blogId);

  res.json({ data: data, msg: 'delete success' });
};

//update blog data by id
export const updateBlogsById = async (req, res) => {
  const { id } = req.params;
  const { title, subDescription, description, url } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No accept with id: ${id}`);

  const updatedTopic = {
    title: title,
    subDescription: subDescription,
    description: description,
    url: url,
    _id: id,
  };

  await Blogs.findByIdAndUpdate(id, updatedTopic, { new: true });

  res.json(updatedTopic);
};