let carsdata=()=>{
let xy=document.getElementById("card");
xy.innnerHtml=null;

    let div1=document.createElement("div");
    div1.classList.add("div1");
    let div2=document.createElement("div");
    div2.classList.add("div2");

    let input1=document.createElement("input");
    input1.type="text";
    input1.placeholder="Pick-up";
    input1.classList.add("form-control");
    let input2=document.createElement("input");
    input2.type="text";
    input2.placeholder="Same Pick-up";
    input2.classList.add("form-control");
    div1.append(input1,input2);

    let input5=document.createElement("input");
    input5.placeholder="Pick-up date";
    input5.classList.add("form-control");
    input5.classList.add("select-date");
    input5.setAttribute("onfocus","(this.type='date')");
    let input6=document.createElement("input");
    input6.setAttribute("onfocus","(this.type='date')");
    input6.placeholder="Drop-off date";
    input6.classList.add("select-date");

    input6.classList.add("form-control");
    let input3=document.createElement("input");
    input3.setAttribute("onfocus","(this.type='time')");
    input3.placeholder="Pickup time";
    input3.classList.add("form-control");
    input3.classList.add("select-date");
    input3.classList.add("select-time");
    let input4=document.createElement("input");
    input4.setAttribute("onfocus","(this.type='time')");
    input4.placeholder="Dropoff Time";
    input4.classList.add("form-control");
    input4.classList.add("select-time");
    input4.classList.add("select-date");


    div2.append(input5,input6,input3,input4);




    xy.append(div1,div2);

    

};
