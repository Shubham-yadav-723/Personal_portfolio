function toggleMenu(){
   const menu=document.querySelector(".menu-links");
   const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".auto-type", {
      strings: ["Software Developer", "Ethical Hacker"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
  });
  