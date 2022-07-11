const switchBtn=document.querySelector('.switch');
switchBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})

// for nav bar color Change
var nav = document.querySelector("nav"); // Identify target

window.addEventListener("scroll", function (event) {
  // To listen for event
  event.preventDefault();

  if (window.scrollY <= 100) {
    // Just an example
    nav.style.backgroundColor = "transparent"; // or default color
  } else {
    // nav.style.backgroundColor = "#ffcad4";
    nav.classList.toggle("scrolled");
    nav.style.padding = "20px";
  }
});