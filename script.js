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
    logo.style.backgroundImage = `url(styles/RatLogo.gif?${timestamp})`;
    // Force a reflow to restart the animation
    void logo.offsetWidth;
  });

  logo.addEventListener("mouseleave", function () {
    logo.style.backgroundImage = "url(styles/RatLogo.png)";
  });
});

  
