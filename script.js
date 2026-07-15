/* ==========================================
   HITANSH CAB SERVICE V11.1
   SMART BOOKING ENGINE
========================================== */

// ================= SETTINGS =================

const WHATSAPP_NUMBER = "916353886346";

const BASE_FARE = {
    Sedan: 1700,
    SUV: 2399
};

// ================= POPULAR ROUTES =================

const ROUTES = {

"Vadodara-Ahmedabad": {
distance:111,
sedan:1700,
suv:2399,
time:"2 Hr"
},

"Ahmedabad-Vadodara": {
distance:111,
sedan:1700,
suv:2399,
time:"2 Hr"
},

"Vadodara-Surat": {
distance:150,
sedan:2200,
suv:2699,
time:"3 Hr"
},

"Surat-Vadodara": {
distance:150,
sedan:2200,
suv:2699,
time:"3 Hr"
},

"Vadodara-Rajkot": {
distance:300,
sedan:3700,
suv:4399,
time:"6 Hr"
},

"Rajkot-Vadodara": {
distance:300,
sedan:3700,
suv:4399,
time:"6 Hr"
},

"Vadodara-Dwarka": {
distance:470,
sedan:7500,
suv:8000,
time:"9 Hr"
},

"Dwarka-Vadodara": {
distance:470,
sedan:7500,
suv:8000,
time:"9 Hr"
},

"Vadodara-Somnath": {
distance:460,
sedan:7500,
suv:8000,
time:"9 Hr"
},

"Somnath-Vadodara": {
distance:460,
sedan:7500,
suv:8000,
time:"9 Hr"
}

};

// ================= DOM =================

const pickupInput =
document.getElementById("pickup");

const dropInput =
document.getElementById("drop");

const fareButton =
document.getElementById("checkFare");

const sedanFare =
document.getElementById("sedanFare");

const suvFare =
document.getElementById("suvFare");

const distanceBox =
document.getElementById("distance");

const travelTime =
document.getElementById("travelTime");

// ================= FORMAT =================

function money(price){

return "₹" + Number(price).toLocaleString("en-IN");

}
/* ==========================================
   SMART FARE CALCULATOR
========================================== */

fareButton.addEventListener("click", calculateFare);

function calculateFare() {

const pickup = pickupInput.value.trim();

const drop = dropInput.value.trim();

if (pickup === "" || drop === "") {

alert("Please select Pickup and Drop City.");

return;

}

if (pickup === drop) {

alert("Pickup and Drop City cannot be same.");

return;

}

const routeKey = pickup + "-" + drop;

if (ROUTES[routeKey]) {

const route = ROUTES[routeKey];

sedanFare.innerHTML = money(route.sedan);

suvFare.innerHTML = money(route.suv);

distanceBox.innerHTML = route.distance + " KM";

travelTime.innerHTML = route.time;

document.getElementById("fromCity").innerHTML = pickup;

document.getElementById("toCity").innerHTML = drop;

return;

}

// ================= ESTIMATED FARE =================

const estimatedDistance = 100;

const sedan = Math.round(estimatedDistance * 15);

const suv = Math.round(estimatedDistance * 21);

sedanFare.innerHTML = money(sedan);

suvFare.innerHTML = money(suv);

distanceBox.innerHTML =
estimatedDistance + " KM (Estimated)";

travelTime.innerHTML =
Math.round(estimatedDistance / 50) + " Hr";

document.getElementById("fromCity").innerHTML = pickup;

document.getElementById("toCity").innerHTML = drop;

}

/* ==========================================
   POPULAR ROUTE AUTO FILL
========================================== */

function selectRoute(from, to) {

pickupInput.value = from;

dropInput.value = to;

calculateFare();

window.scrollTo({

top: document.getElementById("booking").offsetTop - 80,

behavior: "smooth"

});

   }
/* ==========================================
   WHATSAPP BOOKING ENGINE
========================================== */

function bookCab(carType) {

const pickup = pickupInput.value.trim();
const drop = dropInput.value.trim();

if (pickup === "" || drop === "") {

alert("Please select Pickup and Drop City first.");

return;

}

const pickupDate =
document.getElementById("pickupDate").value;

const pickupTime =
document.getElementById("pickupTime").value;

const passengers =
document.getElementById("passenger").value;

const tripTypeButton =
document.querySelector(".trip-type button.active");

const tripType =
tripTypeButton ? tripTypeButton.innerText : "One Way";

const fare =
(carType === "SUV")
? suvFare.innerText
: sedanFare.innerText;

const message =
`🚖 *Hitansh Cab Service Booking*

🛣 Trip : ${tripType}

📍 Pickup : ${pickup}

📍 Drop : ${drop}

📅 Date : ${pickupDate}

🕒 Time : ${pickupTime}

🚗 Vehicle : ${carType}

👥 Passengers : ${passengers}

💰 Fare : ${fare}

Please confirm my booking.`;

window.open(

"https://wa.me/" +
WHATSAPP_NUMBER +
"?text=" +
encodeURIComponent(message),

"_blank"

);

}

/* ==========================================
   TRIP TYPE BUTTONS
========================================== */

const tripButtons =
document.querySelectorAll(".trip-type button");

tripButtons.forEach(button=>{

button.addEventListener("click",()=>{

tripButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

});

});

