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
// ===============================
// GUJARAT ROUTES DATABASE - PART 1
// ===============================

const routes = {

"Vadodara → Ahmedabad":1700,
"Vadodara → Gandhinagar":1900,
"Vadodara → Nadiad":900,
"Vadodara → Anand":700,
"Vadodara → Kheda":1000,
"Vadodara → Mehsana":2600,
"Vadodara → Kalol":2200,
"Vadodara → Sanand":2100,
"Vadodara → Viramgam":2800,
"Vadodara → Bavla":2400,
"Vadodara → Dholka":2300,
"Vadodara → Dehgam":2100,
"Vadodara → Kapadvanj":1500,
"Vadodara → Dakor":1200,
"Vadodara → Thasra":1300,
"Vadodara → Umreth":1000,
"Vadodara → Petlad":1100,
"Vadodara → Borsad":900,
"Vadodara → Tarapur":1300,
"Vadodara → Khambhat":1500

// Part 2 में आगे जारी रहेगा...
// ===============================
// GUJARAT ROUTES DATABASE - PART 2
// ===============================

"Vadodara → Surat":2200,
"Vadodara → Bharuch":1200,
"Vadodara → Ankleshwar":1400,
"Vadodara → Navsari":2800,
"Vadodara → Valsad":3500,
"Vadodara → Vapi":3800,
"Vadodara → Bardoli":2400,
"Vadodara → Vyara":2500,
"Vadodara → Songadh":3000,
"Vadodara → Dang (Ahwa)":4200,
"Vadodara → Bilimora":3000,
"Vadodara → Chikhli":3200,
"Vadodara → Pardi":3600,
"Vadodara → Umbergaon":4200,
"Vadodara → Sachin":2300,
"Vadodara → Hazira":2600,
"Vadodara → Kim":1800,
"Vadodara → Kosamba":1700,
"Vadodara → Olpad":2400,
"Vadodara → Mandvi (Surat)":2600,
// ===============================
// GUJARAT ROUTES DATABASE - PART 3
// Saurashtra Routes
// ===============================

"Vadodara → Rajkot":3700,
"Vadodara → Morbi":4800,
"Vadodara → Wankaner":4500,
"Vadodara → Gondal":4100,
"Vadodara → Jetpur":4300,
"Vadodara → Junagadh":5200,
"Vadodara → Keshod":5600,
"Vadodara → Veraval":7000,
"Vadodara → Somnath":7500,
"Vadodara → Porbandar":6500,
"Vadodara → Jamnagar":6000,
"Vadodara → Dwarka":7500,
"Vadodara → Khambhalia":6800,
"Vadodara → Dhrol":5600,
"Vadodara → Lalpur":6200,
"Vadodara → Upleta":4500,
"Vadodara → Dhoraji":4400,
"Vadodara → Amreli":4800,
"Vadodara → Bhavnagar":3500,
"Vadodara → Palitana":3900,
// ===============================
// GUJARAT ROUTES DATABASE - PART 4
// North & Kutch Routes
// ===============================

"Vadodara → Bhuj":8500,
"Vadodara → Gandhidham":7800,
"Vadodara → Mandvi (Kutch)":9200,
"Vadodara → Mundra":9000,
"Vadodara → Anjar":7900,
"Vadodara → Nakhatrana":9300,
"Vadodara → Rapar":7600,
"Vadodara → Palanpur":4200,
"Vadodara → Deesa":4600,
"Vadodara → Ambaji":5200,
"Vadodara → Patan":3400,
"Vadodara → Siddhpur":3500,
"Vadodara → Mehsana":2900,
"Vadodara → Visnagar":3100,
"Vadodara → Unjha":3000,
"Vadodara → Vadnagar":3200,
"Vadodara → Becharaji":3300,
"Vadodara → Himmatnagar":2800,
"Vadodara → Idar":3400,
"Vadodara → Modasa":2600,
// ===============================
// GUJARAT ROUTES DATABASE - PART 5
// East Gujarat & South Gujarat
// ===============================

"Vadodara → Godhra":1700,
"Vadodara → Halol":900,
"Vadodara → Kalol (Panchmahal)":1400,
"Vadodara → Dahod":2500,
"Vadodara → Limkheda":2300,
"Vadodara → Jhalod":2700,
"Vadodara → Chhota Udepur":1600,
"Vadodara → Bodeli":1400,
"Vadodara → Kawant":1800,
"Vadodara → Rajpipla":1600,
"Vadodara → Garudeshwar":1800,
"Vadodara → Kevadia (Statue of Unity)":1800,
"Vadodara → Dediapada":2200,
"Vadodara → Dabhoi":700,
"Vadodara → Waghodia":500,
"Vadodara → Padra":700,
"Vadodara → Karjan":900,
"Vadodara → Savli":700,
"Vadodara → Desar":900,
"Vadodara → Shinor":900

};
// ===============================
// HITANSH CAB SERVICE V5.1
// SMART ROUTE SEARCH
// ===============================

