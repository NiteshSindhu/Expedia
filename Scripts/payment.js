let couponCode = {
        Flat60: 0.6,
        Flat50: 0.5,
        Flat40: 0.4,
        Flat30: 0.3,
        Flat20: 0.2,
        Flat10: 0.1
    }

let cardDetails = {
        cardHolder: "Vaibhav Bedarkar",
        cardNum: 123456789876,
        exp: 1223,
        cvv: 123
    }

let travName = document.getElementById("traveller_name").value;
let travMob = document.getElementById("traveller_mobile").value;


let Paybtn = document.getElementById("make_payment");
let promoBtn =  document.getElementById("applyCode");

let travelData = JSON.parse(localStorage.getItem('bookingDetails'));
let price = Number(travelData[0].price);

document.getElementById("initial_price").innerText="Room (1 room x 1 night): ₹"+ travelData[0].price;

let tax = Number(travelData[0].price)*18/100;
document.getElementById("hotelName").innerText= travelData[0].name;

document.getElementById("tax").innerText= "Taxes and service fees: ₹" +tax;
let final = price+tax
document.getElementById("final_price").innerText="Total: ₹"+final;





promoBtn.addEventListener("click",()=>{
    let promoCode = document.getElementById("promoCode").value;

    let disc= couponCode[promoCode];
     final = (final-(final*disc)).toFixed(2);
     document.getElementById("final_price").innerText="Total: ₹"+final;
     alert(`${promoCode} coupon Applied Successfully!`)

})

Paybtn.addEventListener("click", ()=>{

let cardName = document.getElementById("traveller_cardHolder").value;
let cardNo = document.getElementById("traveller_cardNumber").value;
let cardExp = document.getElementById("traveller_cardExpiry").value;
let cardCvv = document.getElementById("traveller_cvv").value;
let travName = document.getElementById("traveller_name").value;

    if (cardNo == cardDetails["cardNum"] && cardExp == cardDetails["exp"] && cardCvv == cardDetails["cvv"]) {
       
        alert(`Dear ${travName},\n Booking at Hotel ${travelData[0].name} placed Successfully!`);
    } else {
        alert("Payment Failed! Invalid Card Details");
    }

})