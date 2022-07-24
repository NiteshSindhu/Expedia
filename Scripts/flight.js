// export {navbar,compfirst,complast,footer,footerlast};

// import {navbar,compfirst,complast,footer,footerlast} from "../Components/navbar.js";
// document.getElementById("navbar").innerHTML=navbar();
// document.getElementById("compfirst").innerHTML=compfirst();
// document.getElementById("complast").innerHTML=complast();
// document.getElementById("footer").innerHTML=footer();
// document.getElementById("footer-last").innerHTML=footerlast();

let arr=[];
let flightdat=()=>{
    let a=document.getElementById("leave").value;
    let b=document.getElementById("goin").value;
    let c=document.getElementById("depart").value;
    let d=document.getElementById("return").value;
    let obj=new Data(a,b,c,d);
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("bookdata",JSON.stringify(arr));
    // window.location.href="flights.html";
};
class Data{
    constructor(a,b,c,d){
        this.leave=a;
        this.going=b;
        this.depart=c;
        this.Return=d;
    }
}
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

    div2.append(input1,input2,input3,input4);
    x.append(div2);
};
let Oneway=()=>{
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
    
    input1.setAttribute("id","leave");
    input2.setAttribute("id","goin");
    input3.setAttribute("id","depart");

    div2.append(input1,input2,input3);
    x.append(div2);
};
let multicity=()=>{
   x.innerHTML=null;
    
    let div2=document.createElement("div");
    div2.style.marginBottom="30px";
    div2.setAttribute("id","form");

    let label1=document.createElement("label");
    label1.innerText="Flight1";
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
    
    input1.setAttribute("id","leave");
    input2.setAttribute("id","goin");
    input3.setAttribute("id","depart");
    let label2=document.createElement("label");

    let div3=document.createElement("div");
    div3.style.marginBottom="30px";
    div3.setAttribute("id","form2");
    label2.innerText="Flight2";
    let input4=document.createElement("input");
    input4.type="text";
    input4.placeholder="Leaving From";
    input4.classList.add("form-control");
    let input5=document.createElement("input");
    input5.type="text";
    input5.placeholder="Going to";
    input5.classList.add("form-control");
    let input6=document.createElement("input");
    input6.setAttribute("onfocus","(this.type='date')");
    input6.placeholder="Departing";
    input6.classList.add("form-control");
    input6.classList.add("select-date");

    input4.setAttribute("id","leave");
    input5.setAttribute("id","goin");
    input6.setAttribute("id","depart");
    // input4.setAttribute("id","return");
    let button=document.createElement("button");
    button.innerText="Search";
    button.setAttribute("id","search");

    div2.append(input1,input2,input3);
    div3.append(input4,input5,input6);
    x.append(label1,div2,label2,div3);
    
};












document.getElementById("search").addEventListener("click",flightdat);

document.getElementById("btn1").addEventListener("click",ReturnFlight);
document.getElementById("btn2").addEventListener("click",Oneway);
document.getElementById("btn3").addEventListener("click",multicity);