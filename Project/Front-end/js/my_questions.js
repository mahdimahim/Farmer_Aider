let render = (data, answerData) => {

    let div = document.getElementById('lower-navbar-content-d1');

    data.forEach((item) => {


        let iDiv = document.createElement('div');
        //iDiv.id = "innerD";
        iDiv.style.cssText = 'position:relative;width:90%;height:100%;overflow: auto;border:0px solid black;margin-top:5px;';
        iDiv.setAttribute("class", "shadow-lg p-3 mb-5 bg-white rounded");
        iDiv.setAttribute("align", "left");



        let b = document.createElement('b');
        b.innerText = sessionStorage.getItem('username');
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




        iDiv.append(b);
        iDiv.append(p);
        iDiv.append(h3);


        // Adding Answer
        let count = 0;
        answerData.forEach((item2) => {

            if(item.Question_Id==item2.Question_Id){
                count += 1;

                let p_ansCount = document.createElement('p');
                p_ansCount.innerText = 'Answer '+count;
                p_ansCount.style.cssText = 'color:#8a8888;';

                let b_answer = document.createElement('p');
                b_answer.innerText = item2.Answer;

                let b_specialist = document.createElement('b');
                b_specialist.innerText = 'Answered by '+item2.Specialist_Name;
                b_specialist.style.cssText = 'color:#4a6f8f;';

                iDiv.append(p_ansCount);
                iDiv.append(b_specialist);
                iDiv.append(b_answer);


            }
        })
        if(count==0){
            let p_ansCount1 = document.createElement('p');
            p_ansCount1.innerText = 'Not answered yet';
            p_ansCount1.style.cssText = 'color:#8a8888;';
            iDiv.append(p_ansCount1);
        }



        div.append(iDiv);

    });


};


function tryLoadMyQuestions(status, userName){
    var url = 'http://localhost:3000/load_my_question';

    let statusObj = {
        'status':status,
        'username':userName
      };


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
        if(data.message == "All are approved questions here"){
            render(data.result, data.result2);
        }else {
            alert(data.message);
        }


    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}
let userName = sessionStorage.getItem('username');
tryLoadMyQuestions('Yes',userName);
