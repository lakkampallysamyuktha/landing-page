// ===== PAGE LOAD =====
window.addEventListener("load", function () {

  // ===== HERO TEXT =====
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
        span.style.transition = "all 0.6s ease";
        span.style.opacity = 1;
        span.style.transform = "translateY(0)";
        span.style.filter = "blur(0)";
      }, i * 200);
    });
  }

  // ===== LOADER HIDE (NO DELAY) =====
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hide");
  }
});
// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right, .zoom-in"
).forEach(el => {
  observer.observe(el);
});


// ===== LOGO CLICK LOADER =====
const logo = document.getElementById("logo-link");

if (logo) {
  logo.addEventListener("click", function (e) {
    e.preventDefault();

    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.remove("hide"); // show loader
    }

    // ⏱️ 2 seconds delay
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });
}

// ===== MOBILE MENU TOGGLE =====
// ===== MOBILE MENU TOGGLE =====
window.addEventListener("load", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }
});

