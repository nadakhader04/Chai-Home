console.log('js');
let card = document.querySelector('.card');
let products = {
    vases: [
        {
            id: 0,
            name: 'Circular',
            price: 40 ,
            images: '../image/vase.jpg',
            quantity: 1
        },
        {
            id: 1,
            name: 'Zigzag',
            price: 70 ,
            images: '../image/vase1.jpg',
            quantity: 1
        },
        {
            id: 2,
            name: 'Transparent white',
            price: 20,
            images: '../image/vase2.jpg',
            quantity: 1
        },
        {
            id: 3,
            name: 'Transparent black',
            price: 20,
            images: '../image/vase3.jpg',
            quantity: 1
        },
        {
            id: 4,
            name: 'Resin',
            price: 60,
            images: '../image/vase4.jpg',
            quantity: 1
        }
    ],
    plates: [
        {
            id: 0,
            name: 'Dining set',
            price: 1294,
            images: '../image/p112.jpg',
            quantity: 1
        },
        {
            id: 1,
            name: 'Dining set for two people',
            price: 450,
            images: '../image/p111.jpg',
            quantity: 1
        },
        {
            id: 2,
            name: '10pc Simple dining set',
            price: 222,
            images: '../image/p114.jpg',
            quantity: 1
        },
        {
            id: 3,
            name: '45pc Shiny dining set',
            price: 69,
            images: '../image/p113.jpg',
            quantity: 1
        }
    ],
    cups: [
        {
            id: 0,
            name: '3PC Coffee Cups Ceramic Cups',
            price: 33,
            images: '../image/cup1.jpg',
            quantity: 1
        },
        {
            id: 1,
            name: 'A Ceramic Mug',
            price: 15,
            images: '../image/cup2.jpg',
            quantity: 1
        },
        {
            id: 2,
            name: '1pc 250ml, Cold Drink',
            price: 20,
            images: '../image/cup3.jpg',
            quantity: 1
        },
        {
            id: 3,
            name: '9pc Beige Cup Coffee',
            price: 120,
            images: '../image/cup4.jpg',
            quantity: 1
        },
        {
            id: 4,
            name: '6pc Tree cup',
            price: 80,
            images: '../image/cups.jpg',
            quantity: 1
        }
    ],
    Artistic: [
        {
            id: 0,
            name: 'Rose Girl 50x50',
            price: 40,
            images: '../image/Artistic paintings1.jpg',
            quantity: 1
        },
        {
            id: 1,
            name: 'Moon And Herbs 30x100',
            price: 220 ,
            images: '../image/Artistic paintings2.jpg',
            quantity: 1
        },
        {
            id: 2,
            name: 'Natural Mountains 90x50',
            price: '160₪',
            images: '../image/Artistic paintings3.jpg',
            quantity: 1
        }
    ],
    candles: [
        {
            id: 0,
            name: '5pc Collection Candle  ',
            price: 149,
            images: '../image/candles1.png',
            quantity: 1
        },
        {
            id: 1,
            name: '1pc Butterfly',
            price: 10 ,
            images: '../image/candles2.png',
            quantity: 1
        },
        {
            id: 2,
            name: '1pc Flower',
            price: 7,
            images: '../image/candles3.png',
            quantity: 1
        },
        {
            id: 3,
            name: 'Flowers Bouquet',
            price: 69 ,
            images: '../image/candles4.png',
            quantity: 1
        },
        {
            id: 4,
            name: '1pc Flower',
            price: 14 ,
            images: '../image/candles5.png',
            quantity: 1
        },
        {
            id: 5,
            name: 'Collection Candle',
            price: 198 ,
            images: '../image/candles6.png',
            quantity: 1
        },
        {
            id: 6,
            name: 'Flowers Bouquet',
            price: 59 ,
            images: '../image/candles7.png',
            quantity: 1
        },
        {
            id: 7,
            name: '1pc Chocolate',
            price: 14 ,
            images: '../image/candles8.png',
            quantity: 1
        },
        {
            id: 8,
            name: '1pc Strawberry',
            price: 14 ,
            images: '../image/candles9.png',
            quantity: 1
        },
        {
            id: 9,
            name: '1pc Croissant',
            price: 14 ,
            images: '../image/candles10.png',
            quantity: 1
        },
    ]
};


let productList = [];

