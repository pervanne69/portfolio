const body = document.body

const burgerBtn = body.querySelector('.burger__logo')

const burgerCloseBtn = body.querySelector('.burger__close')

const burgerItems = document.querySelector('.burger__items')

burgerCloseBtn.addEventListener('click', e => {
    burgerItems.classList.add('burger__items-passive')
    burgerItems.classList.remove('burger__items-active')
})

burgerBtn.addEventListener('click', e => {
    burgerItems.classList.add('burger__items-active')
    burgerItems.classList.remove('burger__items-passive')
})

