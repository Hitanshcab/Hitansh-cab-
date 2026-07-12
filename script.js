/* ==========================================
   HITANSH CAB SERVICE
   SCRIPT.JS V8.0
   PART 1
========================================== */

// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

}

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// FADE ANIMATION
// ==========================

const fadeElements = document.querySelectorAll(
".feature-card,.route-card,.service-card,.fleet-card,.review-card,.contact-card,.why-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

// ==========================
// AUTO YEAR
// ==========================

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("Hitansh Cab Service V8.0 - Part 1 Loaded");
/* ==========================================
   SCRIPT.JS V8.0
   PART 2
   GUJARAT ROUTES DATABASE
========================================== */

const routes = {

"Vadodara - Ahmedabad": {
Sedan:1700,
SUV:2399
},

"Vadodara - Ahmedabad Airport": {
Sedan:1900,
SUV:2599
},

"Vadodara - Gandhinagar": {
Sedan:1900,
SUV:2699
},

"Vadodara - Anand": {
Sedan:700,
SUV:1000
},

"Vadodara - Nadiad": {
Sedan:900,
SUV:1200
},

"Vadodara - Bharuch": {
Sedan:1200,
SUV:1700
},

"Vadodara - Ankleshwar": {
Sedan:1400,
SUV:1900
},

"Vadodara - Surat": {
Sedan:2200,
SUV:2699
},

"Vadodara - Navsari": {
Sedan:2900,
SUV:3500
},

"Vadodara - Valsad": {
Sedan:3600,
SUV:4300
},

"Vadodara - Rajkot": {
Sedan:3700,
SUV:4399
},

"Vadodara - Jamnagar": {
Sedan:6000,
SUV:7000
},

"Vadodara - Dwarka": {
Sedan:7500,
SUV:8000
},

"Vadodara - Somnath": {
Sedan:7500,
SUV:8000
},

"Vadodara - Junagadh": {
Sedan:6500,
SUV:7600
},

"Vadodara - Bhavnagar": {
Sedan:3400,
SUV:4200
},

"Vadodara - Amreli": {
Sedan:4500,
SUV:5200
},

"Vadodara - Morbi": {
Sedan:4800,
SUV:5600
},

"Vadodara - Porbandar": {
Sedan:7000,
SUV:7900
},

"Vadodara - Bhuj": {
Sedan:9000,
SUV:10200
},

"Vadodara - Statue of Unity": {
Sedan:1800,
SUV:2400
},

"Vadodara - Kevadia": {
Sedan:1800,
SUV:2400
},

"Vadodara - Dahod": {
Sedan:2200,
SUV:2800
},

"Vadodara - Godhra": {
Sedan:1500,
SUV:1900
},

"Vadodara - Mumbai": {
Sedan:6999,
SUV:8999
},

"Vadodara - Pune": {
Sedan:9200,
SUV:10900
}

};

console.log("Routes Loaded :", Object.keys(routes).length);
/* ==========================================
   SCRIPT.JS V8.0
   PART 3
   SMART SEARCH V8
========================================== */

const routeSearch = document.getElementById("routeSearch");
const searchResults = document.getElementById("searchResults");
const selectedRoute = document.getElementById("selectedRoute");

let selectedRouteName = "";

// ==========================
// SMART SEARCH
// ==========================

if (routeSearch && searchResults) {

routeSearch.addEventListener("input", function () {

const keyword = this.value.trim().toLowerCase();

searchResults.innerHTML = "";

if (keyword.length === 0) {

searchResults.style.display = "none";

return;

}

const matchedRoutes = Object.keys(routes).filter(route =>

route.toLowerCase().includes(keyword)

);

if (matchedRoutes.length === 0) {

searchResults.innerHTML = `
<div class="search-item">
No Route Found
</div>
`;

searchResults.style.display = "block";

return;

}

matchedRoutes.forEach(route => {

const item = document.createElement("div");

item.className = "search-item";

item.innerHTML = `🚖 ${route}`;

item.onclick = () => {

routeSearch.value = route;

selectedRouteName = route;

selectedRoute.textContent = "Route : " + route;

searchResults.style.display = "none";

};

searchResults.appendChild(item);

});

searchResults.style.display = "block";

});

}

// ==========================
// HIDE SEARCH WHEN CLICK OUTSIDE
// ==========================

document.addEventListener("click", function (e) {

if (

routeSearch &&
searchResults &&
!routeSearch.contains(e.target) &&
!searchResults.contains(e.target)

) {

searchResults.style.display = "none";

}

});

// ==========================
// DEFAULT ROUTE
// ==========================

if (!selectedRouteName) {

selectedRouteName = "";

}

console.log("Smart Search V8 Loaded");
/* ==========================================
   SCRIPT.JS V8.0
   PART 4
   SMART FARE CALCULATOR
========================================== */

const fareButton = document.getElementById("calculateFare");
const fareResult = document.getElementById("fareResult");
const carType = document.getElementById("fareCarType");
const tripMode = document.getElementById("tripMode");

// ==========================
// CALCULATE FARE
// ==========================

if (fareButton) {

fareButton.addEventListener("click", function () {

if (selectedRouteName === "") {

alert("Please select a route first.");

return;

}

const vehicle = carType.value;
const trip = tripMode.value;

const routeData = routes[selectedRouteName];

if (!routeData) {

fareResult.innerHTML = "Route Not Found";
return;

}

let fare = routeData[vehicle];

if (trip === "round") {

fare = fare * 2;

}

fareResult.innerHTML =
"Estimated Fare : ₹" + fare.toLocaleString("en-IN");

});

}

// ==========================
// AUTO CALCULATE AFTER SEARCH
// ==========================

if (routeSearch) {

routeSearch.addEventListener("change", function () {

const value = this.value.trim();

if (routes[value]) {

selectedRouteName = value;

selectedRoute.innerHTML = "Route : " + value;

}

});

}

// ==========================
// CHANGE VEHICLE
// ==========================

if (carType) {

carType.addEventListener("change", () => {

if (selectedRouteName !== "") {

fareButton.click();

}

});

}

// ==========================
// CHANGE TRIP TYPE
// ==========================

if (tripMode) {

tripMode.addEventListener("change", () => {

if (selectedRouteName !== "") {

fareButton.click();

}

});

}

console.log("Smart Fare Calculator V8 Loaded");
/* ==========================================
   SCRIPT.JS V8.0
   PART 5
   WHATSAPP BOOKING
========================================== */

const bookingForm = document.getElementById("bookingForm");
const bookingTrip = document.getElementById("bookingTrip");
const returnDateBox = document.getElementById("returnDateBox");
const bookNowBtn = document.getElementById("bookNowBtn");

// ==========================
// SHOW / HIDE RETURN DATE
// ==========================

if (bookingTrip && returnDateBox) {

bookingTrip.addEventListener("change", function () {

if (this.value === "Round Trip") {

returnDateBox.style.display = "block";

} else {

returnDateBox.style.display = "none";

}

});

}

// ==========================
// WHATSAPP BOOKING
// ==========================

if (bookNowBtn) {

bookNowBtn.addEventListener("click", function () {

const name = document.getElementById("customerName").value.trim();
const phone = document.getElementById("customerPhone").value.trim();
const pickup = document.getElementById("pickupLocation").value.trim();
const drop = document.getElementById("dropLocation").value.trim();
const pickupDate = document.getElementById("pickupDate").value;
const pickupTime = document.getElementById("pickupTime").value;
const trip = bookingTrip.value;
const vehicle = document.getElementById("bookingVehicle").value;
const passengers = document.getElementById("passengers").value;
const returnDate = document.getElementById("returnDate").value;
const note = document.getElementById("specialNote").value.trim();

// Required Fields

if (
!name ||
!phone ||
!pickup ||
!drop ||
!pickupDate ||
!pickupTime
) {

alert("Please fill all required fields.");

return;

}

let message =
`🚖 *Hitansh Cab Service*

*New Booking Request*

👤 Name : ${name}

📱 Mobile : ${phone}

📍 Pickup : ${pickup}

📍 Drop : ${drop}

📅 Date : ${pickupDate}

🕒 Time : ${pickupTime}

🚘 Vehicle : ${vehicle}

👥 Passengers : ${passengers}

🔁 Trip : ${trip}`;

if (trip === "Round Trip") {

message += `

📅 Return Date : ${returnDate}`;

}

if (selectedRouteName !== "") {

message += `

💰 Estimated Fare : ₹${fareResult.innerText.replace("Estimated Fare : ₹","")}`;

}

if (note !== "") {

message += `

📝 Note : ${note}`;

}

message += `

Please confirm my booking. Thank you.`;

window.open(

"https://wa.me/916353886346?text=" +
encodeURIComponent(message),

"_blank"

);

});

}

console.log("WhatsApp Booking V8 Loaded");
/* ==========================================
   SCRIPT.JS V8.0
   PART 6
   FINAL FEATURES
========================================== */

// ==========================
// STICKY HEADER SHADOW
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (!header) return;

if (window.scrollY > 50) {

header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

} else {

header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

}

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll(".btn").forEach(btn => {

btn.addEventListener("click", function (e) {

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width, rect.height);

ripple.style.width = size + "px";
ripple.style.height = size + "px";
ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

ripple.className = "ripple";

this.appendChild(ripple);

setTimeout(() => {

ripple.remove();

}, 600);

});

});

// ==========================
// IMAGE LAZY LOADING
// ==========================

document.querySelectorAll("img").forEach(img => {

img.loading = "lazy";

});

// ==========================
// PAGE LOADER
// ==========================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

// ==========================
// SIMPLE FORM RESET
// ==========================

if (bookNowBtn && bookingForm) {

bookNowBtn.addEventListener("click", () => {

setTimeout(() => {

bookingForm.reset();

if (returnDateBox) {

returnDateBox.style.display = "none";

}

}, 1000);

});

}

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("%cHitansh Cab Service V8.0",
"color:#ff9800;font-size:18px;font-weight:bold;");

console.log("Website Developed Successfully.");

console.log("Version : V8.0");

console.log("Status : Ready for GitHub Pages");

// ==========================
// END OF FILE
// ==========================
