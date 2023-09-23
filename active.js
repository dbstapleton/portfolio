document.addEventListener("DOMContentLoaded", function () {
    const navigationLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", function () {
        let currentSectionId = "";
        for (const section of document.querySelectorAll("main section")) {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.id;
                break;
            }
        }

        navigationLinks.forEach((link) => {
            link.classList.remove("active");
        });

        const activeLink = document.querySelector(`header nav a[href="#${currentSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    highlightNavLink();

    window.addEventListener("scroll", highlightNavLink);
});


