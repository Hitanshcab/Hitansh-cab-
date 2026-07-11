// ==========================
// HITANSH CAB SERVICE
// SCRIPT.JS V4.0
// ==========================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Show Return Date

const tripType = document.querySelectorAll("input[name='tripType']");
const returnDateBox = document.getElementById("returnDateBox");

tripType.forEach(item => {
    item.addEventListener("change", () => {
        if (item.value === "Round Trip" && item.checked) {
            returnDateBox.style.display = "block";
        } else if (item.value === "One Way" && item.checked) {
            returnDateBox.style.display = "none";
        }
    });
});

// WhatsApp Booking

document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let trip = document.querySelector("input[name='tripType']:checked").value;

let message =
`🚖 *New Cab Booking*

👤 Name : ${document.getElementById("name").value}
📞 Mobile : ${document.getElementById("phone").value}

📍 Pickup : ${document.getElementById("pickup").value}
📍 Drop : ${document.getElementById("drop").value}

🚘 Car : ${document.getElementById("carType").value}
👥 Passengers : ${document.getElementById("passengers").value}

🛣 Trip : ${trip}

📅 Pickup Date : ${document.getElementById("pickupDate").value}
⏰ Pickup Time : ${document.getElementById("pickupTime").value}`;

if(trip==="Round Trip"){
message += `

🔄 Return Date : ${document.getElementById("returnDate").value}`;
}

window.open(
"https://wa.me/916353886346?text="+encodeURIComponent(message),
"_blank"
);

});

// Fare Calculator

document.getElementById("calculateFare").addEventListener("click",function(){

let fare = Number(document.getElementById("route").value);

if(fare===0){
alert("Please Select Route");
return;
}

let trip = document.getElementById("tripMode").value;
let car = document.getElementById("fareCarType").value;

if(car==="SUV"){
fare += 700;
}

if(trip==="round"){
fare = fare * 2;
}

document.getElementById("fareResult").innerHTML =
"Estimated Fare : ₹"+fare;

});

// Scroll Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Smooth Menu Scroll

document.querySelectorAll(".navbar a").forEach(link=>{

link.addEventListener("click",function(){

navbar.classList.remove("active");

});

});

console.log("Hitansh Cab Service V4.0 Loaded Successfully");
