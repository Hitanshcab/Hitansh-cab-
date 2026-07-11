/* ==========================================
   HITANSH CAB SERVICE
   SCRIPT.JS V7.0
   PART 1
========================================== */

// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

menuToggle.innerHTML = navLinks.classList.contains("active")

? '<i class="fa-solid fa-xmark"></i>'

: '<i class="fa-solid fa-bars"></i>';

});

}

// ===========================
// CLOSE MENU AFTER CLICK
// ===========================

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

if(navLinks){

navLinks.classList.remove("active");

}

if(menuToggle){

menuToggle.innerHTML =
'<i class="fa-solid fa-bars"></i>';

}

});

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

}

});

});

// ===========================
// SCROLL TO TOP
// ===========================

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ===========================
// ACTIVE NAV LINK
// ===========================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===========================
// CURRENT YEAR
// ===========================

document.querySelectorAll(".year").forEach(el=>{

el.textContent=new Date().getFullYear();

});

console.log("Hitansh Cab Service V7.0 Loaded");
/* ==========================================
   PART 2
   GUJARAT ROUTES DATABASE
========================================== */

const routes = {

"Vadodara → Ahmedabad": { sedan:1700, suv:2399 },

"Vadodara → Ahmedabad Airport": { sedan:1900, suv:2600 },

"Vadodara → Gandhinagar": { sedan:2000, suv:2700 },

"Vadodara → Anand": { sedan:1200, suv:1700 },

"Vadodara → Nadiad": { sedan:1400, suv:1900 },

"Vadodara → Bharuch": { sedan:1500, suv:2000 },

"Vadodara → Ankleshwar": { sedan:1700, suv:2200 },

"Vadodara → Surat": { sedan:2200, suv:2699 },

"Vadodara → Navsari": { sedan:3000, suv:3600 },

"Vadodara → Valsad": { sedan:3600, suv:4300 },

"Vadodara → Vapi": { sedan:4200, suv:4900 },

"Vadodara → Silvassa": { sedan:4500, suv:5200 },

"Vadodara → Rajkot": { sedan:3700, suv:4399 },

"Vadodara → Jamnagar": { sedan:6000, suv:7000 },

"Vadodara → Dwarka": { sedan:7500, suv:8000 },

"Vadodara → Somnath": { sedan:7500, suv:8000 },

"Vadodara → Junagadh": { sedan:6500, suv:7500 },

"Vadodara → Porbandar": { sedan:7200, suv:8200 },

"Vadodara → Bhavnagar": { sedan:4300, suv:5200 },

"Vadodara → Amreli": { sedan:5200, suv:6200 },

"Vadodara → Botad": { sedan:4300, suv:5100 },

"Vadodara → Surendranagar": { sedan:4200, suv:5000 },

"Vadodara → Morbi": { sedan:5000, suv:6000 },

"Vadodara → Palanpur": { sedan:4700, suv:5600 },

"Vadodara → Mehsana": { sedan:3000, suv:3700 },

"Vadodara → Patan": { sedan:3900, suv:4700 },

"Vadodara → Modasa": { sedan:3200, suv:3900 },

"Vadodara → Godhra": { sedan:1500, suv:2000 },

"Vadodara → Dahod": { sedan:2500, suv:3200 },

"Vadodara → Lunawada": { sedan:2300, suv:2900 },

"Vadodara → Himmatnagar": { sedan:3500, suv:4300 },

"Vadodara → Statue of Unity": { sedan:2200, suv:2800 },

"Vadodara → Kevadia": { sedan:2200, suv:2800 },

"Vadodara → Saputara": { sedan:5600, suv:6600 },

"Vadodara → Mount Abu": { sedan:7800, suv:9000 },

"Vadodara → Udaipur": { sedan:6500, suv:7600 },

"Vadodara → Mumbai": { sedan:7000, suv:9000 },

"Vadodara → Pune": { sedan:11000, suv:13000 }

};

/* ==========================================
   ADDITIONAL ROUTES
========================================== */

