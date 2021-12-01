let mysql = require('mysql');

let db = require('../Database/database');

let loanInsertData = (userId, userName, postalCode, loanAmount, res) => {
//  global.userId = 0;




        let sql = "INSERT INTO tbl_loan(??,??,??,??) values(?,?,?,?)";
        let data = ['User_Id', 'User_Name', 'Loan_Amount', 'Postal_Code',
                    userId, userName, loanAmount, postalCode];

        let query = mysql.format(sql, data);

        db.query(query, (error, results, fields)=>{
          if(error){
            res.status(400).send({
              message: 'Insertion process failed'
            })
          }else {

                res.json({
                    message:'Successful'
                });

          }
        });



}


const initLoanInsertDataApp = (app) => {
  app.post('/loan_insert_data', (req, res)=>{

      let {userId, userName, postalCode, loanAmount} = req.body;
      //console.log('fgzfg');
      loanInsertData(userId, userName, postalCode, loanAmount, res);
  });
};

module.exports = initLoanInsertDataApp;
