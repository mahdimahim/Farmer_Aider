let mysql = require('mysql');
const jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');
const saltRounds = 10;
let db = require('../Database/database');
let userToken;

let loginFunc = (req, res) => {
    let{email, password} = req.body;

    //console.log(email+" "+password);

    if(email && password){

        var sql = 'SELECT * from tbl_all_users where ??=?';
        var data = ['Email_Address', email];

        var query = mysql.format(sql, data);
        //console.log(query);

        let noUser = 'The Email Address or Password is Incorrect';


        db.query(query, (error, results, fields) => {
            if(error){
                res.json({message: noUser}).status(400);
            }
            else{
                if(results.length == 0){
                    res.json({message: noUser}).status(400);
                }else{

                    let user = {
                       User_Id: results[0].User_Id,
                       User_Name: results[0].User_Name,
                       Email_Address: results[0].Email_Address,
                       Type_Of_Account: results[0].Type_Of_Account,
                       Current_Address: results[0].Current_Address };

                    let hash = results[0].Password;

                    bcrypt.compare(password, hash, function(err, res1) {
                        if(error){
                          res.send({message: 'Login error'}).status(200);
                        }else if (res1 == true) {

                          //res.status(200).send({message: 'Login Successful'});
                          console.log('Hello '+user.User_Name);
                          // give token to user
                          jwt.sign({user},'secretkey',{expiresIn:'24h'}, (err,token)=>{
                              res.json({
                                message:'Login Successful',
                                tokenMessage: token,
                                userId: user.User_Id,
                                username: user.User_Name,
                                emailAddress: user.Email_Address,
                                typeOfAccount: user.Type_Of_Account,
                                currentAddress: user.Current_Address
                              });
                              //console.log(token);
                          });

                          //res.header('authorization',userToken);


                        }
                        else {
                          res.send({message: noUser}).status(200);
                        }
                    });


                }
            }
        });
    }else{
        res.json({message: 'Invalid Form Submission'}).status(400);
    }
}

const initLoginApp = (app) => {
    app.post('/login', loginFunc);
};

module.exports = initLoginApp;
