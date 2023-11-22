document.addEventListener("DOMContentLoaded", function () {
    // Get the header element
    var header = document.querySelector("header");

    // Add a click event listener to the header
    header.addEventListener("click", function () {
        // Toggle a class to change the background color
        header.classList.toggle("clicked");
    });
});
