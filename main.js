let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let bodyMain = document.querySelector('body');
let Payment = document.querySelector('.payment');
let signUp = document.querySelector('.SBox');

const submitInput = document.querySelector('.submitInput');
const submit = document.querySelector('.submit');
const form = document.querySelector('.tail');





dark.addEventListener('click', darkMode);
light.addEventListener('click', lightMode);

function darkMode() {
    bodyMain.style.backgroundColor = 'rgba(12, 10, 10, 0.795)';
    bodyMain.style.color = 'white';
    dark.style.display = 'none';  
    light.style.display = 'inline';  
    Payment.style.backgroundColor = 'rgba(211, 194, 174, 0.527)';
    signUp.style.backgroundColor = 'rgba(211, 194, 174, 0.527)';
}

function lightMode() {
    bodyMain.style.backgroundColor = 'white';
    bodyMain.style.color = 'black';
    light.style.display = 'none';  
    dark.style.display = 'inline';  
    Payment.style.backgroundColor = '#f5f5f5';
    signUp.style.backgroundColor = '#f5f5f5';
}








form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const submitInputValue = submitInput.value.trim();

    if (submitInputValue === '') {
        setError(submitInput, '*Please enter your email');
    } 
    else if (!isValidEmail(submitInputValue)) {
        setError(submitInput, '*Enter a valid email address');
    } 
    else {
       setSuccess(submitInput);
    }
});


const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    errorDisplay.style.color = 'red';
    errorDisplay.style.fontSize = '1.5rem';
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = ''; 
    submit.addEventListener('click', () => {
        console.log("Button clicked, navigating to signup page."); // للتأكد من تشغيل الحدث

        window.location.href = '/page/ssignUp.html'; 
    });
    
};







let openCartHeader = document.querySelector('.cartLogo'); 
let closeCart = document.querySelector('.closeshopping'); 
let mycart = document.querySelector('.mycart');

openCartHeader.addEventListener('click', showCart);

function showCart() {
    mycart.style.display = 'inline';  
    bodyMain.classList.add('active'); 
    if (isSmallScreen()) {
        header.style.display = 'none'; 
    }
}


closeCart.addEventListener('click', ()=> {
    mycart.style.display = 'none';
    bodyMain.classList.remove('active'); 
    if (isSmallScreen()) {
        header.style.display = 'inline'; 
    }
});

function isSmallScreen() {
    return window.matchMedia("(max-width: 1000px)").matches;
}