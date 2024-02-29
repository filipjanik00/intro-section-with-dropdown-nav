const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdownMobiles = document.querySelectorAll(".dropdown-mobile");
const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
const dropdownBtnsDesktop = document.querySelectorAll(".dropdown-btn-desktop");
const dropdownTriggersDesktop = document.querySelectorAll(
  ".dropdown-trigger-desktop"
);
const dropdownDesktops = document.querySelectorAll(".dropdown-desktop");

function showMobileMenu() {
  mobileNav.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeMobileMenu() {
  mobileNav.classList.add("hidden");
  overlay.classList.add("hidden");
}

function toggleDropdownMobile(index) {
  dropdownMobiles[index].classList.toggle("hidden");
  dropdownBtns[index].classList.toggle("rotate180deg");
}

function toggleDropdownDesktop(index) {
  dropdownDesktops[index].classList.toggle("hidden");
  dropdownBtnsDesktop[index].classList.toggle("rotate180deg");
}

// Event listeners
menuBtn.addEventListener("click", showMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);

dropdownBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleDropdownMobile(index);
  });
});

dropdownTriggers.forEach((trigger, index) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDropdownMobile(index);
  });
});

dropdownBtnsDesktop.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleDropdownDesktop(index);
  });
});

dropdownTriggersDesktop.forEach((trigger, index) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDropdownDesktop(index);
  });
});
