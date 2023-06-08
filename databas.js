require('dotenv').config()
const mysql =  require("mysql2")


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD
}).promise()


exports.getData= async function(){
    const [result] = await pool.query("SELECT * FROM donors");
    console.log(result);
    return result;
}

exports.getDataType= async function(bloodType){
    const [result] = await pool.query('SELECT * FROM donors WHERE bloodType = ?', bloodType);
    return result;
}
exports.creatData= async function(name,gender,age,bloodType,condition,description,phoneNo,){
    const [result] = await pool.query("INSERT INTO `armas`.`donors` (`name`, `gender`, `age`, `bloodType`, `condition`, `description`, `phoneNo`, `creation_date`) VALUES (?, ?, ?, ?, ?, ?, ?,?)", [name,gender,age,bloodType,condition,description,phoneNo, new Date().toISOString().split('T')[0]])
    console.log(result.insertId)
    return {
       id: result.insertId,
       name: name,
       gender: gender,
       age: age,
       bloodType: bloodType,
       condition: condition,
       description: description,
       phoneNo: phoneNo,
    }
}









