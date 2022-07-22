
async function register(){

    let signupdata={
        name:document.getElementById("surname-input").value,
        username:document.getElementById("firstname-input").value,
        email:document.getElementById("email-input").value,
        password:document.getElementById("password-input").value,
        mobile:document.getElementById("mobile-input").value,
        description:document.getElementById("desc-input").value,


    }

    signupdata=JSON.stringify(signupdata);

let signup_api_link='https://masai-api-mocker.herokuapp.com/auth/register';

let response=await fetch(signup_api_link,{
    method:'POST',
    body:signupdata,
    headers:{
        'Content-Type':'application/json'
    }
})

let data=await response.json();
console.log(data);
name:document.getElementById("surname-input").value=null;
username:document.getElementById("firstname-input").value=null;
email:document.getElementById("email-input").value=null;
password:document.getElementById("password-input").value=null;
mobile:document.getElementById("mobile-input").value=null;
description:document.getElementById("desc-input").value=null;
}




