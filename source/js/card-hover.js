let cardItem = document.querySelectorAll('.card__item')

cardItem.forEach(function(item) {
    item.addEventListener('mouseenter', cardHover)
    item.addEventListener('mouseleave', cardHover)
})

function cardHover(event) {
    let card = this
    let cardChildren = card.children
    let svgItem = cardChildren[0].firstElementChild
    if(event.type === 'mouseenter') {
        card.style.backgroundColor = '#FE390C'
        svgItem.style.fill = '#fff'
        cardChildren[1].style.color = '#fff'
        cardChildren[2].style.color = '#fff'
    }else if(event.type === 'mouseleave') {
        card.style.backgroundColor = ''
        svgItem.style.fill = ''
        cardChildren[1].style.color = ''
        cardChildren[2].style.color = ''
    }
}