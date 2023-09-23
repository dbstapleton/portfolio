
  const textRotation = ["Bachelor in Computer Science", "Associates in Science & Business", "Associates in General Studies"];
  let index = 0;

  
 function updateText() {
    const rotatingText = document.getElementById("rotating-text");

    rotatingText.style.opacity = 0;

    setTimeout(() => {
        rotatingText.textContent = textRotation[index];
        rotatingText.style.opacity = 1;
        index = (index + 1) % textRotation.length;
    }, 500); 
}

updateText();

const rotationInterval = setInterval(updateText, 1500);

const maxCycles = 5;
let cycles = 0;

function stopRotation() {
    clearInterval(rotationInterval);
    if (cycles < maxCycles) {
        cycles++;
        rotationInterval = setInterval(updateText, 1500);
    } else {
        document.getElementById("rotating-text").textContent = "Rotation complete!";
    }
}


setTimeout(stopRotation, 5000);
