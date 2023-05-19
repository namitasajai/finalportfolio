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

  const flowerContainers = document.querySelectorAll(".flower-container");

  // Loop through each flower container
  flowerContainers.forEach((container) => {
    const flower = container.querySelector(".flower");
    const popup = container.querySelector(".popup");
    const posX = popup.getAttribute("data-background-posX");
    const posY = popup.getAttribute("data-background-posY");

    flower.addEventListener("mouseover", () => {
      popup.style.animation = "grow 2s 1";
      popup.style.display = "block";
    });

    flower.addEventListener("mouseout", () => {
      popup.style.animation = "grow 1s reverse";
      popup.style.display = "none";
    });

    flower.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX - flower.offsetLeft;
      const mouseY = event.clientY - flower.offsetTop;

      const parallaxX = mouseX * 0.1 - 100;
      const parallaxY = mouseY * 0.1 - 100;

      const backgroundPositionX = parseFloat(posX) + parallaxX;
      const backgroundPositionY = parseFloat(posY) + parallaxY;

      popup.style.backgroundPositionX = `${backgroundPositionX}px`;
      popup.style.backgroundPositionY = `${backgroundPositionY}px`;
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
