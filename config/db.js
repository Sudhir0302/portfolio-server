const mongoose =  require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://sudhir03:valarmathi@in-aws.m68oh.mongodb.net/?retryWrites=true&w=majority&appName=in-AWS"
)
const connection = mongoose.connection;

connection.on('connected', ()=>console.log("DB Connected"))

connection.on('error', ()=>console.log("DB Error"))

module.exports = mongoose