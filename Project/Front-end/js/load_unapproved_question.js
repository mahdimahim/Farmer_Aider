
function tryApproveUnapprovedQuestion(btnId){
    var url = 'http://localhost:3000/approve_unapproved_question';
	

    btnId = btnId.replace("btn",'');

    let btnIdObj = {'btnId':btnId};


    var config = {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(btnIdObj)

    }
    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {

        alert(data.message);
        window.location.replace('./approve_question.html');

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}


let render = (data) => {

    let div = document.getElementById('app-lower-navbar-content');

    data.forEach((item) => {


        let iDiv = document.createElement('div');
        //iDiv.id = "innerD";
        iDiv.style.cssText = 'position:relative;width:100%;height:180px;overflow: auto;border:0px solid black;';
        iDiv.setAttribute("class", "shadow-lg p-3 mb-5 bg-white rounded");

        let iDiv1 = document.createElement('div');
        iDiv1.style.cssText = 'position:relative;width:70%;height:100%;border:0px solid black;float:left;';


        let iDiv2 = document.createElement('div');
        iDiv2.style.cssText = 'position:relative;width:20%;height:100%;border:0px solid black;float:left;';
        iDiv2.setAttribute("align", "center");
        iDiv2.setAttribute("class", "btn btn-outline-success");
        iDiv2.id = "iDiv2";

        let button = document.createElement('button');
        button.innerText = "Approve";
        button.setAttribute("class","btn btn-secondary")
        button.id = 'btn'+item.Question_Id;



        let b = document.createElement('b');
        b.innerText = item.User_Name;
        b.style.cssText = 'color:green;';

        let p = document.createElement('p');
        var d = new Date(item.Question_Date);
        let year = d.getUTCFullYear(); // Hours
        let month = d.getUTCMonth()+1;
        let date = d.getUTCDate()+1;
        p.innerText = 'posted in '+year+"-"+month+"-"+date;
        p.style.cssText = 'color:#8a8888;'


        let h3 = document.createElement('h3');
        h3.innerText = item.Question;



        iDiv1.append(b);
        iDiv1.append(p);
        iDiv1.append(h3);

        iDiv2.append(button);

        iDiv.append(iDiv1);
        iDiv.append(iDiv2);

        div.append(iDiv);

    });

    var buttons = document.getElementsByTagName("button");
    var buttonsCount = buttons.length;
    for (var i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function() {
            sessionStorage.setItem('btnId',this.id);
            tryApproveUnapprovedQuestion(this.id);
            //alert(this.id);
        };
    }

};




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

        render(data.result);

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}
tryApproveQuestion('No');