/* ==========================================
   AUTO SELECT DEFAULT
========================================== */

if(tripButtons.length){

tripButtons[0].classList.add("active");

   }
/* ==========================================
   CITY SEARCH & FORM UTILITIES
========================================== */

// Main Gujarat Cities
const CITY_DATABASE = [

"Ahmedabad",
"Vadodara",
"Surat",
"Rajkot",
"Jamnagar",
"Dwarka",
"Somnath",
"Junagadh",
"Bhavnagar",
"Amreli",
"Porbandar",
"Morbi",
"Bhuj",
"Gandhidham",
"Anjar",
"Mandvi",
"Anand",
"Nadiad",
"Bharuch",
"Ankleshwar",
"Rajpipla",
"Kevadiya",
"Godhra",
"Dahod",
"Palanpur",
"Mehsana",
"Patan",
"Himmatnagar",
"Modasa",
"Navsari",
"Valsad",
"Vapi",
"Saputara",
"Gandhinagar",
"Mumbai",
"Udaipur"

];

// Remove Duplicate Cities
const cities = [...new Set(CITY_DATABASE)].sort();

/* ==========================================
   CREATE DATALIST
========================================== */

const cityList = document.getElementById("cityList");

if(cityList){

cityList.innerHTML = "";

cities.forEach(city=>{

const option = document.createElement("option");

option.value = city;

cityList.appendChild(option);

});

}

/* ==========================================
   INPUT VALIDATION
========================================== */

[pickupInput, dropInput].forEach(input=>{

input.addEventListener("change",()=>{

input.value = input.value.trim();

});

});

/* ==========================================
   SWAP PICKUP & DROP
========================================== */

function swapCities(){

const temp = pickupInput.value;

pickupInput.value = dropInput.value;

dropInput.value = temp;

calculateFare();

}

/* ==========================================
   RESET FORM
========================================== */

function resetBookingForm(){

pickupInput.value = "";

dropInput.value = "";

document.getElementById("pickupDate").value = "";

document.getElementById("pickupTime").value = "";

document.getElementById("carType").selectedIndex = 0;

document.getElementById("passenger").selectedIndex = 0;

sedanFare.innerHTML = "₹1700";

suvFare.innerHTML = "₹2399";

distanceBox.innerHTML = "--";

travelTime.innerHTML = "--";

document.getElementById("fromCity").innerHTML = "Pickup City";

document.getElementById("toCity").innerHTML = "Drop City";

}

/* ==========================================
   ENTER KEY SUPPORT
========================================== */

[pickupInput, dropInput].forEach(input=>{

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

e.preventDefault();

calculateFare();

}

});

});
/* ==========================================
   SMART FARE ENGINE V11.1
========================================== */

// Per KM Rates
const RATE = {
    Sedan: 15,
    SUV: 21
};

// Round Trip Multiplier
const ROUND_TRIP = 2;

// Calculate Estimated Fare
function calculateEstimatedFare(distance, car, tripType) {

    let fare = distance * RATE[car];

    // Minimum Fare
    if (fare < BASE_FARE[car]) {
        fare = BASE_FARE[car];
    }

    // Round Trip
    if (tripType === "Round Trip") {
        fare = fare * ROUND_TRIP;
    }

    return Math.round(fare);
}

/* ==========================================
   LIVE CAR TYPE CHANGE
========================================== */

const carTypeSelect =
document.getElementById("carType");

if (carTypeSelect) {

carTypeSelect.addEventListener("change", () => {

calculateFare();

});

}

/* ==========================================
   LIVE TRIP TYPE CHANGE
========================================== */

tripButtons.forEach(btn => {

btn.addEventListener("click", () => {

setTimeout(() => {

if (
pickupInput.value !== "" &&
dropInput.value !== ""
) {

calculateFare();

}

},100);

});

});

/* ==========================================
   SHOW LOADING
========================================== */

function showLoading(){

fareButton.disabled = true;

fareButton.innerHTML =
'<i class="fa-solid fa-spinner fa-spin"></i> Calculating...';

}

function hideLoading(){

fareButton.disabled = false;

fareButton.innerHTML =
'<i class="fa-solid fa-magnifying-glass"></i> CHECK INSTANT FARE';

}

/* ==========================================
   UPDATE RESULT
========================================== */

function updateFareResult(route){

showLoading();

setTimeout(()=>{

sedanFare.innerHTML = money(route.sedan);

suvFare.innerHTML = money(route.suv);

distanceBox.innerHTML =
route.distance + " KM";

travelTime.innerHTML =
route.time;

hideLoading();

},500);

   }
/* ==========================================
   HITANSH CAB SERVICE V11.1 FINAL
========================================== */

/* ========== PAGE LOADED ========== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Hitansh Cab Service V11.1 Loaded");

    // Default Pickup Date = Today
    const pickupDate = document.getElementById("pickupDate");

    if (pickupDate) {
        const today = new Date().toISOString().split("T")[0];
        pickupDate.min = today;
        pickupDate.value = today;
    }

});

/* ========== SCROLL TO TOP ========== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 400) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ========== FADE ANIMATION ========== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-up").forEach(item => {

    observer.observe(item);

});

/* ========== AUTO HIGHLIGHT MENU ========== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ========== PERFORMANCE ========== */

window.addEventListener("load", () => {

    console.log("Website Ready");

});
