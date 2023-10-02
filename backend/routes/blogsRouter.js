import express from 'express';
const router = express.Router();

import{createBlogs,getAllBlogs,getBlogsById,getBlogsByUser,removeBlogById,updateBlogsById} from '../controllers/blogsController.js';
router.post('/WriteBlogs', createBlogs);
router.get('/getAllBlogs', getAllBlogs);
router.get('/getBlogById/:id', getBlogsById);
router.get('/getBlogByUser/:myProp', getBlogsByUser);
router.delete('/removeBlogById/:blogId', removeBlogById);
router.put('/updateBlogById/:id', updateBlogsById);


export default router;
