let burgerMenu = document.querySelector('.burger-menu')
let switchMenu = 0
burgerMenu.addEventListener('click', showMenu)

function showMenu(event) {
    console.log(1)
    let elem = event.target
    let elemMenu = elem.nextElementSibling
    if(switchMenu === 1) {
        elemMenu.style.display = 'none'
        switchMenu = 0
    }else {
        elemMenu.style.display = 'block'
        switchMenu = 1
    }
    
}