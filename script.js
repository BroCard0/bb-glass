const dialog = document.getElementById("broken-window-dialog");
const closeBtn = document.getElementById("close-dialog");
const openBtn = document.getElementById("open-dialog");
const ctaBtn = document.querySelector(".broken-window-dialog-cta-btn");

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

ctaBtn.addEventListener("click", () => {
  dialog.close();
});

const callButton = document.querySelector(".call-button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    callButton.classList.add("scrolled");
  } else {
    callButton.classList.remove("scrolled");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
