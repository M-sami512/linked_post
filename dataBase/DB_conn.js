import mysql from 'mysql2'

const dbConn = mysql.createConnection('mysql://uvnq5zayl0b3rrme:S2aITjZ4VVEEaEQ8Wl3B@bkwwhkoiaijsdabvsnrr-mysql.services.clever-cloud.com:3306/bkwwhkoiaijsdabvsnrr')
dbConn.connect((err)=>{
    if(err) return console.log("DB Connection Error")
    console.log("DB Connected Successfuly")
})

export default dbConn