
async function login(){

let login_data={

    username:document.getElementById("name-input").value,

    password:document.getElementById("password-input").value,
}

login_data=JSON.stringify(login_data);

let login_api_link='https://masai-api-mocker.herokuapp.com/auth/login';

let response=await fetch(login_api_link,{

method:'POST',

body:login_data,
headers:{
    'Content-Type':'application/json',
}

})
let data=await response.json();
console.log(data);

}