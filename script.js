const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit',e =>{

    e.pre
  });
form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
  });
  function checkInput(){
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
  

  if(usernamevalue === ''){
    seterror(username, 'username cannot be blank');
  }
  else{
    setsuccess(username);
  }
  if(emailvalue === ''){
     seterror(email, 'email cannot be blank');
    }
    else if(!isemail(emailvalue))
    {
    seterror(email,'not a valid email');
    }
    else{
    setsuccess(email);
    }
  

  if (passwordvalue === ''){
         seterror(password, 'password Cannot Be Blank');
  }
  else{
    setsuccess(password);
  }
  if
    (password2value === ''){
      seterror(password, 'password cannot be blank');
    }
  else if(passwordvalue !== password2value){
        seterror(password2,'password does not match');
  }  
  else{
    setsuccess(password2);
  }
}

function setError(input,message){
  const formcontrol = input.parentElement;
  const small = formcontrol.queryselector('small');
  formcontrol.clssname = 'form-control error';
  small.innertext = message;
 }

function setsuccess(input){
  const formcontrol = input.parentElement;
  formcontrol.classname = 'form-control success';
}
