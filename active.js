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

<script>
  const textRotation = ["Bachelor in Computer Science", "Associates in Science & Business", "Associates in General Studies"];
  let index = 0;

  
  function updateText() {
    document.getElementById("rotating-text").textContent = textRotation[index];
    index = (index + 1) % textRotation.length; 
  }

  
  updateText();

  // Set an interval to update the text at a specific time interval (e.g., every 1 second)
  const rotationInterval = setInterval(updateText, 1000); // Change the time interval as needed (in milliseconds)

  
  const maxCycles = 5; 
  let cycles = 0;

  function stopRotation() {
    clearInterval(rotationInterval);
    if (cycles < maxCycles) {
      cycles++;
      rotationInterval = setInterval(updateText, 1000);
    } else {
      document.getElementById("rotating-text").textContent = "Rotation complete!";
    }
  }

  
  setTimeout(stopRotation, 5000); // Stop the rotation after 5 seconds (adjust the delay as needed)
</script>

