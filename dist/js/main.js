// Add backgroud to navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("#main-nav");
  if (window.scrollY > 2) {
    nav.className = "navbar";
  } else {
    nav.classList.remove("navbar");
  }
});

// Smooth Scrolling
$("#main-nav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 80,
    });
  }
});

// Burger
$(document).ready(function () {
  $(".nav-burger").click(function (event) {
    $(".nav-burger, .nav-links").toggleClass("nav-active");
    $("body").toggleClass("lock");
  });
});

// Remove burger
$(".nav-links ul li").click(function (event) {
  $(".nav-burger,.nav-links").removeClass("nav-active");
  $("body").removeClass("lock");
});

// Active Nav Link
$("ul li a").click(function () {
  $("li a").removeClass("active");
  $(this).addClass("active");
});