function addToCard(key, category) {
    console.log(key);

    productList.push(products[category][key]);
    console.log(productList);
    
    reloadCart(category);
}


function productShow(category) {
    let product = products[category];
    console.log(product);
    product.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src='${value.images}' onclick="addToCard(${key}, '${category}')">
        <p>${value.name}</p>
        <p>${value.price} ₪</p>
        `;

        card.appendChild(newDiv);
    });
}

let listCart = document.querySelector('.listCart');
let headerCounter = document.querySelector('.cartLogo .counter'); 
let mainCounter = document.querySelector('#cartLogoMain .counter');
let total = document.querySelector('.total');


function reloadCart(category){

    listCart.innerHTML = '' ;
    let count = 0;
    let totalPrice = 0;

    console.log(productList);

    productList.forEach((value, key) =>{
        totalPrice += value.price * value.quantity;
        count += value.quantity;
        if(value!=null){
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
            <img class="cartImg" src='${value.images}'>
            <p>${value.name}</p>
            <p>${value.price} ₪</p>
            <div class="info">
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                <p>${value.quantity}</p>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            </div>
            `;

            listCart.appendChild(newDiv);
        }
    })
    headerCounter.innerText = count;
    mainCounter.innerText = count
    total.innerText = totalPrice ;
}


function changeQuantity(key, quantity, category) {

    if (quantity === 0)  delete productList[key];
    else  productList[key].quantity = quantity;
    
    reloadCart(category);
}



showAllProducts();

function showAllProducts() {
    for (let category in products) {
        productShow(category); 
    }
}



function check() {
    card.innerHTML = '';
    let anyChecked = false;

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked) {
            const category = item.id;
            console.log(category);
            if (products[category]) {
                productShow(category);
                anyChecked = true;
            }
        }
    });

    if (!anyChecked) showAllProducts();
}

let bar_ = document.getElementById('bar_');
let serch_ = document.getElementById('serch_');
let filter_ = document.getElementById('filter_');
let mycard_ = document.getElementById('mycard_');
let header = document.querySelector('.header-of-right');
let bars = document.querySelector('.bars');
let icons = document.querySelector('.icons');


function showHeader(){
    header.style.backgroundColor = '#C7BCA8';
    bars.style.display = 'inline';
    serch_.style.display = 'none';
    filter_.style.display = 'none';
}
var flag = true;

bar_.addEventListener('click', () => {
    if(!flag){ // colse
        bars.style.display = 'none';
        serch_.style.display = 'flex';
        filter_.style.display = 'flex';
        header.style.width = '15%'; 
        header.style.backgroundColor = 'white';
        mycard_.style.display = 'flex';
        flag = true
    }
    else{ // open bar
        bars.style.display = 'inline'; 
        serch_.style.display = 'none';
        filter_.style.display = 'none';
        mycard_.style.display = 'none';
        header.style.width = '35%'; 
        
        flag = false;
    }
});


let openCartHeader = document.querySelector('.cartLogo'); 
let openCartMain = document.querySelector('#cartLogoMain'); 
let closeCart = document.querySelector('.closeshopping'); 
let body = document.querySelector('.body'); 
let mycart = document.querySelector('.mycart');

function isSmallScreen() {
    return window.matchMedia("(max-width: 1000px)").matches;
}



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

openCartHeader.addEventListener('click', showCart);

openCartMain.addEventListener('click', showCart);




let serchMain = document.querySelector('.serch');

function serchOfProduct() {
    let serchValue = serchMain.value.toLowerCase();
    card.innerHTML = '';
    for (let category in products) {
        
        products[category].forEach(product => {
            if (product.name.toLowerCase().includes(serchValue)) {
                productSearch(category, product);
            }
        });
    }
}

function productSearch(category, product) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <img src='${product.images}' onclick="addToCard(${product.id}, '${category}')">
        <p>${product.name}</p>
        <p>${product.price} ₪</p>
    `;

    card.appendChild(newDiv);
}



let dark = document.querySelector('.dark');
let light = document.querySelector('.light');

dark.addEventListener('click', darkMode);
light.addEventListener('click', lightMode);

function darkMode() {
    body.style.backgroundColor = 'rgba(12, 10, 10, 0.795)';
    body.style.color = 'white';
    dark.style.display = 'none';  
    light.style.display = 'inline';  
}

function lightMode() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    light.style.display = 'none';  
    dark.style.display = 'inline';  
}
