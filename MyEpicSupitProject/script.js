

if (localStorage.getItem('jwt')) {
    // If the user is logged in, hide the Login and Register buttons
    document.getElementById('loginLink').style.display = 'none';
    document.getElementById('registerLink').style.display = 'none';

}

// Logout function
document.getElementById('logout-link').addEventListener('click', function() {
    // Remove the JWT token and show login and register buttons
    localStorage.removeItem('jwt');
    document.getElementById('login-link').style.display = 'block';
    document.getElementById('register-link').style.display = 'block';
});

