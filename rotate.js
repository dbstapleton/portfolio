
  const textRotation = ["Bachelor in Computer Science", "Associates in Science & Business", "Associates in General Studies"];
  let index = 0;

  
  function updateText() {
    document.getElementById("rotating-text").textContent = textRotation[index];
    index = (index + 1) % textRotation.length; 
  }

  
  updateText();

  // Set an interval to update the text at a specific time interval (e.g., every 1 second)
  const rotationInterval = setInterval(updateText, 2000); // Change the time interval as needed (in milliseconds)

  
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
