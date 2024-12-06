import dbConn from "../../dataBase/DB_conn.js"


const addpost = (req,res)=>{
    dbConn.query(`SELECT u.id FROM users u JOIN postes p WHERE u.id=${req.body.user_id}`,(err,data)=>{
        if(data.length != 0){
            dbConn.query('INSERT INTO postes set ?',req.body)
            res.status(201).json({massage :"post added"})
        }else return res.status(404).json({massage :"incorect user id"})
    })
}

const getAllPosts =(req,res)=>{
    dbConn.query(`SELECT users.id as userId,name,postes.id as postId,titel,body 
        FROM users JOIN postes on users.id = postes.user_id`,(err,data)=>{ 
            res.status(200).json(data)
    })
}

const getPost = (req,res)=>{
    dbConn.query(`SELECT users.id as userId,name,postes.id as postId,titel,body 
        FROM users JOIN postes on users.id = postes.user_id WHERE postes.id = ${req.params.id}`,(err,data)=>{ 
            res.status(200).json(data)
    })
}

const getUserPosts = (req,res)=>{
    dbConn.query(`SELECT users.id as userId,name,postes.id as postId,titel,body 
        FROM users JOIN postes on users.id = postes.user_id WHERE users.id = ${req.params.id}`,(err,data)=>{ 
            res.status(200).json(data)
    })
}

const updatePost = (req,res)=>{
    dbConn.query(`UPDATE postes set ? WHERE id=?`,[req.body,req.params.id])
    res.status(200).json({massage:"post updated"})
}

const deletePost = (req,res)=>{
    dbConn.query(`DELETE FROM postes WHERE id= ?`,req.params.id)
    res.status(200).json({massage:"post deleted"})
}

export{
    addpost,
    getAllPosts,
    getPost,
    getUserPosts,
    updatePost,
    deletePost
}

