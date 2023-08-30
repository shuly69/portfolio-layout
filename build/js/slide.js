let slider = document.querySelector('.slider')
let arrowNext = document.querySelector('.arrow-next')
let arrowPrev = document.querySelector('.arrow-prev')
let countSliders = slider.childElementCount
let offset = 0
let showSlider = 0
if((countSliders - 3) <= 0) {
    showSlider = countSliders
}else {
    showSlider = countSliders - 3
}
let sliderElemWidth = null
let sliderWidth = null
let offsetMax = 364 * showSlider

let sliderMenu = document.querySelector('.menu-slider__wrapper')
let sliderImg = document.querySelectorAll('.slider__list')
let sliderList = document.querySelectorAll('.menu-slider__item')

let arrayMenu = ['ALL']
let arrayName = {
    'ALL' : 'all',
    'UI/UX DESIGN' : 'ui-design',
    'PRODUCT DESIGN' : 'product-design',
    'BRANDING' : 'branding',
    'WEB DESIGN' : 'web-design'
}
let dotsParent = document.querySelector('.portfolio-dots')
let childDots = dotsParent.children
let countDotsParent = dotsParent.childElementCount
let currentDot = 0
let prevDot = 0

arrowNext.addEventListener('click', nextSlide)
arrowPrev.addEventListener('click', prevSlide)
sliderMenu.addEventListener('click', navMenu)

sliderImg.forEach(function(itemList) {
    itemList.addEventListener('mouseenter', sliderHover)
    itemList.addEventListener('mouseleave', sliderHover)
    
})



window.addEventListener('resize', resizeWindow)
window.addEventListener('load', resizeWindow)

function resizeWindow(event) {
    let elemWindow = event.currentTarget
    let elemWidth = elemWindow.innerWidth
    offsetMax = elemWidth
    if(elemWidth > 1000) {
        sliderWidth = (elemWidth - 48) / 3
        
        sliderImg.forEach(function(item) {
            item.style.width = '364px'
        })
    }
     if(elemWidth < 1000) {
        sliderWidth = (elemWidth - 20) / 3
        sliderImg.forEach(function(item) {
            item.style.width = (elemWidth - 20) / 3 + 'px'
        })
    }
        if(elemWidth < 500) {
        offsetMax = elemWidth * countSliders
        sliderWidth = elemWidth 
        sliderImg.forEach(function(item) {
            item.style.width = elemWidth + 'px'
        })
    }
    
}



function sliderHover(event) {
    let element = event.target
    let backgroundSlide = element.lastChild
    if(element.classList.contains('slider__list')) {
        if(event.type === 'mouseenter') {    
            backgroundSlide.style.display = 'flex'
        }else if (event.type === 'mouseleave') {
            backgroundSlide.style.display = 'none'
        }
    }
    
}

function nextSlide() {
    currentDot++
    offset += sliderWidth    
    if(offset > offsetMax) {
        offset = 0
    }

    prevDot = currentDot - 1
    slider.style.left = '-' + offset + 'px'
    if(currentDot > 2) {
        currentDot = 0    
    }

    if(prevDot < 0) {
        prevDot = 3
    }

    childDots[prevDot].classList.remove('slider-dots__item--active')
    childDots[currentDot].classList.add('slider-dots__item--active')
   
} 


function prevSlide() {
    currentDot--
    offset -= sliderWidth
    if(offset < 0) {
        offset = offsetMax
    }
    slider.style.left =  '-' + offset + 'px'
    prevDot = currentDot + 1
    if(currentDot < 0) {
        currentDot = 2   
    }

    if(prevDot > 2) {
        prevDot = 0
    }

    childDots[prevDot].classList.remove('slider-dots__item--active')
    childDots[currentDot].classList.add('slider-dots__item--active')
}

function navMenu(event) {
    let prevElem = ''
    let element = event.target
    let childElem = this.children
    let childCount = childElem.length
    if(element.classList.contains('menu-slider__item')) {
        currentDot = 0
        slider.style.left = 0
        for(let j = 0; j < countDotsParent; j++)  {       
            if(childDots[j].classList.contains('slider-dots__item--active')) {
                childDots[j].classList.remove('slider-dots__item--active')
                
            }
        }
        childDots[0].classList.add('slider-dots__item--active')
        switch(element.outerText) {
            case 'ALL' :     
            prevElem = arrayMenu.pop()        
            arrayMenu.push('ALL')    
            countSliders = document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).childElementCount
            offsetMax = sliderWidth * (countSliders - 1) 
            document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).style.display = 'flex'      
              if(arrayName.hasOwnProperty(prevElem)) {
                if(arrayName[prevElem] !== 'all') {
                    document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).style.display = 'none'
                    document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).classList.remove('slider')
                }
                
                document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).classList.add('slider')
              }
              break;
            
            case 'UI/UX DESIGN' :      
                prevElem = arrayMenu.pop()        
                arrayMenu.push('UI/UX DESIGN')   
                countSliders = document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).childElementCount
                 offsetMax = sliderWidth * (countSliders - 1)
                document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).style.display = 'flex'             
               
                if(arrayName.hasOwnProperty(prevElem)) {
                    if(arrayName[prevElem] !== 'ui-design') {
                    document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).classList.remove('slider')
                    document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).style.display = 'none'
                    }
                    document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).classList.add('slider')
                  }
                  break;

            case 'PRODUCT DESIGN' :
                prevElem = arrayMenu.pop()
                arrayMenu.push('PRODUCT DESIGN')   
                countSliders = document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).childElementCount            
                offsetMax = sliderWidth * (countSliders - 1) 
                document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).style.display = 'flex'  
                           
                  if(arrayName.hasOwnProperty(prevElem)) {
                    if(arrayName[prevElem] !== 'product-design') {
                        document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).classList.remove('slider')
                        document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).style.display = 'none'
                    }
                    document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).classList.add('slider')
                  }
                  break;

             case 'BRANDING' :      
                  prevElem = arrayMenu.pop()        
                  arrayMenu.push('BRANDING')    
                  countSliders = document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).childElementCount
                  offsetMax = sliderWidth * (countSliders - 1) 
                  document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).style.display = 'flex'             
                    if(arrayName.hasOwnProperty(prevElem)) {
                        if(arrayName[prevElem] !== 'branding') {
                            document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).style.display = 'none'
                        }
                      document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).classList.add('slider')
                    }
                   
                    break;  
                  
             case 'WEB DESIGN' :      
                    prevElem = arrayMenu.pop()        
                    arrayMenu.push('WEB DESIGN')   
                    countSliders = document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).childElementCount 
                    offsetMax = sliderWidth * (countSliders - 1) 
                    document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).style.display = 'flex'             
                      if(arrayName.hasOwnProperty(prevElem)) {
                        if(arrayName[prevElem] !== 'web-design') {
                            document.querySelector(`.portfolio-slider__${arrayName[prevElem]}`).style.display = 'none'
                        }
                        document.querySelector(`.portfolio-slider__${arrayName[arrayMenu[0]]}`).classList.add('slider')
                      }
                     
                      break;       
        }
   
        for(let i = 0; i < childCount; i++) {
            childElem[i].classList.remove('menu-slider__item--active')
        }
        element.classList.add('menu-slider__item--active')
    }
}

