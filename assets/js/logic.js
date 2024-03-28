// this will include the theme switch from light to dark between two html pages
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkmode-toggle");
    const container = document.querySelector(".container");
    const formLabels = document.querySelectorAll("label");
    const formInputs = document.querySelectorAll("input[type=text], textarea");

    darkModeToggle.addEventListener("change", function() {
        if (this.checked) {
            container.classList.remove("light");
            container.classList.add("dark");
            formLabels.forEach(label => label.style.color = "white");
            formInputs.forEach(input => input.style.color = "white");
        } else {
            container.classList.remove("dark");
            container.classList.add("light");
            formLabels.forEach(label => label.style.color = "");
            formInputs.forEach(input => input.style.color = ""); 
        }
    });
});