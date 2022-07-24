
document.getElementById("sign-in-button").addEventListener("click",login);

var regdusers=JSON.parse(localStorage.getItem("usercreds"))||[];
function login(){
    // event.preventDefault();



    let enteredemail=document.getElementById("name-input").value;

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


