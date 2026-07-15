/*==========================================
 HITANSH CAB SERVICE V14
 PART 1
==========================================*/

// Route Fare Data

const fareData = {

"Vadodara-Ahmedabad": {
sedan:1700,
suv:2399,
distance:"110 KM",
time:"2 Hours"
},

"Vadodara-Surat": {
sedan:2200,
suv:2699,
distance:"155 KM",
time:"3 Hours"
},

"Vadodara-Rajkot": {
sedan:3700,
suv:4399,
distance:"300 KM",
time:"5 Hours"
},

"Vadodara-Jamnagar": {
sedan:6000,
suv:7000,
distance:"450 KM",
time:"8 Hours"
},

"Vadodara-Dwarka": {
sedan:7500,
suv:8000,
distance:"520 KM",
time:"9 Hours"
},

"Vadodara-Somnath": {
sedan:7500,
suv:8000,
distance:"510 KM",
time:"9 Hours"
}

};

// Search Fare

document.getElementById("searchFareBtn").addEventListener("click",function(){

const pickup=document.getElementById("pickup").value.trim();

const drop=document.getElementById("drop").value.trim();

 const key =
pickup.trim().toLowerCase() + "-" +
drop.trim().toLowerCase();

const fareData = {
"vadodara-ahmedabad":{
sedan:1700,
suv:2399,
distance:"110 KM",
time:"2 Hours"
},
"vadodara-surat":{
sedan:2200,
suv:2699,
distance:"155 KM",
time:"3 Hours"
},
"vadodara-rajkot":{
sedan:3700,
suv:4399,
distance:"300 KM",
time:"5 Hours"
},
"vadodara-jamnagar":{
sedan:6000,
suv:7000,
distance:"450 KM",
time:"8 Hours"
},
"vadodara-dwarka":{
sedan:7500,
suv:8000,
distance:"520 KM",
time:"9 Hours"
},
"vadodara-somnath":{
sedan:7500,
suv:8000,
distance:"510 KM",
time:"9 Hours"
}
};

const fare=fareData[key];

if(!fare){

alert("Sorry! Fare not available.");

return;

}

document.getElementById("fareResult").style.display="grid";

document.getElementById("sedanFare").innerText=fare.sedan;

document.getElementById("suvFare").innerText=fare.suv;

document.getElementById("routeDistance").innerText=fare.distance;

document.getElementById("routeTime").innerText=fare.time;

document.getElementById("routeName").innerText=pickup+" → "+drop;

});

// Popular Route Auto Fill

function fillRoute(pickup,drop){

document.getElementById("pickup").value=pickup;

document.getElementById("drop").value=drop;

document.getElementById("fare").scrollIntoView({

behavior:"smooth"

});

}
/*==========================================
 HITANSH CAB SERVICE V14
 PART 2
==========================================*/

// Selected Fare

let selectedFare = 0;

// WhatsApp Booking

function bookCab(vehicle){

const pickup=document.getElementById("pickup").value.trim();

const drop=document.getElementById("drop").value.trim();

const trip=document.getElementById("tripType").value;

const date=document.getElementById("journeyDate").value;

const time=document.getElementById("journeyTime").value;

if(pickup==="" || drop===""){

alert("Please enter Pickup and Drop location.");

return;

}

if(vehicle==="Sedan"){

selectedFare=document.getElementById("sedanFare").innerText;

}else{

selectedFare=document.getElementById("suvFare").innerText;

}

const message=

`🚖 *Hitansh Cab Service*

📍 Pickup : ${pickup}

📍 Drop : ${drop}

🚕 Trip : ${trip}

📅 Date : ${date}

⏰ Time : ${time}

🚗 Vehicle : ${vehicle}

💰 Fare : ₹${selectedFare}

Please confirm my booking.`;

window.open(

"https://wa.me/916353886346?text="+

encodeURIComponent(message),

"_blank"

);

}

// Quick Call

function callNow(){

window.location.href="tel:+916353886346";

}

// WhatsApp Button

function openWhatsApp(){

window.open(

"https://wa.me/916353886346",

"_blank"

);

}
/*==========================================
 HITANSH CAB SERVICE V14
 PART 3
==========================================*/

/*============================
 BACK TO TOP BUTTON
============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*============================
 COUNTER ANIMATION
============================*/

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let value = 0;

    const speed = Math.max(10, Math.floor(target / 100));

    const timer = setInterval(() => {

        value += speed;

        if (value >= target) {

            value = target;

            clearInterval(timer);

        }

        counter.textContent = value;

    }, 20);

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*============================
 FADE-UP ANIMATION
