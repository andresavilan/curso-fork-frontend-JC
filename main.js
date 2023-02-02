const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector( '.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener( 'click', toggleMenuShoppingCart)


function toggleDesktopMenu() {
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuShoppingCart() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
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

console.log(productList);

renderProducts(productList)