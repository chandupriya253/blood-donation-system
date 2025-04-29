document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple condition: if admin, go to admin page
    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Welcome Admin!');
      window.location.href = 'admin.html';
    } else {
      // For normal users
      alert('Login Successful!');
      window.location.href = 'index.html';
    }
  });
  