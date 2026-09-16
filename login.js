function checkLogin(user, pass) {
  return user === "admin" && pass === "123";
}

// Hỗ trợ chạy trên trình duyệt
if (typeof window !== "undefined") {
  window.checkLogin = checkLogin;
}

// Hỗ trợ Jest / Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = checkLogin;
}