============================*/

const fadeItems = document.querySelectorAll(

".car-card,.review-card,.service-card,.why-card,.contact-card"

);

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

            fadeObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

fadeItems.forEach(item => {

    fadeObserver.observe(item);

});

/*============================
 PAGE LOADED
============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Hitansh Cab Service V14 Loaded Successfully");

});
/*==========================================
 HITANSH CAB SERVICE V14
 PART 4
==========================================*/

/*============================
 DARK MODE
============================*/

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const mode = document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

        localStorage.setItem("theme", mode);

    });

}

window.addEventListener("load", () => {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

    }

});

/*============================
 REVIEW AUTO SLIDER
============================*/

const reviews = document.querySelectorAll(".review-card");

let reviewIndex = 0;

if (reviews.length > 0) {

    reviews.forEach((card, index) => {

        if (index !== 0) {

            card.style.display = "none";

        }

    });

    setInterval(() => {

        reviews[reviewIndex].style.display = "none";

        reviewIndex++;

        if (reviewIndex >= reviews.length) {

            reviewIndex = 0;

        }

        reviews[reviewIndex].style.display = "block";

    }, 5000);

}

/*============================
 CURRENT LOCATION
============================*/

function getCurrentLocation() {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported.");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        function(position){

            alert(

                "Location Found\n\nLatitude : " +

                position.coords.latitude +

                "\nLongitude : " +

                position.coords.longitude

            );

        },

        function(){

            alert("Unable to fetch your location.");

        }

    );

}

/*============================
 AUTO SAVE FORM
============================*/

const bookingFields = [

"name",

"mobile",

"pickup",

"drop",

"journeyDate",

"journeyTime"

];

bookingFields.forEach(id => {

    const field = document.getElementById(id);

    if (!field) return;

    field.addEventListener("input", () => {

        localStorage.setItem(id, field.value);

    });

});

window.addEventListener("load", () => {

    bookingFields.forEach(id => {

        const field = document.getElementById(id);

        if (!field) return;

        const value = localStorage.getItem(id);

        if (value) {

            field.value = value;

        }

    });

});

/*============================
 MOBILE MENU
============================*/

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

/*============================
 BOOKING SUCCESS
============================*/

function bookingSuccess() {

    alert(

"✅ Thank you!\n\nYour booking request has been sent successfully.\n\nOur team will contact you shortly."

    );

}
/*==========================================
 HITANSH CAB SERVICE V14
 PART 5 (FINAL)
==========================================*/

/*============================
 DRIVER STATUS
============================*/

const driverMessages = [
"🚖 Driver Available (15 Minutes)",
"🚖 Driver Available (20 Minutes)",
"🚖 Driver Available (30 Minutes)",
"🚖 Cab Ready for Pickup",
"🚖 Fast Pickup Available"
];

function updateDriverStatus(){

const box=document.getElementById("driverStatus");

if(!box) return;

const random=
driverMessages[Math.floor(Math.random()*driverMessages.length)];

box.innerHTML=random;

}

setInterval(updateDriverStatus,7000);

/*============================
 COUPON CODE
============================*/

function applyCoupon(){

const code=document.getElementById("couponCode");

if(!code) return;

const coupon=code.value.trim().toUpperCase();

if(coupon==="HIT10"){

alert("🎉 Coupon Applied\n10% Discount");

}

else if(coupon==="FIRST100"){

alert("🎉 ₹100 Discount Applied");

}

else{

alert("❌ Invalid Coupon");

}

}

/*============================
 LIVE CLOCK
============================*/

function updateClock(){

const clock=document.getElementById("liveClock");

if(!clock) return;

const now=new Date();

clock.innerHTML=now.toLocaleTimeString("en-IN");

}

setInterval(updateClock,1000);

/*============================
 BOOKING POPUP
============================*/

function showOffer(){

const popup=document.getElementById("offerPopup");

if(!popup) return;

popup.style.display="block";

}

function closeOffer(){

const popup=document.getElementById("offerPopup");

if(!popup) return;

popup.style.display="none";

}

setTimeout(showOffer,5000);

/*============================
 LOADING
============================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

});

/*============================
 FINAL INIT
============================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("================================");

console.log(" HITANSH CAB SERVICE V14 ");

console.log(" Website Ready");

console.log("================================");

});
