const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
    
    emailError.textContent = ''
    passwordError.textContent = ''

    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function addErrorClass(element) {
        element.classList.add('error');
    }
    
    function removeErrorClass(element) {
        element.classList.remove('error');
    }
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Por favor, insira um endereço de email válido.';
        addErrorClass(emailInput);
        return;
    } else {
        emailError.textContent = '';
        removeErrorClass(emailInput);
    }

    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        addErrorClass(passwordInput);
        return;
    } else {
        passwordError.textContent = '';
        removeErrorClass(passwordInput)
    }
});
