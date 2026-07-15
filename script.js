/* ==========================
   HITANSH CAB V13 PRO PLUS
========================== */

document.addEventListener("DOMContentLoaded", () => {

const fareBtn = document.getElementById("searchFareBtn");
const topBtn = document.getElementById("topBtn");

const fares = {

"Vadodara-Ahmedabad": { Sedan:1700, SUV:2399 },

"Vadodara-Surat": { Sedan:2200, SUV:2699 },

"Vadodara-Rajkot": { Sedan:3700, SUV:4399 },

"Vadodara-Jamnagar": { Sedan:6000, SUV:7000 },

"Vadodara-Dwarka": { Sedan:7500, SUV:8000 },

"Vadodara-Somnath": { Sedan:7500, SUV:8000 }

};

if(fareBtn){

fareBtn.addEventListener("click",()=>{

const pickup=document.getElementById("pickup").value.trim();

const drop=document.getElementById("drop").value.trim();

const vehicle=document.getElementById("vehicle").value;

const key=`${pickup}-${drop}`;

if(fares[key]){

alert(`Estimated Fare (${vehicle}) : ₹${fares[key][vehicle]}`);

}else{

alert("Please contact us for custom fare.\nWhatsApp : 6353886346");

}

});

}

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

});
/* ==========================
   WHATSAPP BOOKING
========================== */

function sendBooking() {

const name = document.getElementById("name")?.value || "";
const mobile = document.getElementById("mobile")?.value || "";
const pickup = document.getElementById("pickup")?.value || "";
const drop = document.getElementById("drop")?.value || "";
const date = document.getElementById("pickupDate")?.value || "";
const time = document.getElementById("pickupTime")?.value || "";
const vehicle = document.getElementById("vehicle")?.value || "Sedan";
const trip = document.getElementById("tripType")?.value || "One Way";

const message =
`🚖 *New Cab Booking*

👤 Name : ${name}

📱 Mobile : ${mobile}

📍 Pickup : ${pickup}

🏁 Drop : ${drop}

📅 Date : ${date}

🕒 Time : ${time}

🚗 Vehicle : ${vehicle}

🔁 Trip : ${trip}

Booking from HitanshCab.in`;

window.open(
"https://wa.me/916353886346?text=" +
encodeURIComponent(message),
"_blank"
);

}

/* ==========================
   BOOK CAB BUTTON
========================== */

function selectCab(vehicle){

const vehicleBox = document.getElementById("vehicle");

if(vehicleBox){

vehicleBox.value = vehicle;

}

document.getElementById("booking")
.scrollIntoView({

behavior:"smooth"

});

}

/* ==========================
   POPULAR ROUTE
========================== */

function setRoute(from,to){

const pickup=document.getElementById("pickup");

const drop=document.getElementById("drop");

if(pickup) pickup.value=from;

if(drop) drop.value=to;

document.getElementById("fare")
.scrollIntoView({

behavior:"smooth"

});

}
/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");

  });

}

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  if (loader) {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 500);

  }

});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});

/* ==========================
   SCROLL ANIMATION
========================== */

const animatedItems = document.querySelectorAll(
  ".about-card,.cab-card,.fleet-card,.review-card,.why-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {

  threshold: 0.2

});

animatedItems.forEach(item => {

  observer.observe(item);

});
/* ==========================
   ANIMATED COUNTERS
========================== */

const counters = document.querySelectorAll(".counter-box h2");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = parseInt(counter.innerText.replace(/\D/g, "")) || 0;

    let count = 0;
    const step = Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

      count += step;

      if (count >= target) {

        counter.innerText = counter.innerText.includes("+")
          ? target + "+"
          : target;

        clearInterval(timer);

      } else {

        counter.innerText = counter.innerText.includes("+")
          ? count + "+"
          : count;

      }

    }, 20);

    counterObserver.unobserve(counter);

  });

});

counters.forEach(counter => {

  counterObserver.observe(counter);

});

/* ==========================
   REVIEW AUTO SLIDER
========================== */

const reviewCards = document.querySelectorAll(".review-card");

let reviewIndex = 0;

function rotateReviews() {

  if (reviewCards.length === 0) return;

  reviewCards.forEach(card => {

    card.style.display = "none";

  });

  reviewCards[reviewIndex].style.display = "block";

  reviewIndex++;

  if (reviewIndex >= reviewCards.length) {

    reviewIndex = 0;

  }

}

if (reviewCards.length > 0) {

  rotateReviews();

  setInterval(rotateReviews, 4000);

}

/* ==========================
   FLOATING BUTTON EFFECT
========================== */

const floatingButtons = document.querySelectorAll(
  ".floating-whatsapp,.floating-call"
);

floatingButtons.forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    btn.style.transform = "scale(1.1)";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform = "scale(1)";

  });

});

/* ==========================
   CURRENT YEAR
========================== */

const year = document.getElementById("currentYear");

if (year) {

  year.textContent = new Date().getFullYear();

}
/* ==========================
   DYNAMIC FARE CALCULATOR
========================== */

const fareData = {
  "Vadodara-Ahmedabad": { distance:110, time:"2 Hr", sedan:1700, suv:2399 },
  "Vadodara-Surat": { distance:155, time:"3 Hr", sedan:2200, suv:2699 },
  "Vadodara-Rajkot": { distance:295, time:"5 Hr", sedan:3700, suv:4399 },
  "Vadodara-Jamnagar": { distance:455, time:"8 Hr", sedan:6000, suv:7000 },
  "Vadodara-Dwarka": { distance:470, time:"9 Hr", sedan:7500, suv:8000 },
  "Vadodara-Somnath": { distance:465, time:"9 Hr", sedan:7500, suv:8000 }
};

function calculateFare() {

  const pickup = document.getElementById("pickup")?.value.trim();
  const drop = document.getElementById("drop")?.value.trim();
  const vehicle = document.getElementById("vehicle")?.value || "Sedan";

  if (!pickup || !drop) {
    alert("Please select Pickup and Drop city.");
    return;
  }

  const route = `${pickup}-${drop}`;
  const data = fareData[route];

  if (!data) {
    alert("Fare not available for this route. Please contact us on WhatsApp.");
    return;
  }

  const fare = vehicle === "SUV" ? data.suv : data.sedan;

  const fareEl = document.getElementById("summaryFare");
  const distEl = document.getElementById("summaryDistance");
  const timeEl = document.getElementById("summaryTime");
  const routeEl = document.getElementById("summaryRoute");

  if (fareEl) fareEl.textContent = `₹${fare}`;
  if (distEl) distEl.textContent = `${data.distance} KM`;
  if (timeEl) timeEl.textContent = data.time;
  if (routeEl) routeEl.textContent = `${pickup} → ${drop}`;
}

const searchBtn = document.getElementById("searchFareBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", calculateFare);
}

/* ==========================
   SWAP PICKUP & DROP
========================== */

function swapRoute() {

  const pickup = document.getElementById("pickup");
  const drop = document.getElementById("drop");

  if (pickup && drop) {
    const temp = pickup.value;
    pickup.value = drop.value;
    drop.value = temp;
  }

}

/* ==========================
   BASIC FORM VALIDATION
========================== */

const bookingForm = document.getElementById("cabBookingForm");

if (bookingForm) {

  bookingForm.addEventListener("submit", function(e) {

    const name = document.getElementById("name")?.value.trim();
    const mobile = document.getElementById("mobile")?.value.trim();

    if (!name || mobile.length < 10) {

      e.preventDefault();

      alert("Please enter a valid Name and Mobile Number.");

    }

  });

}

console.log("✅ Hitansh Cab V13 Pro Plus Loaded Successfully");
