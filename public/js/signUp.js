function registerUser() {
  const username = document.getElementById("new-username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");

  if (password !== confirmPassword) {
    errorMessage.style.display = "block";
    return;
  }

  alert("Signup Successful!");
  window.location.href = "login.html"; // Redirect to login page
}
