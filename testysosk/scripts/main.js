const toggleColorMode = e => {
    if (e.currentTarget.classList.contains("light--hidden")) {
        document.documentElement.setAttribute("color-mode", "light");

        localStorage.setItem("color-mode", "light");
        return;
    }

    document.documentElement.setAttribute("color-mode", "dark");
    localStorage.setItem("color-mode", "dark")
};

const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

toggleColorButtons.forEach(btn => {
    btn.addEventListener("click", toggleColorMode)
});

if (
    localStorage.getItem('color-mode') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localStorage.getItem('color-mode'))
) {
        document.documentElement.setAttribute('color-mode', 'dark')
}

function openNav(x) {
    document.getElementById("links").classList.toggle("navt");
    x.classList.toggle("change");
  }