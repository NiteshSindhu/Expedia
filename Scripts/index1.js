// let userDataSignin = JSON.parse(localStorage.getItem('loginUser'));
// let dispEmail;

// if(userDataSignin[1]){
//     dispEmail = userDataSignin[0];
//     // document.getElementById("userNameStat").innerText = dispEmail;
// }else{
//     dispEmail = "Sign-in";
//     // document.getElementById("userNameStat").innerText = dispEmail;
// }

// let s= document.getElementById("userNameStat").innerText;
// console.log(s);

let y=document.getElementById("card");
let Stays=()=>{
    y.innerHTML=null;
    let div2=document.createElement("div");
    div2.style.marginBottom="30px";
    div2.setAttribute("id","form");
    let input1=document.createElement("input");
    input1.type="text";
    input1.placeholder="Leaving From";
    input1.classList.add("form-control");
    
    let input2=document.createElement("input");
    input2.type="number";
    input2.placeholder="Travellers";
    input2.classList.add("form-control");
    let input3=document.createElement("input");
    input3.placeholder="Departing";
    input3.setAttribute("onfocus","(this.type='date')");
    input3.classList.add("form-control");
    input3.classList.add("select-date");
    let input4=document.createElement("input");
    input4.setAttribute("onfocus","(this.type='date')");
    input4.placeholder="Returning";
    input4.classList.add("form-control");
    input4.classList.add("select-date");

    input1.setAttribute("id","leave");
    input2.setAttribute("id","goin");
    input3.setAttribute("id","depart");
    input4.setAttribute("id","return");

    let btn=document.createElement("button");
    btn.setAttribute("id","search");
    btn.innerText="Search";
    btn.addEventListener("click",function(){
        goingto();
    });
    div2.append(input1,input3,input4,input2);
    y.append(div2,btn);
};
let z=document.getElementById("booking-form");
let topdata=()=>{
    z.innerHTML=null;
    let div1=document.createElement("div");
    div1.setAttribute("id","top");
    let bt1=document.createElement("button");
    bt1.innerText="Return";
    bt1.setAttribute("id","btn1");
    bt1.classList.add("btn");
    let bt2=document.createElement("button");
    
    bt2.innerText="One-Way";
    bt2.setAttribute("id","btn2");
    bt2.classList.add("btn");
    let bt3=document.createElement("button");
    
    bt3.innerText="Multi-City";
    bt3.setAttribute("id","btn3");
    bt3.classList.add("btn");
    let br=document.createElement("br");
    let div2=document.createElement("div");
    div1.append(bt1,bt2,bt3);
    div2.setAttribute("id","card");

    z.append(div1,br,div2);
};
let goingto=()=>{
    window.location.href="hotels.html";
};
let flightdata=()=>{
    // y.innerHTML=null;
    ReturnFlight();
};

let carsd=()=>{
    y.innerHTML=null;
carsdata();
};
let x=document.getElementById("card");
let ReturnFlight=()=>{
    x.innerHTML=null;
    let div2=document.createElement("div");
    div2.style.marginBottom="30px";
    div2.setAttribute("id","form");
    let input1=document.createElement("input");
    input1.type="text";
    input1.placeholder="Leaving From";
    input1.classList.add("form-control");
    
    let input2=document.createElement("input");
    input2.type="text";
    input2.placeholder="Going to";
    input2.classList.add("form-control");
    let input3=document.createElement("input");
    input3.setAttribute("onfocus","(this.type='date')");
    input3.placeholder="Departing";
    input3.classList.add("form-control");
    input3.classList.add("select-date");
    let input4=document.createElement("input");
    input4.setAttribute("onfocus","(this.type='date')");
    input4.placeholder="Returning";
    input4.classList.add("form-control");
    input4.classList.add("select-date");

    input1.setAttribute("id","leave");
    input2.setAttribute("id","goin");
    input3.setAttribute("id","depart");
    input4.setAttribute("id","return");

    let bt=document.createElement("button");
    bt.innerText="Search";
    bt.setAttribute("id","search");
    bt.addEventListener("click",function(){
        gotopage();
    });

    div2.append(input1,input2,input3,input4,bt);
    x.append(div2);
};
function gotopage(){
    window.location.href="flights.html";
}
document.getElementById("button1").addEventListener("click",Stays);
document.getElementById("button3").addEventListener("click",carsd);
document.getElementById("button2").addEventListener("click",flightdata);