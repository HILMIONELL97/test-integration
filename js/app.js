let userName = document.getElementById('myName');
let password = document.getElementById('myPsw');
let confirmPassword = document.getElementById('myConfirmPsw')
let email = document.getElementById('myEmail')
let form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValue = password.value.trim();
    const confirmPswValue = confirmPassword.value.trim();


    if (emailValue !== validEmail) {
        setErrorFor(email, 'Veuillez saisir une adresse e-mail valide')
        return
    } else {
        setSuccessFor(email)
    }
    if (passwordValue.length <= 6) {

        setErrorFor(password, 'Le mot de passe doit comporter entre 4 et 6 caractères');
        return
    } else {
        setSuccessFor(password);
    }
    if (confirmPswValue !== passwordValue) {
        setErrorFor(confirmPassword, 'Le mot de passe ne correspond pas');
        return

    } else {
        alert('Vous vous êtes inscrit avec succès')
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



function eye(id) {
    if (document.getElementById(id).type == "text") {
        return (document.getElementById(id).type = "password");
    }
    return (document.getElementById(id).type = "text");
}