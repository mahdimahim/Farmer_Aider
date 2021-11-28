let mysql = require('mysql');
let db = require('../Database/database');

let addQuestion = (userId, question, question_topic, res) => {
    var today = new Date();
    var question_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var approval_status = 'No';


    let sql = "INSERT INTO tbl_question_bank(??,??,??,??,??) values(?,?,?,?,?)";
    let data = ['User_Id', 'Question_Date', 'Question', 'Question_Topic','Approval_Status',
                userId, question_date, question, question_topic, approval_status];

    let query = mysql.format(sql, data);

    db.query(query, (error, results, fields)=>{
      if(error){
          res.status(400).send({
            message: 'Adding question failed'
          })
      }else{
          res.json({
            message:'Your question is waiting for approval'
          });
      }
    });


}


const initAddQuestionApp = (app) => {
  app.post('/add_question', (req, res)=>{
      //console.log(req.body);

      let {userId, question, question_topic} = req.body;

      addQuestion(userId, question, question_topic, res);
  });
};

module.exports = initAddQuestionApp;
