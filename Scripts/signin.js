
document.getElementById("sign-in-button").addEventListener("click",login);

var regdusers=JSON.parse(localStorage.getItem("usercreds"))||[];
function login(){
    // event.preventDefault();

<<<<<<< HEAD
    var enteredemail=document.getElementById("name-input").value;
=======


    let enteredemail=document.getElementById("name-input").value;
>>>>>>> c5ddb65d9d3e484c7df5cdc3dbefcb635de15fda

    var enteredpassword=document.getElementById("password-input").value;

    if(enteredpassword=="") alert("Wrong credentials")
    else if(enteredemail==""){
        alert("User doesn't exist, Sign Up")
    }else{
           if(checkmail(enteredemail,enteredpassword)==true){
           alert("Login successful!");
           window.location.href="index.html";
        }else{
            alert("Alredy Have an Account")
        }
       
    }
    }
    let checkmail=(mail,pass)=>{
        let f=regdusers.filter((elem)=>{
            return mail===elem.email && pass==elem.password;
        });
        if(f.length>0) return true;
        else return false;
    }


