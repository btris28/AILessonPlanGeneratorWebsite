function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const button = document.querySelector("button");

const clear = () => {
    setTimeout(() => {
        button.classList.remove("effect2");
    }, 1000);
}

button.addEventListener("click", () => {
    button.classList.add("effect1");
    setTimeout(() => {
        button.classList.remove("effect1");
        button.classList.add("effect2");
        clear();
    }, 2000);
});

