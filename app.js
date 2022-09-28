(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    let dark = document.getElementsByClassName("dark-mode");
    let light = document.getElementsByClassName("light");
    for (let i = 0; i < dark.length; i++) {
      if (dark[i].style.display == "inline-block")
        dark[i].style.display = "none";
      else dark[i].style.display = "inline-block";
    }
    for (let i = 0; i < light.length; i++) {
      if (light[i].style.display == "inline-block")
        light[i].style.display = "none";
      else light[i].style.display = "inline-block";
    }
  });
})();
