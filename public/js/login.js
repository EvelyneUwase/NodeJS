function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "password") {
    alert("Login Successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    errorMessage.style.display = "block";
  }
}
