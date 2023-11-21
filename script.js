// Array to store valid entries
var validEntries = [];

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = new Date(document.getElementById('dob').value);
    var acceptTerms = document.getElementById('acceptTerms').checked;

    var validationMessage = document.getElementById('validationMessage');
    var registrationContainer = document.getElementById('registrationContainer');
    var entriesContainer = document.getElementById('entries');

    if (name === '' || email === '' || password === '' || !dob || !acceptTerms) {
        validationMessage.innerHTML = 'Please fill in all fields and accept terms and conditions.';
        validationMessage.style.display = 'block';
        return false;
    }

    var age = calculateAge(dob);

    if (age < 18 || age > 55) {
        validationMessage.innerHTML = 'You are not eligible. Age must be between 18 and 55.';
        validationMessage.style.display = 'block';
        return false;
    }

    // If all validations pass,
