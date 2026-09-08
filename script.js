// ===============================
// Shaurya Gaur Portfolio
// script.js
// ===============================


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    `
    section h2,
    .section-content,
    .experience-card,
    .project-card,
    .skill-category,
    .education-card,
    .interest-list,
    .contact-links
    `
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("hidden");
    revealObserver.observe(element);
});


// ===============================
// HERO ENTRANCE ANIMATION
// ===============================

const heroElements = document.querySelectorAll(
    `
    .intro-text,
    .hero h1,
    .hero h2,
    .hero-description,
    .hero-buttons
    `
);

heroElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(22px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    }, 150 + index * 130);
});


// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 160 &&
            window.scrollY < sectionTop + sectionHeight - 160
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const header = document.querySelector("header");

function updateHeader() {
    if (!header) return;

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);


// ===============================
// PROJECT CARD MOUSE EFFECT
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const rotateX =
            ((mouseY - rect.height / 2) / rect.height) * -2;

        const rotateY =
            ((mouseX - rect.width / 2) / rect.width) * 2;

        card.style.transform =
            `perspective(900px)
             translateY(-5px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(900px) translateY(0) rotateX(0) rotateY(0)";
    });
});


// ===============================
// SKILL TAG EFFECT
// ===============================

const skillTags = document.querySelectorAll(
    ".skill-list span, .interest-list span"
);

skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
        tag.style.transform = "translateY(-3px)";
    });

    tag.addEventListener("mouseleave", () => {
        tag.style.transform = "translateY(0)";
    });
});


// ===============================
// EXTERNAL LINKS
// ===============================

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    if (!link.hasAttribute("rel")) {
        link.setAttribute("rel", "noopener noreferrer");
    }
});


// ===============================
// PAGE LOAD
// ===============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
