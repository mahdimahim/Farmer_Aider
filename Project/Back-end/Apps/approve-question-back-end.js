let mysql = require('mysql');
let db = require('../Database/database');


let approveQuestionFunc = (req, res) => {
    let{status} = req.body;

    //  console.log(status);

    if(status){
        var sql = `SELECT ??, ??, ??, ??, ??
                   FROM
                      tbl_all_users AS u,
                      tbl_question_bank AS q
                   WHERE
                      ?? = ?? AND
                      ?? = ?`

        //var sql = 'SELECT * from tbl_question_bank where ??=?';
        var data = ['u.User_Name', 'q.Question_Id', 'q.Question_Date', 'q.Question', 'q.Question_Topic',
                    'u.User_Id', 'q.User_Id', 'q.Approval_Status', status];

        var query = mysql.format(sql, data);
        //console.log(query);




        db.query(query, (error, results, fields) => {
            if(error){
                res.json({message: 'An error occured'}).status(400);
            }
            else{
                if(results.length == 0){
                    res.json({message: 'There is no more post to approve'}).status(400);
                }else{
                    //console.log(results[2].Question);
                    res.json({
                        message:'Now approve questions',
                        result : results
                    });

                }
            }
        });
    }else{
        res.json({message: 'status not found'}).status(400);
    }
}

const initApproveQuestionApp = (app) => {
    app.post('/approve_question', approveQuestionFunc);
};

module.exports = initApproveQuestionApp;
