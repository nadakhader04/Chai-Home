let count = 0;
const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const name_ = document.getElementById('name_');
const submitInput = document.querySelector('.submitInput');
const submit = document.querySelector('.submit');





console.log('js');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    count = 0;
    validateInputs();
    console.log(count);
    if(count === 5){
        window.location.href = '/index.html';
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    errorDisplay.style.color = 'red';
};


const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    count++;
};

    
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();
    const namevalue = name_.value.trim();
    
    if(namevalue === ''){
        setError(name_, '*Please enter your name');
    }
    else{
        setSuccess(name_);
    }
    if (usernameValue === '') {
        setError(username, '*Please enter your username');
    }
    else {
        setSuccess(username);
    }

    if (passwordValue.length < 8) {
        setError(password, '*Password must be at least 8 characters long');
    } 
    else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, '*Please confirm your password');
    } 
    else if (password2Value !== passwordValue) {
        setError(password2, '*Passwords do not match');
    } 
    else {
        setSuccess(password2);
    }

    if (emailValue === '' ) {
        setError(email, '*Please enter your email');
    } 
    else if (!isValidEmail(emailValue)) {
        setError(email, '*Enter a valid email address');
    } 
    else {
        setSuccess(email);
    }
};


const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};








let signUp = document.querySelector('.signUp');
let body = document.querySelector('body');
let dark = document.querySelector('.dark');
let light = document.querySelector('.light');


dark.addEventListener('click', darkMode);
light.addEventListener('click', lightMode);

function darkMode() {
    body.style.backgroundColor = 'rgba(12, 10, 10, 0.795)';
    body.style.color = 'white';
    dark.style.display = 'none';  
    light.style.display = 'inline';  
    console.log('yes');
    signUp.style.backgroundColor = '#C7BCA8';
}

function lightMode() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    light.style.display = 'none';  
    dark.style.display = 'inline';  
    signUp.style.backgroundColor = '#f5f5f5';
}




let openCartHeader = document.querySelector('.cartLogo'); 

openCartHeader.addEventListener('click', ()=>{
    alert('Register first');
});