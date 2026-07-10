// ==========================================
// Hitansh Cab Service V2.0
// script.js
// ==========================================

// ===== Mobile Menu =====

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

        navbar.classList.remove("active");

    });
});

// ===== Fare Calculator =====

const route = document.getElementById("route");
const carType = document.getElementById("carType");
const fareResult = document.getElementById("fareResult");
const calculateFare = document.getElementById("calculateFare");

if(calculateFare){

calculateFare.addEventListener("click",()=>{

let fare = Number(route.value);

if(!fare){

fareResult.innerHTML="Please Select Route";

return;

}

if(carType.value==="SUV"){

fare +=700;

}

fareResult.innerHTML="Estimated Fare : ₹"+fare;

});

}

// Trip Type

const tripType = document.querySelectorAll("input[name='tripType']");
const returnDateBox = document.getElementById("returnDateBox");

tripType.forEach(radio=>{
radio.addEventListener("change",()=>{

if(radio.value==="Round Trip" && radio.checked){
returnDateBox.style.display="block";
}else{
returnDateBox.style.display="none";
}

});
});

// WhatsApp Booking

const bookingForm=document.getElementById("bookingForm");

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const pickup=document.getElementById("pickup").value;
const drop=document.getElementById("drop").value;

const trip=document.querySelector("input[name='tripType']:checked").value;

const pickupDate=document.getElementById("pickupDate").value;
const returnDate=document.getElementById("returnDate").value;
const time=document.getElementById("pickupTime").value;
const car=document.getElementById("carType").value;
const passengers=document.getElementById("passengers").value;

let message=`🚖 *New Cab Booking*

👤 Name : ${name}
📱 Phone : ${phone}

🚕 Trip : ${trip}

📍 Pickup : ${pickup}

🏁 Drop : ${drop}

📅 Pickup Date : ${pickupDate}`;

if(trip==="Round Trip"){
message+=`\n🔁 Return Date : ${returnDate}`;
}

message+=`

🕒 Time : ${time}

🚘 Car : ${car}

👥 Passengers : ${passengers}`;

window.open(
"https://wa.me/916353886346?text="+encodeURIComponent(message),
"_blank"
);

});

// ===== Scroll Animation =====

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-350;

if(top>offset){

sec.classList.add("fade-up");

}

});

});
