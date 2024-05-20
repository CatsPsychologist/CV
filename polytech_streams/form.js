document.getElementById("loginForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!validateEmail(email)) {
        emailError.textContent = "Невірний формат пошти";
        event.preventDefault();
    }

    if (!validatePassword(password)) {
        passwordError.textContent = "Пароль повинен мати 6 символів";
        event.preventDefault();
    }
});

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {

    return password.length >= 6;
}