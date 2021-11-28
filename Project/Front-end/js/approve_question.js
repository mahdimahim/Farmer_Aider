
function tryApproveQuestion(status){
    var url = 'http://localhost:3000/approve_question';

    let statusObj = {'status':status};


    var config = {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(statusObj)

    }
    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
        //alert(data.message);

        if(data.message=='Now approve questions'){
            window.location.replace('./approve_question.html');
        }
        else {
            alert(data.message);
        }


    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}



function onApproveQuestionButtonClick()
{
    let status = 'No';
    tryApproveQuestion(status)

}
