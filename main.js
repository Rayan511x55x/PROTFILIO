
const body = document.getElementById("body1")

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Example: Check if username is "admin" and password is "password"
  if (username === 'rayan' && password === '3mk') {
    alert('تم تسجيل الدخول بنجاح  ');
    window.location.href = 'index.html';
  } else {
    alert('Login failed. Please check your username and password.');
  }
});
