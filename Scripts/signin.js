
document.getElementById("sign-in-button").addEventListener("click",login);

var regdusers=JSON.parse(localStorage.getItem("usercreds"))||[];
function login(){

    var enteredemail=document.getElementById("name-input").value;

    var enteredpassword=document.getElementById("password-input").value;

    if(enteredpassword=="") alert("Wrong credentials")
    else if(enteredemail==""){
        alert("User doesn't exist, Sign Up")
    }else{
           if(checkmail(enteredemail,enteredpassword)==true){
           alert("Login successful!");
           window.location.href="index.html";
        }else{
            alert("No account found! Create an account first")
        }
       
    }
    }
    let userlogin=[];
    let checkmail=(mail,pass)=>{
        let f=regdusers.filter((elem)=>{
            return mail===elem.email && pass==elem.password;
        });
        if(f.length>0) {
            userlogin.push(mail);
            let login=regdusers.status;
            login=true;
            userlogin.push(login);
            localStorage.setItem('loginUser',JSON.stringify(userlogin));           
            return true;
        }
        else return false;
    }


