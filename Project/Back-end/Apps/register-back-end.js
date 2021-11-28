let mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10; // amount of rounds a plaintext goes through to actually get hashed
// ~10 hashes per second

let db = require('../Database/database');

let registerUser = (user_name, email_address, password,
  type_of_account, current_address, res) => {
//global.userId = 0;


    bcrypt.hash(password, saltRounds, function(err, hash) {

        let sql = "INSERT INTO tbl_all_users(??,??,??,??,??) values(?,?,?,?,?)";
        let data = ['User_Name', 'Email_Address', 'Password', 'Type_Of_Account', 'Current_Address',
                    user_name, email_address, hash, type_of_account, current_address];

        let query = mysql.format(sql, data);

        db.query(query, (error, results, fields)=>{
          if(error){
            res.status(400).send({
              message: 'User registration failed'
            })
          }else {

            let sql1 = "SELECT User_Id from tbl_all_users where ??=?";
            let data1 = ['User_Name', user_name];

            let query1 = mysql.format(sql1, data1);
            db.query(query1, (error1, results1, fields1)=>{
                if(error1){
                    console.log('Error in User_Id query process');
                    //console.log('jj');
                }else {
                    user = results1[0];

                    let user1 = {
                      userId: user.User_Id,
                      username: user_name,
                      emailAddress: email_address,
                      typeOfAccount: type_of_account,
                      currentAddress: current_address
                    }
                    jwt.sign({user1},'secretkey',{expiresIn:'24h'}, (err,token)=>{
                        res.json({
                          message:'Registration Successful',
                          tokenMessage: token,
                          userId: user.User_Id,
                          username: user_name,
                          emailAddress: email_address,
                          typeOfAccount: type_of_account,
                          currentAddress: current_address
                        });

                    });
                }

            })



          }
        });
    });


}


const initRegistrationApp = (app) => {
  app.post('/register', (req, res)=>{
      console.log(req.body);

      let {user_name, email_address, password,
        type_of_account, current_address} = req.body;

      registerUser(user_name, email_address, password,
        type_of_account, current_address, res);
  });
};

module.exports = initRegistrationApp;
