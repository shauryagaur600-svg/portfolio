// ===============================
// Shaurya Gaur Portfolio
// ===============================

// Fade sections in as you scroll
const sections = document.querySelectorAll("h2, h2 + p");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Small typing effect for the subtitle
const subtitle = document.querySelector("h1 + p");

if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = "";

    let index = 0;

    function typeText() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 35);
        }
    }

    typeText();
}


// Automatically update copyright year
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
