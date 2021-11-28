function tryLogin(payload) {
    //console.log(payload);
    var url = 'http://localhost:3000/login';

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

        if(data.message=='Login Successful'){
            sessionStorage.setItem('token', data.tokenMessage);
            sessionStorage.setItem('userId', data.userId);
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('emailAddress', data.emailAddress);
            sessionStorage.setItem('typeOfAccount', data.typeOfAccount);
            sessionStorage.setItem('currentAddress', data.currentAddress);
            alert("Welcome "+data.username)
            window.location.href = "./index.html";
        }
        else {
            alert(data.message)
        }


        //console.log(data.message);
    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}

function onLoginButtonClick(event)
{
    //event.preventDefault();

    var form = document.getElementById("sign-in-form");
    var data = new FormData(form);

    var email = data.get('email_address');
    var pass = data.get('password');

    var params = {
        email: email,
        password: pass
    };
    //alert(typeof(JSON.stringify(params)));

    if(email && pass) {
        tryLogin(params);
    }else{
        alert('Please fill in all the fields to continue');
    }

}
