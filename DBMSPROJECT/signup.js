function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (name && email && password) {
    alert(`Welcome, ${name}! Signup successful.`);
    // Save data or redirect
  } else {
    alert("Please fill all fields correctly.");
  }

  return false;
}
