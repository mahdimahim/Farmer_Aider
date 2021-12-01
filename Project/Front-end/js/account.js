function tryVisitAccount(id){
    var url = 'http://localhost:3000/visit_account';

    let idObj = {'userId':id};



    var config = {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(idObj)

    }
    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
        if(data.message=='success'){
            //render(data.result);
            //alert(data.result[0].User_Id);

            let div = document.getElementById('view-account-container');

            let h2 = document.createElement('h2');
            h2.innerText = 'User Account';
            h2.style.cssText = 'text-align:center;color:green;';

            let br1 = document.createElement('br');

            let h4_UserName = document.createElement('h4');
            h4_UserName.innerText = 'User Name: '+sessionStorage.getItem('username');
            //b_problem.style.cssText = 'color:green;';

            let br2 = document.createElement('br');

            let h4_Email = document.createElement('h4');
            h4_Email.innerText = 'Email Address: '+sessionStorage.getItem('emailAddress');

            let br3 = document.createElement('br');

            let h4_TypeOfAcc = document.createElement('h4');
            h4_TypeOfAcc.innerText = 'Type Of Account: '+sessionStorage.getItem('typeOfAccount');

            let br4 = document.createElement('br');

            let h4_CurrentAddr = document.createElement('h4');
            h4_CurrentAddr.innerText = 'Current Address: '+sessionStorage.getItem('currentAddress');

            let br5 = document.createElement('br');

            let h4_NoOfQuestions = document.createElement('h4');
            h4_NoOfQuestions.innerText = 'Number of Questions Added: '+data.result[0].User_Id;
            //alert(sessionStorage.getItem('userId'));

            div.append(h2);
            div.append(br1);

            div.append(h4_UserName);
            div.append(br2);

            div.append(h4_Email);
            div.append(br3);

            div.append(h4_TypeOfAcc);
            div.append(br4);

            div.append(h4_CurrentAddr);
            div.append(br5);

            div.append(h4_NoOfQuestions);
        }
        else {
            alert(data.message);
        }

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}

let userId = sessionStorage.getItem('userId');
tryVisitAccount(userId);
