let mysql = require('mysql');
let db = require('../Database/database');


let loadApprovedQuestionFunc = (req, res) => {
    let{status} = req.body;

    //  console.log(email+" "+password);

    if(status){
        var sql = `SELECT ??, ??, ??, ??, ??, ??
                   FROM
                      tbl_all_users AS u,
                      tbl_question_bank AS q
                   WHERE
                      ?? = ?? AND
                      ?? = ?`

        //var sql = 'SELECT * from tbl_question_bank where ??=?';
        var data = ['u.User_Name', 'u.User_Id', 'q.Question_Id', 'q.Question_Date', 'q.Question', 'q.Question_Topic',
                    'u.User_Id', 'q.User_Id', 'q.Approval_Status', status];

        var query = mysql.format(sql, data);
        //console.log(query);

        var query2 = `SELECT * FROM tbl_answer_bank`;


        db.query(query, (error, results, fields) => {
            if(error){
                res.json({message: 'An error occured'}).status(400);
            }
            else{
                if(results.length == 0){
                    res.json({message: 'Question Bank is Empty :('}).status(400);
                }else{

                    db.query(query2, (error2, results2, fields2)=>{
                        if(error2){
                            res.json({message: 'An error occured in tbl_answer_bank query process'}).status(400);
                        }
                        else {
                          res.json({
                              message:'All are approved questions here',
                              result : results,
                              result2: results2
                          });
                        }
                    });
                    //console.log(results[1].Question);

                }
            }
        });
    }else{
        res.json({message: 'status not found'}).status(400);
    }
}

const initLoadApprovedQuestionApp = (app) => {
    app.post('/load_approved_question', loadApprovedQuestionFunc);
};

module.exports = initLoadApprovedQuestionApp;
