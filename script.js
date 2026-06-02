const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash) {
            e.preventDefault();

            const target = document.querySelector(this.hash);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        }
    });
});

document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
            card.style.transform = "";
        }, 150);
    });
});

document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        const name = card.querySelector("h5")?.innerText;
        const price = card.querySelector("p")?.innerText;

        if (name && price) {
            alert(name + " - " + price);
        }
    });
});