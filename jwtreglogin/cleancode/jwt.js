const jwt = require('jsonwebtoken')
const {runquery} = require('./db')

const jwtkey = 'anyprivatekey'
const jwtlifetime = 300;

const userlog = (req, res)=>{
    // var sql = `select name,pwd where name ='${req.body.name}'and id='${req.body.password}'`
    // runquery(sql)

}