[
"Kalol",
"Halol",
"Karjan",
"Dabhoi",
"Padra",
"Borsad",
"Petlad",
"Umreth",
"Kheda",
"Khambhat",
"Mandvi",
"Vyara",
"Bardoli",
"Songadh",
"Chikhli",
"Bilimora",
"Gondal",
"Jetpur",
"Veraval",
"Keshod",
"Mahuva",
"Dholka",
"Sanand",
"Viramgam",
"Wankaner",
"Tankara",
"Deesa",
"Ambaji",
"Idar",
"Visnagar",
"Unjha",
"Sidhpur",
"Tharad",
"Radhanpur",
"Bhuj",
"Gandhidham",
"Anjar",
"Mundra",
"Mandvi Kutch",
"Nakhatrana",
"Lakh
 /* ==========================================
/* ==========================================
   V7.1 SMART SEARCH UPGRADE
========================================== */

const searchBox = document.getElementById("routeSearch");
const resultBox = document.getElementById("searchResults");

function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/→/g, " ")
        .replace(/to/g, " ")
        .replace(/-/g, " ")
        .replace(/\s+/g, " ")
        .replace("ahemdabad", "ahmedabad")
        .trim();
}

if (searchBox && resultBox) {

    searchBox.addEventListener("input", function () {

        const keyword = normalizeText(this.value);

        resultBox.innerHTML = "";

        if (keyword.length < 2) {
            resultBox.style.display = "none";
            return;
        }

        const matches = Object.keys(routes).filter(route =>
            normalizeText(route).includes(keyword)
        );

        if (matches.length === 0) {
            resultBox.innerHTML =
                '<div class="no-result">No Route Found</div>';
            resultBox.style.display = "block";
            return;
        }

        matches.forEach(route => {

            const div = document.createElement("div");

            div.className = "search-item";

            div.textContent = route;

            div.onclick = function () {

                searchBox.value = route;

                resultBox.style.display = "none";

            };

            resultBox.appendChild(div);

        });

        resultBox.style.display = "block";

    });

    document.addEventListener("click", function(e){

        if(
            !searchBox.contains(e.target) &&
            !resultBox.contains(e.target)
        ){
            resultBox.style.display="none";
        }

    });

}

/* ===========================
   CLOSE SEARCH RESULT
=========================== */

document.addEventListener("click", function(e){

    if(
        searchBox &&
        resultBox &&
        !searchBox.contains(e.target) &&
        !resultBox.contains(e.target)
    ){

        resultBox.style.display = "none";

    }

});

/* ===========================
   POPULAR ROUTE CLICK
=========================== */

document.querySelectorAll(".route-card").forEach(card=>{

    card.addEventListener("click",()=>{

        if(searchBox){

            searchBox.value =
            card.innerText.trim();

            window.location.hash = "#fare";

        }

    });

});

/* ===========================
   SEARCH WITH ENTER KEY
=========================== */

if(searchBox){

searchBox.addEventListener("keydown",function(e){

if(e.key==="Enter"){

e.preventDefault();

const btn=document.getElementById("calculateFare");

if(btn){

btn.click();

}

}

});

}

/* ===========================
   SEARCH CLEAR
=========================== */

function clearSearch(){

if(searchBox){

searchBox.value="";

}

if(resultBox){

resultBox.innerHTML="";

resultBox.style.display="none";

}

}

console.log("Smart Search Ready");
/* ==========================================
   PART 4
   SMART FARE CALCULATOR
========================================== */

const calculateFareBtn = document.getElementById("calculateFare");
const carType = document.getElementById("fareCarType");
const tripMode = document.getElementById("tripMode");
const selectedRoute = document.getElementById("selectedRoute");
const fareResult = document.getElementById("fareResult");

if (calculateFareBtn) {

calculateFareBtn.addEventListener("click", function () {

const route = searchBox.value.trim();

if (route === "") {

alert("Please search and select your destination.");

searchBox.focus();

return;

}

if (!routes[route]) {

selectedRoute.innerHTML = "Route : Not Available";

fareResult.innerHTML = "Estimated Fare : ₹0";

alert("Sorry! This route is not available.");

return;

}

const vehicle = carType.value.toLowerCase();

let fare = routes[route][vehicle];

if (tripMode.value === "round") {

fare = fare * 2;

}

selectedRoute.innerHTML =
"Route : " + route;

fareResult.innerHTML =
"Estimated Fare : ₹" +
fare.toLocaleString("en-IN");

});

}

/* ===========================
   RESET RESULT WHEN ROUTE CHANGES
=========================== */

