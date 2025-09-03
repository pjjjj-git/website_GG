document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'index.html';
        return;
    }
    
    // Display username if available
    const username = localStorage.getItem('username');
    if (username) {
        const userElement = document.getElementById('userDisplay');
        if (userElement) {
            userElement.textContent = `Welcome, ${username}`;
        }
    }
});

function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "index.html";
}