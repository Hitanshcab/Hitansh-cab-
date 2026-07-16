/* ==========================================
   HITANSH CAB SERVICE
   SCRIPT.JS V9.0 ULTRA
   PART 1
   LOADER + MENU + SCROLL + UI
========================================== */

// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}

document.querySelectorAll("#navMenu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

// ===========================
// HEADER SHADOW
// ===========================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.background="rgba(17,17,17,.97)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.18)";

}else{

header.style.background="rgba(17,17,17,.92)";
header.style.boxShadow="none";

}

});

// ===========================
// SCROLL TO TOP
// ===========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

}

// ===========================
// AUTO YEAR
// ===========================

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}

// ===========================
// HERO BUTTON
// ===========================

const heroBookBtn=document.getElementById("heroBookBtn");

if(heroBookBtn){

heroBookBtn.addEventListener("click",()=>{

document.getElementById("booking")
.scrollIntoView({

behavior:"smooth"

});

});

}

// ===========================
// FADE-UP ANIMATION
// ===========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(
".service-box,.fleet-card,.why-card,.review-card,.contact-card,.faq-item"
).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

console.log("Hitansh Cab Service V9.0 Ultra Loaded");
/* ==========================================
   SCRIPT.JS V9.0 ULTRA
   PART 2
   SMART SEARCH + ROUTES DATABASE
========================================== */

// ===========================
// ROUTES DATABASE
// ===========================

const routes = {

"Vadodara - Ahmedabad": {
Sedan:1700,
SUV:2399,
"Tempo Traveller":4500
},

"Vadodara - Surat": {
Sedan:2200,
SUV:2699,
"Tempo Traveller":5200
},

"Vadodara - Bharuch": {
Sedan:1200,
SUV:1700,
"Tempo Traveller":3200
},

"Vadodara - Anand": {
Sedan:900,
SUV:1400,
"Tempo Traveller":2600
},

"Vadodara - Rajkot": {
Sedan:3700,
SUV:4399,
"Tempo Traveller":7200
},

"Vadodara - Jamnagar": {
Sedan:6000,
SUV:7000,
"Tempo Traveller":11000
},

"Vadodara - Dwarka": {
Sedan:7500,
SUV:8000,
"Tempo Traveller":12500
},

"Vadodara - Somnath": {
Sedan:7500,
SUV:8000,
"Tempo Traveller":12500
},

"Vadodara - Bhavnagar": {
Sedan:4200,
SUV:4800,
"Tempo Traveller":7600
},

"Vadodara - Gandhinagar": {
Sedan:1900,
SUV:2600,
"Tempo Traveller":4500
},

"Vadodara - Kevadiya": {
Sedan:1800,
SUV:2400,
"Tempo Traveller":4300
},

"Vadodara - Mount Abu": {
Sedan:6500,
SUV:7600,
"Tempo Traveller":12000
},

"Vadodara - Udaipur": {
Sedan:6000,
SUV:7200,
"Tempo Traveller":11500
},

"Vadodara - Mumbai": {
Sedan:6999,
SUV:8999,
"Tempo Traveller":13500
}

};

// ===========================
// SMART SEARCH
// ===========================

const routeSearch =
document.getElementById("routeSearch");

const searchResults =
document.getElementById("searchResults");

const selectedRoute =
document.getElementById("selectedRoute");

let selectedRouteName = "";

if(routeSearch){

routeSearch.addEventListener("input",function(){

const keyword =
this.value.toLowerCase().trim();

searchResults.innerHTML="";

if(keyword===""){

searchResults.style.display="none";
return;

}

const matched =
Object.keys(routes).filter(route=>

route.toLowerCase().includes(keyword)

);

matched.forEach(route=>{

const item=document.createElement("div");

item.className="search-item";

item.textContent=route;

item.onclick=()=>{

routeSearch.value=route;

selectedRouteName=route;

selectedRoute.innerHTML=
"Route : "+route;

searchResults.style.display="none";

};

searchResults.appendChild(item);

});

searchResults.style.display=
matched.length?"block":"none";

});

}

// ===========================
// CLICK OUTSIDE
// ===========================

