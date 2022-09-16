const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.burger-menu');

const cartMenu = document.querySelector('.cart-product-detail');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');

function toogleShoppingCart () {

    const menuMobileClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!desktopMenuClosed) { toogleDesktopMenu();}
    if (!menuMobileClosed) { toogleMobileMenu();}
    
    cartMenu.classList.toggle('inactive');
}

function toogleMobileMenu () {

    const cartMenuClosed = cartMenu.classList.contains('inactive');

    if (!cartMenuClosed) { toogleShoppingCart();}
    
    mobileMenu.classList.toggle('inactive');
}

function toogleDesktopMenu () {

    const cartMenuClosed = cartMenu.classList.contains('inactive');
    const menuMobileClosed = mobileMenu.classList.contains('inactive');

    if (!menuMobileClosed) { toogleMobileMenu();}
    if (!cartMenuClosed) { toogleShoppingCart();}

    desktopMenu.classList.toggle('inactive');
}

const productList = [];
productList.push ({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push ({
    name:'Computadora',
    price: 360,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push ({
    name:'Tablet',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProdcuts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const div = document.createElement('div');

        const price = document.createElement('p');
        price.textContent = '$'+ product.price;

        const name = document.createElement('p');
        name.textContent = product.name;

        const figure = document.createElement('figure');

        const imgCart = document.createElement('img');
        imgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        figure.appendChild(imgCart);

        div.appendChild(price);
        div.appendChild(name);

        productInfo.appendChild(div);
        productInfo.appendChild(figure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        const productsContainer = document.querySelector('.cards-container');
        productsContainer.appendChild(productCard);
    }
}

renderProdcuts(productList);
