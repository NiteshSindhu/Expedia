

document.getElementById("continue").addEventListener("click",register);


var userdata=JSON.parse(localStorage.getItem("usercreds"))||[];
 
 
 function register(){

   

    
       let name=document.getElementById("surname-input").value;
       let username=document.getElementById("firstname-input").value;
       let email=document.getElementById("email-input").value;
       let password=document.getElementById("password-input").value;
       let mobile=document.getElementById("mobile-input").value;
       let description=document.getElementById("desc-input").value;


  
    if(name==""||email==""||password=="" || username=="" ||mobile=="" ||description==""){
        alert("Fill all detail")
    }else{
        let data1=new Setdata(name,email,password,username,mobile,description);
    
        if(checkmail(email)==true){
            userdata.push(data1);
            alert("Signup Successful")
            // console.log(userdata);
            window.location.href="signin.html"
            localStorage.setItem("usercreds",JSON.stringify(userdata));
        }else{
            alert("Alredy Have an Account")
        }
       
    }
    
    }
    let checkmail=(mail)=>{
        let f=userdata.filter((elem)=>{
            return mail===elem.email;
        });
        if(f.length>0) return false;
        else return true;
    }
    
    class Setdata{
        constructor(n,e,p,un,m,d){
            this.name=n;
            this.email=e;
            this.password=p;
            this.mobile=m;
            this.description=d;
            this.username=un;
        }
    }