document.addEventListener("click",(e)=>{

if(
routeSearch &&
searchResults &&
!routeSearch.contains(e.target) &&
!searchResults.contains(e.target)
){

searchResults.style.display="none";

}

});

console.log("Smart Search Ready");
/* ==========================================
   SCRIPT.JS V9.0 ULTRA
   PART 3
   SMART FARE CALCULATOR
========================================== */

const carType = document.getElementById("carType");
const tripMode = document.getElementById("tripMode");
const calculateFare = document.getElementById("calculateFare");
const fareResult = document.getElementById("fareResult");

// ===========================
// CALCULATE FARE
// ===========================

if (calculateFare) {

calculateFare.addEventListener("click", () => {

if (selectedRouteName === "") {

alert("Please select a route first.");

return;

}

const vehicle = carType.value;

let fare = routes[selectedRouteName][vehicle];

if (!fare) {

fareResult.innerHTML = "N/A";

return;

}

// Round Trip

if (tripMode.value === "round") {

fare = fare * 2;

}

animateFare(fare);

});

}

// ===========================
// FARE ANIMATION
// ===========================

function animateFare(targetFare){

let current = 0;

const speed = Math.max(20, Math.floor(targetFare / 80));

const timer = setInterval(()=>{

current += speed;

if(current >= targetFare){

current = targetFare;

clearInterval(timer);

}

fareResult.innerHTML = "₹" + current.toLocaleString("en-IN");

},15);

}

// ===========================
// AUTO UPDATE
// ===========================

carType.addEventListener("change",()=>{

if(selectedRouteName!==""){

calculateFare.click();

}

});

tripMode.addEventListener("change",()=>{

if(selectedRouteName!==""){

calculateFare.click();

}

});

// ===========================
// HERO SEARCH AUTO FILL
// ===========================

const pickupSearch = document.getElementById("pickupSearch");
const dropSearch = document.getElementById("dropSearch");

if(heroBookBtn){

heroBookBtn.addEventListener("click",()=>{

if(dropSearch.value.trim()!==""){

routeSearch.value =
"Vadodara - " + dropSearch.value.trim();

routeSearch.dispatchEvent(new Event("input"));

}

});

}

console.log("Fare Calculator Ready");
/* ==========================================
   SCRIPT.JS V9.0 ULTRA
   PART 4
   WHATSAPP BOOKING SYSTEM
========================================== */

const bookingForm = document.getElementById("bookingForm");
const tripType = document.getElementById("tripType");
const returnDateBox = document.getElementById("returnDateBox");
const bookNowBtn = document.getElementById("bookNowBtn");

// ===========================
// SHOW / HIDE RETURN DATE
// ===========================

if (tripType && returnDateBox) {

tripType.addEventListener("change", () => {

returnDateBox.style.display =
tripType.value === "Round Trip"
? "block"
: "none";

});

}

// ===========================
// WHATSAPP BOOKING
// ===========================

if (bookNowBtn) {

bookNowBtn.addEventListener("click", () => {

const name =
document.getElementById("customerName").value.trim();

const phone =
document.getElementById("customerPhone").value.trim();

const pickup =
document.getElementById("pickupLocation").value.trim();

const drop =
document.getElementById("dropLocation").value.trim();

const pickupDate =
document.getElementById("pickupDate").value;

const pickupTime =
document.getElementById("pickupTime").value;

const vehicle =
document.getElementById("vehicleType").value;

const note =
document.getElementById("note").value.trim();

const returnDate =
document.getElementById("returnDate").value;

// Validation

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

let fareText = fareResult.innerText;

if (fareText === "₹0") {

fareText = "Fare will be confirmed";

}

// WhatsApp Message

let message =

`🚖 HITANSH CAB SERVICE

📝 New Booking Request

👤 Name : ${name}

📱 Mobile : ${phone}

📍 Pickup : ${pickup}

📍 Drop : ${drop}

📅 Pickup Date : ${pickupDate}

🕒 Pickup Time : ${pickupTime}

🚘 Vehicle : ${vehicle}

🔁 Trip : ${tripType.value}`;

if (tripType.value === "Round Trip") {

message += `

📅 Return Date : ${returnDate}`;

}

message += `

💰 Estimated Fare : ${fareText}`;

if (note !== "") {

message += `

📝 Note : ${note}`;

}

message += `

Please confirm my booking.
Thank you.`;

window.open(

"https://wa.me/916353886346?text=" +
encodeURIComponent(message),

"_blank"

);

});

}

