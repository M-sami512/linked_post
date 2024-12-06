import express from 'express'
import userRouter from './modules/users/users.routes.js'
import postsRouter from './modules/posts/posts.routes.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
        
app.use('/auth',userRouter)
app.use('/posts',postsRouter)
        
app.all('/',(req,res)=>{
    res.status(404).json({massage : "not found"})
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("server running...")
})      