
const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');

username.addEventListener('input', (e) => {
    setSuccess(username)
})

username.addEventListener('focusout', (e) => {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        setError(username, 'Please enter your Username !')
    }
})

password.addEventListener('input', (e) => {
    setSuccess(password)
})

password.addEventListener('focusout', (e) => {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setError(password, 'Please enter your Password !')
    }
})

form.addEventListener('submit', (e) => {

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        e.preventDefault();
        setError(username, 'Please enter your Username !');
    } else { setSuccess(username) }

    if (passwordValue === '') {
        e.preventDefault();
        setError(password, 'Please enter your Password !');
    } else { setSuccess(password) }

});

function setError(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.login-message');

    errorMessage.innerText = message;
    formControl.className = 'login-form-input login-error';
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'login-form-input login-success';
}






