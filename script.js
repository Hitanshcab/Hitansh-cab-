/*=========================================
  HITANSH CAB SERVICE V8
  SCRIPT.JS - PART 1
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      LOADER
    ==============================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    });

    /*==============================
      MOBILE MENU
    ==============================*/

    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }

    /*==============================
      STICKY HEADER
    ==============================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*==============================
      SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*==============================
      ACTIVE MENU
    ==============================*/

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});
/*=========================================
  HITANSH CAB SERVICE V8
  SCRIPT.JS - PART 2
=========================================*/

/*==============================
  FARE DATA
==============================*/

const fareData = {
    Ahmedabad: { sedan: 1700, suv: 2399 },
    Surat: { sedan: 2200, suv: 2699 },
    Rajkot: { sedan: 3700, suv: 4399 },
    Jamnagar: { sedan: 6000, suv: 7000 },
    Dwarka: { sedan: 7500, suv: 8000 },
    Somnath: { sedan: 7500, suv: 8000 }
};

/*==============================
  FARE BUTTON
==============================*/

const fareBtn = document.getElementById("fareBtn");

if (fareBtn) {
    fareBtn.addEventListener("click", calculateFare);
}

/*==============================
  CALCULATE FARE
==============================*/

function calculateFare() {

    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const vehicle = document.getElementById("vehicle").value;
    const trip = document.getElementById("tripType").value;

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const date = document.getElementById("pickupDate").value;
    const time = document.getElementById("pickupTime").value;

    const result = document.getElementById("fareResult");

    if (!pickup || !drop) {
        result.innerHTML =
        "<h3>Please select Pickup & Drop location.</h3>";
        return;
    }

    if (!fareData[drop]) {
        result.innerHTML =
        "<h3>Fare not available for this route.</h3>";
        return;
    }

    let fare = fareData[drop][vehicle];

    if (trip === "Round Trip") {
        fare = fare * 2;
    }

    result.innerHTML = `
        <h2>Estimated Fare</h2>
        <h1>₹ ${fare}</h1>
        <p>${pickup} → ${drop}</p>
        <p>${trip}</p>
    `;

    sendWhatsApp(name, phone, pickup, drop, vehicle, trip, date, time, fare);
}

/*==============================
  WHATSAPP BOOKING
==============================*/

function sendWhatsApp(name, phone, pickup, drop, vehicle, trip, date, time, fare) {

    const message =
`🚖 *Hitansh Cab Service Booking*

👤 Name: ${name}

📱 Mobile: ${phone}

📍 Pickup: ${pickup}

📍 Drop: ${drop}

🚘 Vehicle: ${vehicle.toUpperCase()}

🔁 Trip: ${trip}

📅 Date: ${date}

🕒 Time: ${time}

💰 Estimated Fare: ₹${fare}

Please confirm my booking.`;

    const url =
"https://wa.me/916353886346?text=" +
encodeURIComponent(message);

    const result = document.getElementById("fareResult");

    result.innerHTML += `

<br><br>

<a href="${url}"
target="_blank"
class="booking-btn">

Book on WhatsApp

</a>

`;

}
/*=========================================
  HITANSH CAB SERVICE V8
  SCRIPT.JS - PART 3
=========================================*/

/*==============================
  GALLERY LIGHTBOX
==============================*/

const gallery = document.querySelectorAll(".gallery-grid img");

gallery.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close-lightbox">&times;</span>
                <img src="${img.src}" alt="">
            </div>
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", (e) => {

            if (
                e.target.classList.contains("lightbox") ||
                e.target.classList.contains("close-lightbox")
            ) {

                lightbox.remove();

            }

        });

    });

});

/*==============================
  SCROLL ANIMATION
==============================*/

const animatedItems = document.querySelectorAll(

".service-box,.fleet-card,.route-card,.review-card,.why-card,.contact-card"

);

function revealOnScroll() {

    const trigger = window.innerHeight - 100;

    animatedItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*==============================
  BACK TO TOP
==============================*/

const backButton = document.createElement("button");

backButton.className = "back-to-top";

backButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backButton.classList.add("show");

    } else {

        backButton.classList.remove("show");

    }

});

backButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==============================
  AUTO COPYRIGHT YEAR
==============================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*==============================
  IMAGE LAZY LOADING
==============================*/

document.querySelectorAll("img").forEach(image => {

    image.loading = "lazy";

});

/*==============================
  PAGE READY
==============================*/

console.log("✅ Hitansh Cab Service V8 Part 3 Loaded");
/*=========================================
  HITANSH CAB SERVICE V8
  SCRIPT.JS - PART 4
=========================================*/

/*==============================
  PHONE VALIDATION
==============================*/

const phoneField = document.getElementById("customerPhone");

if (phoneField) {

    phoneField.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value.length > 10) {

            this.value = this.value.substring(0, 10);

        }

    });

}

/*==============================
  BOOKING FORM VALIDATION
==============================*/

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        if (name.length < 3) {

            showToast("Please enter your full name.");

            return;

        }

        if (phone.length !== 10) {

            showToast("Please enter a valid 10 digit mobile number.");

            return;

        }

        calculateFare();

    });

}

/*==============================
  SUCCESS TOAST
==============================*/

function showToast(message) {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

/*==============================
  BUTTON CLICK EFFECT
==============================*/

document.querySelectorAll(
".btn,.booking-btn,.fare-btn,.fleet-btn"
).forEach(button => {

    button.addEventListener("click", function () {

        this.classList.add("clicked");

        setTimeout(() => {

            this.classList.remove("clicked");

        }, 200);

    });

});

/*==============================
  ERROR HANDLER
==============================*/

window.addEventListener("error", function (e) {

    console.error("Error:", e.message);

});

/*==============================
  PAGE PERFORMANCE
==============================*/

window.addEventListener("pageshow", () => {

    console.log("🚖 Hitansh Cab Service Ready");

});

/*==============================
  END OF PART 4
==============================*/
/*=========================================
  HITANSH CAB SERVICE V8
  SCRIPT.JS - PART 5 (FINAL)
=========================================*/

/*==============================
  SET TODAY AS MIN DATE
==============================*/

const pickupDateField = document.getElementById("pickupDate");

if (pickupDateField) {
    const today = new Date().toISOString().split("T")[0];
    pickupDateField.setAttribute("min", today);
}

/*==============================
  COPY PHONE NUMBER
==============================*/

document.querySelectorAll(".copy-number").forEach(btn => {

    btn.addEventListener("click", () => {

        navigator.clipboard.writeText("6353886346");

        showToast("Phone Number Copied");

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
  RESET FORM
==============================*/

const resetButton = document.getElementById("resetForm");

if (resetButton && bookingForm) {

    resetButton.addEventListener("click", () => {

        bookingForm.reset();

        const fareResult = document.getElementById("fareResult");

        if (fareResult) {

            fareResult.innerHTML = `
                <h3>Select Route & Click Check Fare</h3>
                <p>Your fare will appear here.</p>
            `;

        }

        showToast("Form Reset Successfully");

    });

}

/*==============================
  NETWORK STATUS
==============================*/

window.addEventListener("offline", () => {
    showToast("No Internet Connection");
});

window.addEventListener("online", () => {
    showToast("Internet Connected");
});

/*==============================
  PAGE READY
==============================*/

window.addEventListener("load", () => {

    console.log("================================");
    console.log(" HITANSH CAB SERVICE V8 READY ");
    console.log(" Version : V8 Professional");
    console.log(" WhatsApp : +91 63538 86346");
    console.log("================================");

});

/*==============================
  END OF FILE
==============================*/
