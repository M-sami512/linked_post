import {Router} from 'express'
import { addpost, deletePost, getAllPosts, getPost, getUserPosts, updatePost } from './posts.controller.js'

const postsRouter = Router()

postsRouter.route('/').post(addpost).get(getAllPosts)
postsRouter.route('/:id').get(getPost).put(updatePost).delete(deletePost)
postsRouter.get('/user/:id',getUserPosts)

export default postsRouter