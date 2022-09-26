(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        let dark = document.getElementsByClassName("dark-mode");
        let light = document.getElementsByClassName("light-mode");
        for (el of dark) {
            if (el.style.display == "block") el.style.display = "none";
            else el.style.display = "block";
        };
        for (el of light) {
            if (el.style.display == "block") el.style.display = "none";
            else el.style.display = "block";
        };
    })
})();