const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector( '.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener( 'click', toggleMenuShoppingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)




function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuShoppingCart() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];

productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push ({
    name: 'skate',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push ({
    name: 'Ball',
    price: 80,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(nameArray) {
    
    for (product of nameArray) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p')
        productPrice.innerText= '$' + product.price

        const productName = document.createElement('p')
        productName.innerText = product.name

        productInfoDiv.append(productPrice, productName)

        const productFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productFigure.append(productImgCart)

        productInfo.append(productInfoDiv, productFigure)

        productCard.append(productImg, productInfo)

        cardsContainer.append (productCard)
    }
}

renderProducts(productList)