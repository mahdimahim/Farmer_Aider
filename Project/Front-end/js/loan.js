function tryLoan(token){
    var url = 'http://localhost:3000/loan_auth';

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
            if(data.authData.user.Type_Of_Account=='User'){
                window.location.replace("./loan.html");
            }
            else {
                alert('You are not allowed to access this page');
            }

        }else {
          alert('Please Login First');
        }


        //console.log(data.tokenMessage);
    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}



function onLoanButtonClick()
{
    var token = sessionStorage.getItem('token');
    if(token==null){
      alert('Please Login First');
    }
    else {
        tryLoan(token);
    }

}
