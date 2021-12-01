let mysql = require('mysql');
let db = require('../Database/database');

let insertAnswer = (questionId, specialistName, answer, res) => {


    let sql = "INSERT INTO tbl_answer_bank(??,??,??) values(?,?,?);";
    let data = ['Question_Id', 'Specialist_Name', 'Answer',
                questionId, specialistName, answer];

    let query = mysql.format(sql, data);

    db.query(query, (error, results, fields)=>{
      if(error){
          res.status(400).send({
            message: 'Insertion process failed'
          });
      }else{
          res.json({
            message:'Your answer added successfully'
          });

      }
    });


}


const initInsertAnswerApp = (app) => {
  app.post('/insert_answer', (req, res)=>{
      //   console.log(req.body);

      let {questionId, specialistName, answer} = req.body;

      insertAnswer(questionId, specialistName, answer, res);
  });
};

module.exports = initInsertAnswerApp;