if (searchBox) {

searchBox.addEventListener("input", () => {

selectedRoute.innerHTML = "Route : -";

fareResult.innerHTML = "Estimated Fare : ₹0";

});

}

/* ===========================
   CHANGE VEHICLE
=========================== */

if (carType) {

carType.addEventListener("change", () => {

if (searchBox.value !== "") {

calculateFareBtn.click();

}

});

}

/* ===========================
   CHANGE TRIP TYPE
=========================== */

if (tripMode) {

tripMode.addEventListener("change", () => {

if (searchBox.value !== "") {

calculateFareBtn.click();

}

});

}

/* ===========================
   FORMAT PRICE
=========================== */

function formatPrice(price){

return "₹" + Number(price).toLocaleString("en-IN");

}

console.log("Smart Fare Calculator Ready");
/* ==========================================
   PART 5
   WHATSAPP BOOKING + COPY FARE
========================================== */

const whatsappNumber = "916353886346";

/* ===========================
   WHATSAPP BOOKING
=========================== */

function sendWhatsAppBooking() {

    const route = searchBox.value.trim();

    if (!route || !routes[route]) {

        alert("Please select a valid route.");
        return;

    }

    const vehicle = carType.value;

    let fare = routes[route][vehicle.toLowerCase()];

    let trip = "One Way";

    if (tripMode.value === "round") {

        fare = fare * 2;
        trip = "Round Trip";

    }

    const message =
`🚖 *Hitansh Cab Service Booking*

📍 Route : ${route}

🚘 Vehicle : ${vehicle}

🔁 Trip : ${trip}

💰 Estimated Fare : ₹${fare.toLocaleString("en-IN")}

📞 Contact : 63538 86346

Please confirm my booking.`;

    window.open(
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}

/* ===========================
   WHATSAPP BUTTON
=========================== */

const whatsappBtn = document.createElement("button");

whatsappBtn.className = "btn whatsapp-btn";

whatsappBtn.id = "whatsappBooking";

whatsappBtn.innerHTML =
'<i class="fab fa-whatsapp"></i> Book on WhatsApp';

if (calculateFareBtn) {

    calculateFareBtn.insertAdjacentElement(
        "afterend",
        whatsappBtn
    );

}

whatsappBtn.addEventListener(
    "click",
    sendWhatsAppBooking
);

/* ===========================
   COPY FARE
=========================== */

function copyFare() {

    const text =
selectedRoute.innerText +
"\n" +
fareResult.innerText;

    navigator.clipboard.writeText(text);

    alert("Fare copied successfully.");

}

const copyBtn = document.createElement("button");

copyBtn.className = "btn secondary-btn";

copyBtn.innerHTML =
'<i class="fa-solid fa-copy"></i> Copy Fare';

whatsappBtn.insertAdjacentElement(
    "afterend",
    copyBtn
);

copyBtn.addEventListener(
    "click",
    copyFare
);

/* ===========================
   QUICK BOOK FROM POPULAR ROUTE
=========================== */

document.querySelectorAll(".route-card").forEach(card=>{

card.addEventListener("dblclick",()=>{

searchBox.value=card.innerText.trim();

calculateFareBtn.click();

});

});

console.log("WhatsApp Booking Ready");
/* ==========================================
   PART 6
   FINAL ANIMATION & OPTIMIZATION
========================================== */

// ===========================
// SCROLL ANIMATION
// ===========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(
".service-card,.fleet-card,.why-card,.review-card,.route-card,.feature-card,.faq-item"
).forEach(item=>{

observer.observe(item);

});

// ===========================
// LAZY LOAD IMAGES
// ===========================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// ===========================
// PAGE LOADER
// ===========================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ===========================
// ERROR HANDLER
// ===========================

window.onerror=function(message,file,line){

console.error(
"JavaScript Error:",
message,
"Line:",
line
);

};

// ===========================
// TOTAL ROUTES
// ===========================

console.log(
"Total Routes :",
Object.keys(routes).length
);

// ===========================
// VERSION INFO
// ===========================

console.log("================================");
console.log("Hitansh Cab Service");
console.log("Website Version : 7.0");
console.log("Developer : ChatGPT");
console.log("Status : Ready");
console.log("================================");
