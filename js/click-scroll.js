// Function to handle smooth scrolling to the target section
function smoothScrollTo("#home", "#about", "services", "contact") {
    const targetElement = document.querySelector("#home", "#about", "services", "contact");
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
}

// Add event listeners to the navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = link.getAttribute("href");
            smoothScrollTo("#home", "#about", "services", "contact");
        });
    });
});
In this JavaScript code, we first defi