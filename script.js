/* ===================================
   HITANSH CAB SERVICE V3.0
   PART 1
=================================== */

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// ===============================
// Round Trip Show / Hide
// ===============================

const tripTypes = document.querySelectorAll(
  "input[name='tripType']"
);

const returnDateBox =
document.getElementById("returnDateBox");

tripTypes.forEach((radio) => {

radio.addEventListener("change", () => {

if (
radio.checked &&
radio.value === "Round Trip"
) {

returnDateBox.style.display = "block";

} else {

returnDateBox.style.display = "none";

}

});

});

// ===============================
// WhatsApp Booking
// ===============================

const bookingForm =
document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", function (e) {

e.preventDefault();

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const pickup =
document.getElementById("pickup").value;

const drop =
document.getElementById("drop").value;

const trip =
document.querySelector(
"input[name='tripType']:checked"
).value;

const pickupDate =
document.getElementById("pickupDate").value;

const returnDate =
document.getElementById("returnDate").value;

const pickupTime =
document.getElementById("pickupTime").value;

const carType =
document.getElementById("carType").value;

const passengers =
document.getElementById("passengers").value;

let message =
`🚖 *New Cab Booking*

👤 Name: ${name}

📱 Phone: ${phone}

🚕 Trip: ${trip}

📍 Pickup: ${pickup}

🏁 Drop: ${drop}

📅 Pickup Date: ${pickupDate}`;

if (trip === "Round Trip") {

message += `

🔁 Return Date: ${returnDate}`;

}

message += `

🕒 Time: ${pickupTime}

🚘 Car: ${carType}

👥 Passengers: ${passengers}

Thank You 🙏`;

window.open(

"https://wa.me/916353886346?text=" +
encodeURIComponent(message),

"_blank"

);

});

}

/* ===== End Part 1 ===== */
/* ===================================
   HITANSH CAB SERVICE V3.0
   PART 2
=================================== */

// ===============================
// Smart Fare Calculator
// ===============================

const route = document.getElementById("route");
const tripMode = document.getElementById("tripMode");
const fareCarType = document.getElementById("fareCarType");
const calculateFare = document.getElementById("calculateFare");
const fareResult = document.getElementById("fareResult");

if (calculateFare) {

calculateFare.addEventListener("click", function () {

let fare = Number(route.value);

if (!fare) {

fareResult.innerHTML =
"⚠️ Please Select Route";

fareResult.style.color = "red";

return;

}

fareResult.style.color = "#28a745";

// Round Trip

if (tripMode.value === "round") {

fare = fare * 2;

}

// SUV Charges

if (fareCarType.value === "SUV") {

fare += 700;

}

fareResult.innerHTML =

`Estimated Fare

₹${fare}`;

});

}

// ===============================
// Auto Update Fare
// ===============================

if (route) {

route.addEventListener("change", autoFare);

tripMode.addEventListener("change", autoFare);

fareCarType.addEventListener("change", autoFare);

}

function autoFare() {

if (!route.value) {

fareResult.innerHTML =
"Estimated Fare : ₹0";

return;

}

let fare = Number(route.value);

if (tripMode.value === "round") {

fare *= 2;

}

if (fareCarType.value === "SUV") {

fare += 700;

}

fareResult.innerHTML =

`Estimated Fare : ₹${fare}`;

}

// ===============================
// Booking Form Route Auto Fill
// ===============================

if (route) {

route.addEventListener("change", function () {

const text =

route.options[route.selectedIndex].text;

if (text.includes("→")) {

const data = text.split("→");

document.getElementById("pickup").value =
data[0].trim();

document.getElementById("drop").value =
data[1].trim();

}

});

}

/* ===== End Part 2 ===== */
/* ===================================
   HITANSH CAB SERVICE V3.0
   PART 3
=================================== */

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

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

// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.boxShadow =
"0 10px 20px rgba(0,0,0,.15)";

} else {

header.style.boxShadow =
"0 3px 10px rgba(0,0,0,.08)";

}

});

// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e) {

const target = document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// Fade In Animation
// ===============================

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
".car-card,.fare-card,.review-card,.feature-box,.contact-box"
).forEach(item=>{

observer.observe(item);

});

// ===============================
// Mobile Menu Auto Close
// ===============================

document.querySelectorAll(".navbar a").forEach(item=>{

item.addEventListener("click",()=>{

if(window.innerWidth<992){

navbar.classList.remove("active");

}

});

});

// ===============================
// Current Year in Footer
// ===============================

const year = document.getElementById("year");

if(year){

year.textContent = new Date().getFullYear();

}

/* ===== End Part 3 ===== */
/* ===================================
   HITANSH CAB SERVICE V3.0
   PART 4
=================================== */

// ===============================
// Live Clock
// ===============================

const liveClock = document.getElementById("liveClock");

function updateClock() {

if (!liveClock) return;

const now = new Date();

liveClock.innerHTML =
now.toLocaleTimeString("en-IN");

}

setInterval(updateClock,1000);

updateClock();

// ===============================
// Live Cab Availability
// ===============================

const statusCard =
document.querySelector(".status-card");

if(statusCard){

const status = [

"🟢 Cabs Available Now",

"🚖 Sedan Available",

"🚙 SUV Available",

"📞 Book Instantly"

];

let i=0;

setInterval(()=>{

i++;

if(i>=status.length){

i=0;

}

statusCard.innerHTML=status[i];

},4000);

}

// ===============================
// Gallery Image Click
// ===============================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});

// ===============================
// Booking Success Alert
// ===============================

if(bookingForm){

bookingForm.addEventListener("submit",()=>{

setTimeout(()=>{

alert("✅ Booking request sent successfully on WhatsApp.");

},500);

});

}

// ===============================
// Call Button
// ===============================

const callBtn =
document.querySelector(".floating-call");

if(callBtn){

callBtn.addEventListener("click",()=>{

console.log("Calling Customer Support");

});

}

// ===============================
// WhatsApp Button
// ===============================

const whatsappBtn =
document.querySelector(".floating-whatsapp");

if(whatsappBtn){

whatsappBtn.addEventListener("click",()=>{

console.log("Opening WhatsApp");

});

}

// ===============================
// Page Loading
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ===============================
// Console Message
// ===============================

console.log(
"Hitansh Cab Service Version 3.0 Loaded Successfully"
);

/* ===== END OF SCRIPT.JS ===== */
