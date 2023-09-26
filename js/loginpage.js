const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const Buttonnextpage = document.getElementById("login-form-submit-nextpage");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "kavana" && password === "kavana@123") {
        alert("You have successfully logged in.");
        window.location="homepage.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


Buttonnextpage.addEventListener("click", (e) =>{
    e.preventDefault();
    window.location="detailspage.html";
})


