let mysql = require('mysql');
let db = require('../Database/database');


let loadFixPlantDiseaseFunc = (req, res) => {
    let{problemId} = req.body;


    if(problemId){
        var sql = `SELECT * FROM tbl_plant_aider WHERE ??=?`

        var data = ['Problem_Id', problemId];

        var query = mysql.format(sql, data);
        //console.log(query);


        db.query(query, (error, results, fields) => {
            if(error){
                res.json({message: 'An error occured'}).status(400);

            }
            else{
                if(results.length == 0){
                    res.json({message: 'The data of this disease is not added to the database'}).status(400);
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

const initFixPlantDiseaseApp = (app) => {
    app.post('/fix_plant_disease', loadFixPlantDiseaseFunc);
};

module.exports = initFixPlantDiseaseApp;
