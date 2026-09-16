function login(user, pass) {
    if (user === "admin" && pass === "123") {
        return true;
    }

    return false;
}

if (typeof document !== "undefined") {
    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (login(user, pass)) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai username hoặc password!";
        }
    });
}

if (typeof module !== "undefined") {
    module.exports = login;
}
