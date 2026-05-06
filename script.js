// =========================================
// PAGE LOAD
// =========================================

window.addEventListener("load", function () {

  // HERO TEXT ANIMATION

  const text = document.getElementById("hero-text");

  if (text) {

    const words = text.innerText.split(" ");

    text.innerHTML = "";

    words.forEach((word, i) => {

      const span = document.createElement("span");

      span.textContent = word + " ";

      span.style.opacity = 0;

      span.style.transform = "translateY(40px)";

      span.style.filter = "blur(8px)";

      span.style.display = "inline-block";

      text.appendChild(span);

      setTimeout(() => {

        span.style.transition = "all 0.7s ease";

        span.style.opacity = 1;

        span.style.transform = "translateY(0)";

        span.style.filter = "blur(0)";

      }, i * 120);

    });

  }

  // LOADER HIDE

  const loader = document.getElementById("loader");

  if (loader) {

    setTimeout(() => {

      loader.classList.add("hide");

    }, 500);

  }

});

// =========================================
// SCROLL ANIMATION
// =========================================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right, .zoom-in"
).forEach(el => {

  observer.observe(el);

});

// =========================================
// LOGO CLICK LOADER
// =========================================

const logo = document.getElementById("logo-link");

if (logo) {

  logo.addEventListener("click", function (e) {

    e.preventDefault();

    const loader = document.getElementById("loader");

    if (loader) {

      loader.classList.remove("hide");

    }

    setTimeout(() => {

      window.location.href = "index.html";

    }, 800);

  });

}

// =========================================
// MOBILE MENU
// =========================================

const toggle = document.getElementById("menu-toggle");

const nav = document.getElementById("nav-links");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    // ICON CHANGE

    if (nav.classList.contains("active")) {

      toggle.innerHTML =
      '<i class="fa-solid fa-xmark"></i>';

    } else {

      toggle.innerHTML =
      '<i class="fa-solid fa-bars"></i>';

    }

  });

}

// =========================================
// FAQ ACCORDION
// =========================================

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((box) => {

  const question = box.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqBoxes.forEach((item) => {

      if (item !== box) {

        item.classList.remove("active");

      }

    });

    box.classList.toggle("active");

  });

});

// =========================================
// COUNTER ANIMATION
// =========================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const counter = entry.target;

      const target =
      +counter.getAttribute("data-target");

      let count = 0;

      const speed = target / 120;

      const updateCount = () => {

        count += speed;

        if (count < target) {

          counter.innerText =
          Math.ceil(count);

          requestAnimationFrame(updateCount);

        } else {

          // FINAL VALUE

          if (target === 98) {

            counter.innerText =
            target + "%";

          } else {

            counter.innerText =
            target + "+";

          }

        }

      };

      updateCount();

      counterObserver.unobserve(counter);

    }

  });

}, {
  threshold: 0.5
});

counters.forEach(counter => {

  counterObserver.observe(counter);

});

// =========================================
// PARALLAX HERO EFFECT
// =========================================

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");

  if (hero) {

    hero.style.backgroundPositionY =
    window.scrollY * 0.4 + "px";

  }

});

// =========================================
// NAVBAR SHADOW ON SCROLL
// =========================================

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 40) {

    navbar.style.boxShadow =
    "0 10px 35px rgba(0,0,0,0.08)";

  } else {

    navbar.style.boxShadow =
    "0 2px 15px rgba(0,0,0,0.05)";

  }

});

// =========================================
// SCROLL TO TOP BUTTON
// =========================================

const scrollTopBtn =
document.getElementById("scrollTopBtn");

// SHOW BUTTON

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    scrollTopBtn.classList.add("show");

  }else{

    scrollTopBtn.classList.remove("show");

  }

});

// CLICK SCROLL

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

});

