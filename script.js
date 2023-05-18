const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");

  logo.addEventListener("mouseenter", function () {
    const timestamp = new Date().getTime();
    logo.style.backgroundImage = `url(images/RatLogo.gif?${timestamp})`;
  });

  logo.addEventListener("mouseleave", function () {
    logo.style.backgroundImage = "url(images/RatLogo.png)";
  });
const pixelflower = document.getElementById('pixelflower');
const circlePopup = document.getElementById('circle-popup');

// Show the circle popup on mouseover pixelflower
pixelflower.addEventListener('mouseover', () => {
  circlePopup.style.animation = 'grow 2s 1';
  circlePopup.style.display = 'block';
});

// Hide the circle popup on mouseout pixelflower
pixelflower.addEventListener('mouseout', () => {
  circlePopup.style.animation = 'grow 1s reverse';
  circlePopup.style.display = 'none';
});

// Move the image within the circle on mousemove
pixelflower.addEventListener('mousemove', (event) => {
  // Calculate the mouse position relative to the pixelflower element
  const mouseX = event.clientX - pixelflower.offsetLeft;
  const mouseY = event.clientY - pixelflower.offsetTop;

  // Calculate the parallax movement for the background image
  const parallaxX = mouseX * 0.1 - 100; // Adjust the parallax speed as needed
  const parallaxY = mouseY * 0.1 - 100; // Adjust the parallax speed as needed

  // Apply the parallax movement to the background image
  circlePopup.style.backgroundPositionX = `${parallaxX}px`;
  circlePopup.style.backgroundPositionY = `${parallaxY}px`;
  
});

});

