function tryQuestionBank(token){
    var url = 'http://localhost:3000/question_bank_auth';
	

    //alert(token);
    let tokenObj = {'token':token};


    var config = {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': 'Bearer '+token
      },
      body:JSON.stringify(tokenObj)

    }
    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
        //alert(data.message);
        if(data.message=='User logged in'){
            window.location.replace("./question_bank.html");
        }else {
            alert('Please Login First');
        }


        //console.log(data.tokenMessage);
    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}



function onQuestionBankButtonClick(event)
{
    var token = sessionStorage.getItem('token');
    if(token==null){
      alert('Please Login First');
    }
    else {
        tryQuestionBank(token);
    }

}
