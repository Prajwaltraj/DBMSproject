function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple validation check
  if (email === "admin@example.com" && password === "admin123") {
    alert("Login successful!");
    // redirect or load homepage
  } else {
    alert("Invalid email or password!");
  }

  return false;
}
