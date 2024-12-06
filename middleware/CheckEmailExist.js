import dbConn from "../dataBase/DB_conn.js";

dbConn

const CheckEmailExiest = (req,res,next)=>{
    dbConn.query(`SELECT email FROM users WHERE email ='${req.body.email}'`, (err,data)=>{
        if(data && data.length !== 0) return res.status(409).json({massage : "Email Already Exiest"})
        next()
    })
}


export default CheckEmailExiest