const jwt = require('jsonwebtoken');




let loginFunc = (req, res) =>{

  jwt.verify(req.token, 'secretkey',(err, authData)=>{
    if(err){
      res.send({message:'Token is not valid'}).status(200);
    }else {
      res.status(200).send({
        message:'User logged in',
        authData
      });
      //console.log(authData.user);
    }
  });
}



// verify token
let verifyToken = (req, res, next) =>{ // middleware function
  // get auth header value
  const bearerHeader = req.headers['authorization'];
  //console.log(bearerHeader);
  // check if bearer is undefined
  if(typeof bearerHeader !== 'undefined'){
    // Split at the space and return an array
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    // set token
    req.token = bearerToken;
    next();
  }else {
    // forbidden
    res.send({message:'Please Log in first'}).status(200);
  }
}




const initLoginApp = (app) => {
    app.post('/loan_auth', verifyToken, loginFunc);
};

module.exports = initLoginApp;
