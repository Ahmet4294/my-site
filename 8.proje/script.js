const as = document.querySelectorAll(".navbar a");

as.forEach((a) => {
  a.onclick = () => {
    as.forEach((a) => {
      a.classList.remove("active");
    });

    a.classList.add("active");
  };
});

const icon = document.getElementById("icon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    icon.style.display = "block";
  }
  else {
    icon.style.display = "none";
  }
});

icon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
