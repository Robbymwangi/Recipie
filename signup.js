document.getElementById('signup-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirm-email').value;

    if (email !== confirmEmail) {
        alert('Email addresses do not match');
        event.preventDefault();
    }
});

var errorMessage = document.createElement('span');
errorMessage.className = 'error-message';
errorMessage.textContent = 'This field is required';
document.getElementById('signup-form').appendChild(errorMessage);