function tryInsertAnswer(submitBtnId, answer){
    var url = 'http://localhost:3000/insert_answer';



    questionId = submitBtnId.split(' ')[0];
    specialistName = submitBtnId.slice(questionId.length+1);
    let specialistInfo = {
        'questionId':questionId,
        'specialistName':specialistName,
        'answer':answer
    };


    var config = {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(specialistInfo)

    }
    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {

        alert(data.message);
        window.location.replace('./question_bank.html');

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}


let render = (data, answerData) => {

    let div = document.getElementById('lower-navbar-content-d1');

    data.forEach((item) => {


        let iDiv = document.createElement('div');
        //iDiv.id = "innerD";
        iDiv.style.cssText = 'position:relative;width:90%;height:100%;overflow: auto;border:0px solid black;margin-top:5px;';
        iDiv.setAttribute("class", "shadow-lg p-3 mb-5 bg-white rounded");
        iDiv.setAttribute("align", "left");



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


        if(sessionStorage.getItem('typeOfAccount')=='Specialist'){

            var form = document.createElement("form");
            form.setAttribute('method',"post");
            form.id = "answer-form"+item.Question_Id;
            //form.setAttribute('action',"question_bank.html");

            var input = document.createElement("input"); //input element, text
            input.setAttribute('type',"text");
            input.setAttribute('name',"answer");
            input.setAttribute('class',"form-control");
            input.setAttribute('placeholder',"Add Your Answer");

            var submit = document.createElement("button"); //input element, Submit button
            submit.setAttribute('type',"button");
            submit.setAttribute('class',"btn btn-success");
            submit.innerText = "Add Answer";
            submit.style.cssText = 'margin-top:3px;';



            //alert(answer);
            submit.id = item.Question_Id+' '+sessionStorage.getItem('username');

            form.appendChild(input);
            form.appendChild(submit);
            iDiv.append(form);


        }



        div.append(iDiv);

    });


    var submitButtons = document.getElementsByTagName("button");
    var buttonsCount = submitButtons.length;
    for (var i = 0; i <= buttonsCount; i += 1) {
        submitButtons[i].onclick = function() {
            //sessionStorage.setItem('submitBtnId',this.id);

            let answerArray = this.id.split(' ');
            let formId = 'answer-form'+answerArray[0];
            answer = document.getElementById(formId).elements.namedItem("answer").value;
            if(answer){
                tryInsertAnswer(this.id,answer);
            }else {
                alert("Please fill in the answer field");
            }
            //alert(this.id+' '+answer);
        };
    }


};




function tryLoadApprovedQuestion(status){
    var url = 'http://localhost:3000/load_approved_question';

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

        render(data.result, data.result2);

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}
tryLoadApprovedQuestion('Yes');
