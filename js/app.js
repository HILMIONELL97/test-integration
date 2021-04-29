let userName = document.getElementById('myName');
let password = document.getElementById('myPsw');
let form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces

    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        setErrorFor(password, 'le mot de passe doit comporter entre 4 et 6 caractères');
    } else {
        setSuccessFor(password);
    }


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}