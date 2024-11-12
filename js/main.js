'use strict';

// Navbar toggle functionality using pure JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const navOpenBtn = document.querySelector('[data-nav-open-btn]');
    const navCloseBtn = document.querySelector('[data-nav-close-btn]');
    const navbar = document.querySelector('[data-navbar]');
    const overlay = document.querySelector('[data-overlay]');
  
    // Open the navbar
    navOpenBtn.addEventListener('click', () => {
      navbar.classList.add('active');
      overlay.classList.add('active');
    });
  
    // Close the navbar
    navCloseBtn.addEventListener('click', () => {
      navbar.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    // Close navbar when clicking the overlay
    overlay.addEventListener('click', () => {
      navbar.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
  

// jQuery for navbar styling, scroll effects, and other interactions
$(document).ready(function () {
  // Navbar open and close toggle
  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // Navbar styling and sticky header effect on scroll
  $(window).on('load scroll', function () {
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if ($(window).scrollTop() > 35) {
      $('.header').css({ 'background': '#002e5f', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
    } else {
      $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Accordion functionality
  $('.accordion-header').click(function () {
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 120;
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Clients and testimonials carousel using Owl Carousel
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
  });

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }
  });
});
let navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
  e.addEventListener("click", () => {
    navbarToggler.classList.remove("active");
    navbarCollapse.classList.remove("show");
  })
);
navbarToggler.addEventListener("click", function () {
  navbarToggler.classList.toggle("active");
  navbarCollapse.classList.toggle("show");
});

// ===== submenu
const submenuButton = document.querySelectorAll(".nav-item-has-children");
submenuButton.forEach((elem) => {
  elem.querySelector("a").addEventListener("click", () => {
    elem.querySelector(".ud-submenu").classList.toggle("show");
  });
});

// ===== wow js
new WOW().init();

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

// Scroll to top functionality
document.querySelector(".back-to-top").onclick = () => {
  scrollTo(document.documentElement);
};
