let questions = document.querySelectorAll('.question__list')
let switchQuestion = 0
questions.forEach(function(item) {
    item.addEventListener('click', questionHover)
})

function questionHover(event) {
    let question = this
    let countQuestion = question.childElementCount
    let childrenQuestion = question.children
    let textHidden = childrenQuestion[countQuestion - 1]
    if(switchQuestion === 0) {     
        textHidden.style.display = 'block'
        question.style.backgroundColor = '#ffffff'
        question.classList.add('question__list--close')
        switchQuestion = 1
    }else {
        textHidden.style.display = 'none'
        question.style.backgroundColor = ''
        question.classList.remove('question__list--close')
        switchQuestion = 0
    }
 
   console.dir(question)
}