const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const img=document.querySelector(".profile-img");

navToggle.addEventListener("click", function () {  
  links.classList.toggle("show-links");
  img.classList.toggle("active");

});

