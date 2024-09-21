console.log('js');
let formPayment = document.getElementById('details');
let cardNumber = document.getElementById('cardNumber');
let name__ = document.getElementById('name');
let cvv = document.getElementById('cvv');
let valid = document.getElementById('valid');
let submitButton = document.getElementById('pay');

console.log(formPayment);
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('validINput')
    validateInputsPayment();
});

const setErrorPayment = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
};

const setSuccessPayment = (element) => {
    console.log('true');
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
};

const validateInputsPayment = () => {
    const nameValue = name__.value.trim();
    const cardNumberValue = cardNumber.value.trim(); 
    const cvvValue = cvv.value.trim();
    const validValue = valid.value.trim();
    let count = 0;

    if (nameValue === '') {
        setErrorPayment(name__, '*Please enter your name');
    } else {
        setSuccessPayment(name__);
        count++;
    }

    if (cardNumberValue === '' || cardNumberValue.length !== 16 || !/^\d+$/.test(cardNumberValue)) {
        setErrorPayment(cardNumber, '*Please enter a valid 16-digit card number');
    } else {
        setSuccessPayment(cardNumber);
        count++;
    }

    if (validValue === '') {
        setErrorPayment(valid, '*Please enter a valid date (MM/YY)');
    } else {
        setSuccessPayment(valid);
        count++;
    }

    if (cvvValue === '' || cvvValue.length !== 3 || !/^\d+$/.test(cvvValue)) {
        setErrorPayment(cvv, '*Please enter a valid 3-digit CVV');
    } else {
        setSuccessPayment(cvv);
        count++;
    }

    if (count === 4) {
        alert('Payment details are valid! Proceeding with payment...');
    }
};






let payment = document.querySelector('.payment');
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
    payment.style.backgroundColor = '#C7BCA8';
}

function lightMode() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    light.style.display = 'none';  
    dark.style.display = 'inline';  
    payment.style.backgroundColor = '#f5f5f5';
}






let openCartHeader = document.querySelector('.cartLogo'); 
let closeCart = document.querySelector('.closeshopping'); 
let mycart = document.querySelector('.mycart');

openCartHeader.addEventListener('click', showCart);

function showCart() {
    mycart.style.display = 'inline';  
    body.classList.add('active'); 
    if (isSmallScreen()) {
        header.style.display = 'none'; 
    }
}


closeCart.addEventListener('click', ()=> {
    mycart.style.display = 'none';
    body.classList.remove('active'); 
    if (isSmallScreen()) {
        header.style.display = 'inline'; 
    }
});

function isSmallScreen() {
    return window.matchMedia("(max-width: 1000px)").matches;
}