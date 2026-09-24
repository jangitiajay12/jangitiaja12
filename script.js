/* ==============================
   AJAY PORTFOLIO JAVASCRIPT
============================== */

console.log("Ajay Portfolio JavaScript is working!");

const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show-section");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

const navLinks = document.querySelectorAll("nav ul li a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        if (button.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project details will be added soon!");

        }

    });

});

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        "© " + currentYear + " Jangiti Ajay. All Rights Reserved.";

}
