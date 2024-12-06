import dbConn from "../../dataBase/DB_conn.js";
import bcrypt from 'bcrypt'

const signUp = (req,res) =>{
    req.body.pass = bcrypt.hashSync(req.body.pass , 8)
    dbConn.query('INSERT INTO users set ?',req.body)
    res.status(201).json({massage : "succes"})
}

const signIn =  (req,res) =>{
    dbConn.query(`SELECT id,email,pass FROM users WHERE email ='${req.body.email}'`, (err,data)=>{
        if(data.length != 0){
            let mach = bcrypt.compareSync(req.body.pass , data[0].pass)
            if(mach) return res.status(200).json({massage : "login...token" , userId : req.body.id})
            else return res.status(404).json({massage : " password incorect"})
        }else return res.status(404).json({massage : "Email incorect"})
    })
}

 
export {
    signUp,
    signIn
}