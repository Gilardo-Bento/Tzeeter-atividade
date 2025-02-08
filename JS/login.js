
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const emailIcon = document.getElementById('emailIcon');
const emailErrorIcon = document.getElementById('emailErrorIcon');
const passwordIcon = document.getElementById('passwordIcon');
const passwordErrorIcon = document.getElementById('passwordErrorIcon');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function updateButtonState() {
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordFilled = passwordInput.value.length > 0;

    if (isEmailValid && isPasswordFilled) {
        submitButton.classList.add('enabled');
    } else {
        submitButton.classList.remove('enabled');
    }
}

emailInput.addEventListener('input', () => {
    const isValid = validateEmail(emailInput.value);
    emailError.style.display = emailInput.value && !isValid ? 'block' : 'none';
    emailIcon.style.display = isValid ? 'block' : 'none';
    emailErrorIcon.style.display = isValid ? 'none' : 'block';
    emailInput.classList.toggle('valid', isValid);
    emailInput.classList.toggle('invalid', !isValid);
    updateButtonState();
});

passwordInput.addEventListener('input', () => {
    const isFilled = passwordInput.value.length > 0;
    passwordError.style.display = isFilled ? 'none' : 'block';
    passwordIcon.style.display = isFilled ? 'block' : 'none';
    passwordErrorIcon.style.display = isFilled ? 'none' : 'block';
    passwordInput.classList.toggle('valid', isFilled);
    passwordInput.classList.toggle('invalid', !isFilled);
    updateButtonState();
});

document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateEmail(emailInput.value) && passwordInput.value.length > 0) {
        alert('Formulário enviado com sucesso!');
    }
});
