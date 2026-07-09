/* ===========================
   HITANSH CAB SERVICE
   script.js
=========================== */

// WhatsApp Booking

function sendWhatsApp() {

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let pickup = document.getElementById("pickup").value;
let drop = document.getElementById("drop").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let trip = document.getElementById("tripType").value;
let car = document.getElementById("carType").value;

if(name=="" || mobile=="" || pickup=="" || drop==""){

alert("Please fill all details");

return;

}

let message =
`🚖 *New Cab Booking*

👤 Name : ${name}

📞 Mobile : ${mobile}

📍 Pickup : ${pickup}

📍 Drop : ${drop}

📅 Date : ${date}

⏰ Time : ${time}

🚗 Car : ${car}

🛣 Trip : ${trip}`;

let url =
"https://wa.me/916353886346?text=" +
encodeURIComponent(message);

window.open(url,"_blank");

}

/* ===========================
   Fare Calculator
=========================== */

function calculateFare(){

let route =
document.getElementById("route").value;

let cab =
document.getElementById("cab").value;

let fare = "";

const rates = {

Ahmedabad:{
Sedan:1799,
SUV:2399
},

Surat:{
Sedan:2499,
SUV:2699
},

Gandhinagar:{
Sedan:1999,
SUV:2699
},

Rajkot:{
Sedan:4399,
SUV:4399
},

Jamnagar:{
Sedan:7000,
SUV:7000
},

Dwarka:{
Sedan:8000,
SUV:8000
},

Somnath:{
Sedan:8000,
SUV:8000
}

};

if(route==""){

fare = "Please Select Route";

}

else{

fare = "₹ " + rates[route][cab];

}

document.getElementById("fareResult").innerHTML = fare;

}

/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ===========================
   Welcome Message
=========================== */

window.onload=function(){

console.log("Hitansh Cab Service Website Loaded");

};
