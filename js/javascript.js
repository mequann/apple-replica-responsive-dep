const elements = document.querySelectorAll(".footer-links-wrapper h3");

elements.forEach((element) => {
  const elements1 = element.nextElementSibling;

  element.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      if (elements1.style.display === "block") {
        elements1.style.display = "none";
      } else {
        elements1.style.display = "block";
      }
    }
  });
});
