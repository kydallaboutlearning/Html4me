const menu = document.querySelector("#mobile-menu")
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener("click", function(){
    menu.classList('is-active');
    menulinks.classList('active')
}
)