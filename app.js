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
        document.getElementsByClassName("dark-mode").forEach( () => {
            if (this.style.display == "block") this.style.display = "none";
            else this.style.display = "block";
        });
        document.getElementsByClassName("light-mode").forEach( () => {
            if (this.style.display == "block") this.style.display = "none";
            else this.style.display = "block";
        });
    })
})();