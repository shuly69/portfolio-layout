let testimonialSlider = document.querySelector('.testimonial-slider')
let testimonialTextSlider = document.querySelector('.testimonial-text')
let testimonialTextSliderItem = document.querySelectorAll('.testimonial-text__item')
let testimonialNext = document.querySelector('.testimonial-next')
let testimonialPrev = document.querySelector('.testimonial-prev')
let leftT = 0
let leftMax = 364 * 2
let numTitle = 0

let leftB = 0
let leftMaxText = 429 * 2
let sliderTextWidth = 429

let dotsTestimonial = document.querySelector('.testimonial-dots')
let childDotsTestimonial = dotsTestimonial.children
let countDotsTestimonial = dotsTestimonial.childElementCount
let currentDotTestimonial = 0
let prevDotTestimonial = 0

testimonialNext.addEventListener('click', nextTestimonial)
testimonialPrev.addEventListener('click', prevTestimonial)

function nextTestimonial() {
    currentDotTestimonial++
    leftT += 364    
    if(leftT > leftMax) {
        leftT = 0
    }

    leftB += sliderTextWidth
    if(leftB > leftMaxText) {
        leftB = 0
    }

    prevDotTestimonial = currentDotTestimonial - 1

    testimonialSlider.style.left = '-' + leftT + 'px'
    testimonialTextSlider.style.left = '-' + leftB + 'px'

    if(currentDotTestimonial > 2) {
        currentDotTestimonial = 0    
    }

    if(prevDotTestimonial < 0) {
        prevDotTestimonial = 3
    }

    numTitle = currentDotTestimonial + 1
    document.querySelector('.testimonial-header__span').innerHTML = '0' + numTitle
    childDotsTestimonial[prevDotTestimonial].classList.remove('slider-dots__item--active')
    childDotsTestimonial[currentDotTestimonial].classList.add('slider-dots__item--active')
}

function prevTestimonial() {
    currentDotTestimonial--
    leftT -= 364
    if(leftT < 0) {
        leftT = leftMax
    }

    leftB -= sliderTextWidth
    if(leftB < 0) {
        leftB = leftMaxText
    }

    testimonialSlider.style.left =  '-' + leftT + 'px'
    testimonialTextSlider.style.left = '-' + leftB + 'px'

    prevDotTestimonial = currentDotTestimonial + 1
    if(currentDotTestimonial < 0) {
        currentDotTestimonial = 2   
    }

    if(prevDotTestimonial > 2) {
        prevDotTestimonial = 0
    }

    numTitle = currentDotTestimonial + 1
    document.querySelector('.testimonial-header__span').innerHTML = '0' + numTitle

    childDotsTestimonial[prevDotTestimonial].classList.remove('slider-dots__item--active')
    childDotsTestimonial[currentDotTestimonial].classList.add('slider-dots__item--active')
}

window.addEventListener('load', resizeWindow)

function resizeWindow(event) {
    let elemWindow = event.currentTarget
    let elemWidth = elemWindow.innerWidth
        if(elemWidth < 450) {
        leftMaxText = elemWidth * 2
        sliderTextWidth = elemWidth 
        testimonialTextSliderItem.forEach(function(item) {
            item.style.minWidth = elemWidth + 'px'
        })
    }
}
