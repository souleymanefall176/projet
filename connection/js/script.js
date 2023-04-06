/*typing animation */
var typed = new Typed(".typing", {
    strings: ["", "To Our New Website..."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
})
const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})