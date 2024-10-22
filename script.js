document.addEventListener("DOMContentLoaded", function() {
    // Add a click effect on project images
    const projectImages = document.querySelectorAll(".project img");

    projectImages.forEach(image => {
        image.addEventListener("click", function() {
            alert("You clicked on " + this.alt);
        });
    });
});
$(document).ready(function(){
    // Smooth scroll for navigation links
    $("nav ul li a").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });
});