console.log("WhatsApp Booking Ready");
/* ==========================================
   SCRIPT.JS V9.0 ULTRA
   PART 5
   COUNTER + ANIMATION + GALLERY
========================================== */

// ===========================
// COUNTER ANIMATION
// ===========================

const counters = document.querySelectorAll(".counter-box h2");

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (!entry.isIntersecting) return;

const counter = entry.target;

const target = parseInt(counter.innerText.replace(/\D/g, "")) || 0;

const suffix = counter.innerText.replace(/[0-9]/g, "");

let current = 0;

const step = Math.max(1, Math.floor(target / 100));

const timer = setInterval(() => {

current += step;

if (current >= target) {

current = target;

clearInterval(timer);

}

counter.innerHTML = current.toLocaleString("en-IN") + suffix;

}, 20);

counterObserver.unobserve(counter);

});

});

counters.forEach(counter => {

counterObserver.observe(counter);

});

// ===========================
// SCROLL ANIMATION
// ===========================

const animationItems = document.querySelectorAll(

".fleet-card,.service-box,.review-card,.why-card,.gallery-grid img,.contact-card,.faq-item"

);

const animationObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold:0.15

});

animationItems.forEach(item => {

animationObserver.observe(item);

});

// ===========================
// GALLERY ZOOM EFFECT
// ===========================

document.querySelectorAll(".gallery-grid img").forEach(img => {

img.addEventListener("click", () => {

img.classList.toggle("zoom");

});

});

// ===========================
// BUTTON RIPPLE EFFECT
// ===========================

document.querySelectorAll(

".btn,.book-btn,.fare-btn,.fleet-btn"

).forEach(button => {

button.addEventListener("click", function(e){

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width, rect.height);

ripple.style.width = size + "px";
ripple.style.height = size + "px";

ripple.style.left =
(e.clientX - rect.left - size / 2) + "px";

ripple.style.top =
(e.clientY - rect.top - size / 2) + "px";

ripple.className = "ripple";

this.appendChild(ripple);

setTimeout(() => {

ripple.remove();

},600);

});

});

// ===========================
// IMAGE LAZY LOADING
// ===========================

document.querySelectorAll("img").forEach(img => {

img.loading = "lazy";

});

console.log("Animations Loaded Successfully");
/* ==========================================
   SCRIPT.JS V9.0 ULTRA
   PART 6
   FINAL OPTIMIZATION + BUG FIXES
========================================== */

// ===========================
// ACTIVE MENU ON SCROLL
// ===========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if (window.scrollY >= sectionTop) {

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

// ===========================
// BOOK VEHICLE BUTTON
// ===========================

document.querySelectorAll(".fleet-btn").forEach(btn => {

btn.addEventListener("click", () => {

document.getElementById("booking").scrollIntoView({

behavior: "smooth"

});

});

});

// ===========================
// PHONE NUMBER VALIDATION
// ===========================

const phoneInput = document.getElementById("customerPhone");

if (phoneInput) {

phoneInput.addEventListener("input", function () {

this.value = this.value.replace(/[^0-9]/g, "");

if (this.value.length > 10) {

this.value = this.value.substring(0, 10);

}

});

}

// ===========================
// PREVENT DOUBLE SUBMIT
// ===========================

let bookingSending = false;

if (bookNowBtn) {

bookNowBtn.addEventListener("click", () => {

if (bookingSending) return;

bookingSending = true;

setTimeout(() => {

bookingSending = false;

}, 3000);

});

}

// ===========================
// ONLINE / OFFLINE STATUS
// ===========================

window.addEventListener("offline", () => {

alert("Internet connection lost.");

});

window.addEventListener("online", () => {

console.log("Internet Connected");

});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(`
==================================
 HITANSH CAB SERVICE
 Version : V9.0 Ultra
 Developed for GitHub Pages
==================================
`);

// ===========================
// END
// ===========================

console.log("V9.0 Ultra Loaded Successfully");
