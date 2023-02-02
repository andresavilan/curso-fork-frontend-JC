const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector( '.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

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