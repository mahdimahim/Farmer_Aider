function register(data){
  var url = 'http://localhost:3000/register';

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
    alert(data.message);

    if(data.message == 'Registration Successful'){
      sessionStorage.setItem('token', data.tokenMessage);
      sessionStorage.setItem('userId', data.userId);
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('emailAddress', data.emailAddress);
      sessionStorage.setItem('typeOfAccount', data.typeOfAccount);
      sessionStorage.setItem('currentAddress', data.currentAddress);

      window.location.href = "./index.html";
    }
    //console.log(data);
  };

  fetch(url, config).then(takeResponse).then(finalResponse);


}

function onRegistrationButtonClick(event){
  //event.preventDefault();

  var form = document.getElementById("sign-up-form");
  var data = new FormData(form);

  var user_name = data.get('user_name');
  var email_address = data.get('email_address');
  var password = data.get('password');
  var type_of_account = data.get('type_of_account');
  var current_address = data.get('current_address');

  var params = {
    user_name:user_name,
    email_address:email_address,
    password:password,
    type_of_account:type_of_account,
    current_address:current_address
  };

  console.log(params);

  if(user_name && email_address && password && type_of_account && current_address){
    register(params);
  }else {
    alert('Please fill in all fields')
  }

}
