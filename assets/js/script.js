/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Log a welcome message and change the color of the "About" link
    console.log("Welcome to my personal website!");
    document.addEventListener("DOMContentLoaded", () => {
      const galleryLink = document.querySelector('a[href="#about"]');
      if (galleryLink) {
        galleryLink.style.color = "crimson";
      }
    });
 