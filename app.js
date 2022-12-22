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

    if (dark[0].style.display == "inline-block")
      dark[0].style.display = "none";
    else dark[0].style.display = "inline-block";

    if (light[0].style.display == "inline-block")
      light[0].style.display = "none";
    else light[0].style.display = "inline-block";

    for (let i = 1; i < 3; i++) {
      if (dark[i].style.display == "inline")
        dark[i].style.display = "none";
      else dark[i].style.display = "inline";

      if (light[i].style.display == "inline")
        light[i].style.display = "none";
      else light[i].style.display = "inline";
    }

    for (let i = 3; i < dark.length; i++) {
      if (dark[i].style.display == "inline-block")
        dark[i].style.display = "none";
      else dark[i].style.display = "inline-block";
    }

    for (let i = 3; i < light.length; i++) {
      if (light[i].style.display == "inline-block")
        light[i].style.display = "none";
      else light[i].style.display = "inline-block";
    }

  });

  let ageText = document.getElementsByClassName("age");
  let d1 = Date.now();
  let d2 = new Date(2000,2,24).getTime();
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff =  date2.getFullYear() - date1.getFullYear();
  for (let i = 0; i < ageText.length; i++) {
    ageText[i].innerHTML = -1 * yearsDiff;
  }
})();
