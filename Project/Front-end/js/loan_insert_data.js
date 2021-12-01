function insertLoanData(data){
  var url = 'http://localhost:3000/loan_insert_data';
  
  //alert(data);
  var config = {
    method: 'post',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  var takeResponse = function(response){
    return response.json();
  };

  var finalResponse = function(data){


    if(data.message == 'Successful'){
      alert('Data inserted successfully. We will connect with you as first as possible');
      //window.location.href = "./index.html";
    }
    //else {

    //}
    //console.log(data);
  };

  fetch(url, config).then(takeResponse).then(finalResponse);


}

function onLoanInsertDataButtonClick(){
    //event.preventDefault();

    var form = document.getElementById("loan-insert-data");
    var data = new FormData(form);

    var postalCode = data.get('postal_code');
    var loanAmount = data.get('loan_amount');


    var params = {
        userId:sessionStorage.getItem('userId'),
        userName:sessionStorage.getItem('username'),
        postalCode:postalCode,
        loanAmount:loanAmount
    };

    //console.log(params);

    if(postalCode && loanAmount){
      insertLoanData(params);
    }else {
      alert('Please fill in all fields');
    }

}
