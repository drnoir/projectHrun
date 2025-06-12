document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const sections = document.querySelectorAll(".section");
    const sectionContents = document.querySelectorAll(".section__content");

    const appearOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin around the root
        threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Section is intersecting:", entry.target);
                entry.target.classList.add("appear"); // Add the "appear" class
            } else {
                entry.target.classList.remove("appear"); // Remove the "appear" class
            }
        });
    }, appearOptions);

    // Observe each section content
    sectionContents.forEach((content) => {
        appearOnScroll.observe(content);
    });

    // Navbar scroll logic
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    });
});
