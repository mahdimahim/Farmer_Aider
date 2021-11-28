function tryAddQuestion(payload) {
    //console.log(payload);
    var url = 'http://localhost:3000/add_question';

    var config = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };


    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
        //alert(data.tokenMessage);

        if(data.message=='Your question is waiting for approval'){
            alert(data.message);
            window.location.href = "./question_bank.html";

        }


        //console.log(data.message);
    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}

function onAddQuestionButtonClick(event)
{
    //event.preventDefault();

    var form = document.getElementById("add-question-form");
    var data = new FormData(form);

    var userId = sessionStorage.getItem('userId')
    var question = data.get('question');
    var topic = data.get('question_topic');

    var params = {
        userId: userId,
        question: question,
        question_topic: topic
    };
    console.log(params);

    if(question && topic) {
        tryAddQuestion(params);
    }else{
        alert('Please fill in all the fields to continue');
    }

}
