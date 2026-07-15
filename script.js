/*==================================================
  HITANSH CAB SERVICE V15 ULTIMATE
  SCRIPT.JS FINAL - PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      LOADER
    ==============================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (loader) {

            setTimeout(() => {

                loader.style.opacity = "0";
                loader.style.visibility = "hidden";

                setTimeout(() => {

                    loader.remove();

                }, 500);

            }, 400);

        }

    });

    /*==============================
      MOBILE MENU
    ==============================*/

    const menuBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    }

    /*==============================
      STICKY HEADER
    ==============================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*==============================
      SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }

        });

    });

    /*==============================
      ACTIVE NAVIGATION
    ==============================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            if (window.scrollY >= top) {

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

});
/*==================================================
  FARE CALCULATOR + WHATSAPP BOOKING
==================================================*/

const fareData = {
  Ahmedabad: { sedan: 1700, suv: 2399 },
  Surat: { sedan: 2200, suv: 2699 },
  Rajkot: { sedan: 3700, suv: 4399 },
  Jamnagar: { sedan: 6000, suv: 7000 },
  Dwarka: { sedan: 7500, suv: 8000 },
  Somnath: { sedan: 7500, suv: 8000 }
};

const fareBtn = document.getElementById("fareBtn");

if (fareBtn) {

    fareBtn.addEventListener("click", calculateFare);

}

function calculateFare() {

    const pickup =
    document.getElementById("pickup").value;

    const drop =
    document.getElementById("drop").value;

    const vehicle =
    document.getElementById("vehicle").value;

    const tripType =
    document.getElementById("tripType").value;

    const name =
    document.getElementById("customerName").value.trim();

    const phone =
    document.getElementById("customerPhone").value.trim();

    const pickupDate =
    document.getElementById("pickupDate").value;

    const pickupTime =
    document.getElementById("pickupTime").value;

    const result =
    document.getElementById("fareResult");

    if (!pickup || !drop) {

        result.innerHTML =
        "<p>Please select Pickup and Drop.</p>";

        return;

    }

    if (pickup === drop) {

        result.innerHTML =
        "<p>Pickup and Drop cannot be the same.</p>";

        return;

    }

    if (!fareData[drop]) {

        result.innerHTML =
        "<p>Fare not available.</p>";

        return;

    }

    let fare = fareData[drop][vehicle];

    if (tripType === "Round Trip") {

        fare = fare * 2;

    }

    const message =
`🚖 HITANSH CAB SERVICE

Name: ${name}

Mobile: ${phone}

Trip: ${tripType}

Pickup: ${pickup}

Drop: ${drop}

Vehicle: ${vehicle.toUpperCase()}

Pickup Date: ${pickupDate}

Pickup Time: ${pickupTime}

Estimated Fare: ₹${fare}

Please confirm my booking.`;

    result.innerHTML = `

<h2>₹ ${fare}</h2>

<p>${tripType}</p>

<p>${pickup} ➜ ${drop}</p>

<a
class="booking-btn"
target="_blank"
href="https://wa.me/916353886346?text=${encodeURIComponent(message)}">

Book on WhatsApp

</a>

`;

}
/*==================================================
  HITANSH CAB SERVICE V15 ULTIMATE
  SCRIPT.JS FINAL - PART 3
==================================================*/

/*==============================
  GALLERY LIGHTBOX
==============================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.className = "lightbox";

        overlay.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${image.src}" alt="">
            </div>
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", function(e){

            if(
                e.target.classList.contains("lightbox") ||
                e.target.classList.contains("lightbox-close")
            ){
                overlay.remove();
            }

        });

    });

});

/*==============================
  SCROLL REVEAL
==============================*/

const revealItems = document.querySelectorAll(

".fleet-card,.route-card,.review-card,.contact-card,.why-card,.gallery-grid img,.faq-box"

);

function revealElements(){

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

/*==============================
  COUNTER
==============================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target/100;

    function update(){

        count += speed;

        if(count < target){

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;

        }

    }

    update();

});

/*==============================
  BACK TO TOP
==============================*/

const topButton = document.createElement("button");

topButton.className = "backToTop";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==============================
  AUTO YEAR
==============================*/

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/*==============================
  PAGE READY
==============================*/

console.log("✅ Hitansh Cab Service V15 Loaded Successfully");
/*==================================================
  HITANSH CAB SERVICE V15 ULTIMATE
  SCRIPT.JS FINAL - PART 4
==================================================*/

/*==============================
  IMAGE LAZY LOADING
==============================*/

document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
});

/*==============================
  BUTTON CLICK EFFECT
==============================*/

document.querySelectorAll(
".btn,.booking-btn,.fleet-btn,.fare-btn,.offer-btn"
).forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.add("clicked");

        setTimeout(() => {

            button.classList.remove("clicked");

        }, 250);

    });

});

/*==============================
  PHONE NUMBER VALIDATION
==============================*/

const phoneInput = document.getElementById("customerPhone");

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/g, "");

        if (this.value.length > 10) {

            this.value = this.value.slice(0, 10);

        }

    });

}

/*==============================
  DISABLE MULTIPLE CLICKS
==============================*/

const bookingButtons = document.querySelectorAll(".booking-btn");

bookingButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.pointerEvents = "none";

        btn.innerHTML = "Opening WhatsApp...";

        setTimeout(() => {

            btn.style.pointerEvents = "auto";

            btn.innerHTML = "Book on WhatsApp";

        }, 3000);

    });

});

/*==============================
  PREVENT EMPTY LINKS
==============================*/

document.querySelectorAll("a[href='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

    });

});

/*==============================
  SIMPLE ERROR HANDLER
==============================*/

window.addEventListener("error", function(e){

    console.error("JavaScript Error:", e.message);

});

/*==============================
  PERFORMANCE
==============================*/

window.addEventListener("pageshow", () => {

    console.log("Hitansh Cab Service Ready");

});

/*==============================
  END OF PART 4
==============================*/
/*==================================================
  HITANSH CAB SERVICE V15 ULTIMATE
  SCRIPT.JS FINAL - PART 5
==================================================*/

/*==============================
  BOOKING FORM VALIDATION
==============================*/

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        calculateFare();

    });

}

/*==============================
  SUCCESS MESSAGE
==============================*/

function showSuccess(message) {

    const toast = document.createElement("div");

    toast.className = "success-toast";

    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}

/*==============================
  COPY PHONE NUMBER
==============================*/

document.querySelectorAll(".copy-number").forEach(btn => {

    btn.addEventListener("click", () => {

        navigator.clipboard.writeText("6353886346");

        showSuccess("Phone Number Copied");

    });

});

/*==============================
  CALL BUTTON
==============================*/

document.querySelectorAll(".call-now").forEach(btn => {

    btn.addEventListener("click", () => {

        window.location.href = "tel:+916353886346";

    });

});

/*==============================
  WHATSAPP BUTTON
==============================*/

document.querySelectorAll(".whatsapp-now").forEach(btn => {

    btn.addEventListener("click", () => {

        window.open(
            "https://wa.me/916353886346",
            "_blank"
        );

    });

});

/*==============================
  CURRENT DATE
==============================*/

const pickupDate = document.getElementById("pickupDate");

if (pickupDate) {

    const today = new Date();

    pickupDate.min = today.toISOString().split("T")[0];

}

/*==============================
  PAGE FINISHED
==============================*/

console.log("🚖 Hitansh Cab Service V15 Ultimate Loaded Successfully");

showSuccess("Welcome to Hitansh Cab Service");
