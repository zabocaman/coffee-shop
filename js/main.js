document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        body.classList.add("theme-morning");
    } else if (hour >= 12 && hour < 18) {
        body.classList.add("theme-afternoon");
    } else {
        body.classList.add("theme-evening");
    }

    const form = document.querySelector(".coffee-form");
    const status = document.querySelector(".form-status");
    const button = document.querySelector(".btn-submit");

    if (form && status && button) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            button.classList.add("submitted");
            button.textContent = "Order sent ☕";

            const select = document.getElementById("coffee-style");
            const choice = select ? select.value : "";

            let message = "Your coffee journey is on the way.";
            if (choice === "beans") {
                message = "We’ll help you pick the perfect beans.";
            } else if (choice === "black") {
                message = "A bold black coffee is brewing for you.";
            } else if (choice === "mocha") {
                message = "A chocolatey mocha is warming up.";
            } else if (choice === "latte") {
                message = "A silky latte with art is being poured.";
            }

            status.textContent = message;
        });
    }

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
