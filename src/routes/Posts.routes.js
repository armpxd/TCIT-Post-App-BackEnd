import { Router } from "express";
import { createPost, getPost, deletePost} from '../controllers/posts.controller.js';

const router = Router();

router.get('/posts', getPost);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);

export default router;