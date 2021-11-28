let express = require('express');

let middlewares = require('./Middleware/middleware-one');

let login = require('./Apps/login-back-end');
let register = require('./Apps/register-back-end');
let aider_auth = require('./jwt_auth/aider_auth');
let question_bank_auth = require('./jwt_auth/question_bank_auth');
let add_question = require('./Apps/add-question-back-end');
let approve_question = require('./Apps/approve-question-back-end');
let approve_unapproved_question = require('./Apps/approve-unapproved-question');
let load_approved_question = require('./Apps/load-approved-question-back-end');
let insert_answer = require('./Apps/insert-answer-back-end');
let my_questions = require('./Apps/my-questions-back-end');
let fix_plant_disease = require('./Apps/fix-plant-disease-back-end');
let visit_account = require('./Apps/account-back-end');
let loan_auth = require('./jwt_auth/loan_auth');
let loan_insert_data = require('./Apps/loan-insert-data-back-end');


let app = express();

//console.log(aider_auth.variable);

middlewares(app);
login(app);
register(app);
aider_auth(app);
question_bank_auth(app);
add_question(app);
approve_question(app);
approve_unapproved_question(app);
load_approved_question(app);
insert_answer(app);
my_questions(app);
fix_plant_disease(app);
visit_account(app);
loan_auth(app);
loan_insert_data(app);


app.listen(3000, () => {
  console.log('Server is running on port: 3000');
});