const searchBox = document.getElementById("routeSearch");
const resultBox = document.getElementById("searchResults");
const routeSelect = document.getElementById("route");

if (searchBox && resultBox && routeSelect) {

    searchBox.addEventListener("keyup", function () {

        const text = this.value.toLowerCase().trim();

        resultBox.innerHTML = "";

        if (text.length < 2) return;

        Object.keys(routes).forEach(route => {

            if (route.toLowerCase().includes(text)) {

                const div = document.createElement("div");

                div.textContent = route;

                div.onclick = function () {

                    searchBox.value = route;

                    resultBox.innerHTML = "";

                    // अगर route dropdown में option मौजूद है तो उसे select करें
                    for (let i = 0; i < routeSelect.options.length; i++) {
                        if (routeSelect.options[i].text === route) {
                            routeSelect.selectedIndex = i;
                            break;
                        }
                    }

                };

                resultBox.appendChild(div);

            }

        });

    });

}

// आपका पुराना पूरा script...

// ===========================
// SMART ROUTES DATABASE
// ===========================

const routes = {
  "Vadodara → Ahmedabad": {
    sedan:1700,
    suv:2399
  },

  "Vadodara → Surat": {
    sedan:2200,
    suv:2699
  },

  // बाकी सभी routes...
};
// ===========================
// SEARCH ROUTE
// ===========================

const searchBox = document.getElementById("routeSearch");
const resultBox = document.getElementById("searchResults");

if (searchBox && resultBox) {

  searchBox.addEventListener("keyup", function () {

    const text = this.value.toLowerCase().trim();
    resultBox.innerHTML = "";

    if (text.length < 2) return;

    Object.keys(routes).forEach(route => {

      if (route.toLowerCase().includes(text)) {

        const div = document.createElement("div");
        div.textContent = route;

        div.onclick = function () {
          searchBox.value = route;
          resultBox.innerHTML = "";
        };

        resultBox.appendChild(div);

      }

    });
      // ===========================
// CALCULATE FARE
// ===========================

const calculateBtn = document.getElementById("calculateFare");

if (calculateBtn) {

  calculateBtn.addEventListener("click", function () {

    const route = document.getElementById("routeSearch").value.trim();
    const car = document.getElementById("fareCarType").value;
    const trip = document.getElementById("tripMode").value;

    if (!routes[route]) {
      alert("Route not found.");
      return;
    }

    let fare = routes[route][car.toLowerCase()];

    if (trip === "round") {
      fare = fare * 2;
    }

    document.getElementById("selectedRoute").innerHTML =
      "Route : " + route;

    document.getElementById("fareResult").innerHTML =
      "Estimated Fare : ₹" + fare.toLocaleString("en-IN");

  });

        }
    // ===== Gujarat Routes Part 10 =====

"Vadodara → Bhavnagar": {
  sedan:4800,
  suv:5500
},

"Vadodara → Amreli": {
  sedan:5200,
  suv:6000
},

"Vadodara → Junagadh": {
  sedan:5800,
  suv:6700
},

"Vadodara → Porbandar": {
  sedan:6900,
  suv:7800
},

"Vadodara → Morbi": {
  sedan:4700,
  suv:5500
},

"Vadodara → Surendranagar": {
  sedan:4200,
  suv:5000
},

"Vadodara → Bhuj": {
  sedan:8500,
  suv:9500
},

"Vadodara → Gandhidham": {
  sedan:8200,
  suv:9200
},

"Vadodara → Palanpur": {
  sedan:4300,
  suv:5200
},

"Vadodara → Mehsana": {
  sedan:2800,
  suv:3400
},

"Vadodara → Patan": {
  sedan:3900,
  suv:4700
},

"Vadodara → Himmatnagar": {
  sedan:3000,
  suv:3600
},

"Vadodara → Modasa": {
  sedan:2900,
  suv:3500
},

"Vadodara → Vapi": {
  sedan:3400,
  suv:4100
},

"Vadodara → Navsari": {
  sedan:2500,
  suv:3100
},

"Vadodara → Valsad": {
  sedan:3000,
  suv:3600
},

"Vadodara → Saputara": {
  sedan:4500,
  suv:5300
},  

  });

}

