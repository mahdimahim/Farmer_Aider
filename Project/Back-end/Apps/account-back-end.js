let mysql = require('mysql');
let db = require('../Database/database');



let loadVisitAccountFunc = (req, res) => {
    let{userId} = req.body;


    if(userId){
        var sql = `SELECT COUNT(??) AS User_Id FROM tbl_question_bank WHERE ??=?;`

        var data = ['User_Id','User_Id', userId];

        var query = mysql.format(sql, data);
        //console.log(query);


        db.query(query, (error, results, fields) => {
            if(error){
                res.json({message: 'An error occured'}).status(400);
            }
            else{
                if(results.length == 0){
                    res.json({message: "You didn't added any question"}).status(400);
                }else{

                    res.json({
                        message:'success',
                        result : results
                    });

                }
            }
        });
    }else{
        res.json({message: 'id not found'}).status(400);
    }
}

const initVisitAccountApp = (app) => {
    app.post('/visit_account', loadVisitAccountFunc);
};

module.exports = initVisitAccountApp;
