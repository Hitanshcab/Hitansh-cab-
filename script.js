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

// ===== WhatsApp Booking =====

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelectorAll("input")[0].value;

const phone=this.querySelectorAll("input")[1].value;

const pickup=this.querySelectorAll("input")[2].value;

const drop=this.querySelectorAll("input")[3].value;

const date=this.querySelectorAll("input")[4].value;

const time=this.querySelectorAll("input")[5].value;

const car=this.querySelector("select").value;

const message=

`*New Cab Booking*%0A%0A
Name : ${name}%0A
Phone : ${phone}%0A
Pickup : ${pickup}%0A
Drop : ${drop}%0A
Date : ${date}%0A
Time : ${time}%0A
Car : ${car}`;

window.open(
"https://wa.me/916353886346?text="+message,
"_blank"
);

});

}

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
