const body = document.body

const burgerBtn = body.querySelector('.burger__logo')

const burgerCloseBtn = body.querySelector('.burger__close')

const burgerItems = document.querySelector('.burger__items')

const burgerContent = document.querySelector('.burger__content')

burgerContent.querySelectorAll('.burger__item').forEach(el => {
    el.addEventListener('click', () => {
        burgerItems.classList.add('burger__items-passive')
        burgerItems.classList.remove('burger__items-active')
    })
})

burgerCloseBtn.addEventListener('click', () => {
    burgerItems.classList.add('burger__items-passive')
    burgerItems.classList.remove('burger__items-active')
})

burgerBtn.addEventListener('click', () => {
    burgerItems.classList.add('burger__items-active')
    burgerItems.classList.remove('burger__items-passive')
})

