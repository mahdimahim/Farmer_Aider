let mysql = require('mysql');
let db = require('../Database/database');


let approveUnapprovedQuestionFunc = (req, res) => {
    let{btnId} = req.body;
    let questionId = btnId;
    //  console.log(email+" "+password);

    if(questionId){
        var sql = `UPDATE tbl_question_bank
                   SET ?? = 'Yes'
                   WHERE ?? = ?;`;


        var data = ['Approval_Status','Question_Id', questionId];

        var query = mysql.format(sql, data);
        //console.log(query);




        db.query(query, (error, results, fields) => {
            if(error){
                res.json({message: 'An error occured'}).status(400);
            }
            else{
                res.json({
                    message:'Successfully approved',
                });
            }
        });
    }else{
        res.json({message: 'Question Id not found'}).status(400);
    }
}

const initApproveUnapprovedQuestionApp = (app) => {
    app.post('/approve_unapproved_question', approveUnapprovedQuestionFunc);
};

module.exports = initApproveUnapprovedQuestionApp;
